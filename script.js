const songs = [
    {
        title: "Oração Forjadas no Lugar Secreto",
        id: "Kv4eCXia5fQ"
    },
    {
        title: "O Senhor é Meu Pastor — Manú Paiva",
        id: "WTen9x3j6Sw"
    },
    {
        title: "Eu Nunca Fui Forte — Canção & Louvor",
        id: "Sg0_mFLVqZo"
    },
    {
        title: "Testemunho Lindo — Débora Almeida",
        id: "dNMIxWWxYNo"
    },
    {
        title: "No Secreto — Kailane Frauches",
        id: "QYKpysFX-9I"
    },
    {
        title: "Você Viverá — Rebeca Carvalho feat. Leandro Borges",
        id: "66BP5rpxydo"
    },
    {
        title: "Do Secreto ao Florescer — Janaína Banderob Medeiros",
        id: "r-ZmU6vO6uc"
    },
    {
        title: "Mil Motivos Para Agradecer — Rachel Novaes",
        id: "IhQlArzkCLU"
    },
    {
        title: "Deus, Eu Tenho Tantas Bênçãos — Isadora Pompeo",
        id: "Xq_07hEF2AQ"
    },
    {
        title: "Ele Cumprirá / Firme nas Promessas — Julliany Souza",
        id: "OBoIfiHaxXc"
    },
    {
        title: "Lágrimas — Sara Evelyn",
        id: "o0gY6ZnXNhE"
    },
    {
        title: "Das Raízes à Colheita — Janaína Banderob Medeiros",
        id: "jQbPXZt7i98"
    }
];

let player;
let currentSong = 0;

const playlist = document.getElementById("playlist");

function createPlaylist() {

    playlist.innerHTML = "";

    songs.forEach((song, index) => {

        const item = document.createElement("div");

        item.className = "music";

        if (index === 0) {
            item.classList.add("active");
        }

        item.innerHTML = `
            <span class="number">${String(index + 1).padStart(2, "0")}.</span>
            <span class="title">${song.title}</span>
        `;

        item.addEventListener("click", () => {

            playSong(index);

        });

        playlist.appendChild(item);

    });

}

function onYouTubeIframeAPIReady() {

    player = new YT.Player("youtube-player", {

        width: "100%",
        height: "110",

        videoId: songs[0].id,

        playerVars: {

            rel: 0,
            modestbranding: 1,
            controls: 1

        },

        events: {

            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange

        }

    });

}

function onPlayerReady() {

    highlightSong(0);

}

function onPlayerStateChange(event) {

    if (event.data === YT.PlayerState.ENDED) {

        nextSong();

    }

}

function playSong(index) {

    currentSong = index;

    player.loadVideoById(songs[index].id);

    highlightSong(index);

}

function nextSong() {

    currentSong++;

    if (currentSong >= songs.length) {

        currentSong = 0;

    }

    playSong(currentSong);

}

function previousSong() {

    currentSong--;

    if (currentSong < 0) {

        currentSong = songs.length - 1;

    }

    playSong(currentSong);

}

function highlightSong(index) {

    document.querySelectorAll(".music").forEach(item => {

        item.classList.remove("active");

    });

    document.querySelectorAll(".music")[index].classList.add("active");

}

createPlaylist();
