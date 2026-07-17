const playlist = [
    {
        title: "Música 1",
        youtubeId: "Sg0_mFLVqZo"
    },
    {
        title: "Música 2",
        youtubeId: "WTen9x3j6Sw"
    },
    {
        title: "Música 3",
        youtubeId: "dNMIxWWxYNo"
    },
    {
        title: "Música 4",
        youtubeId: "QYKpysFX-9I"
    },
    {
        title: "Música 5",
        youtubeId: "66BP5rpxydo"
    },
    {
        title: "Música 6",
        youtubeId: "Kv4eCXia5fQ"
    }
];

let currentIndex = 0;
let player;
let playing = false;

function onYouTubeIframeAPIReady() {

    player = new YT.Player("player", {
        height: "1",
        width: "1",
        videoId: playlist[0].youtubeId,
        playerVars: {
            autoplay: 0,
            controls: 0,
            rel: 0
        },
        events: {
            onReady: renderPlaylist,
            onStateChange: onPlayerStateChange
        }
    });

}

function renderPlaylist(){

    const container = document.getElementById("playlist");

    container.innerHTML = "";

    playlist.forEach((music,index)=>{

        const button = document.createElement("button");

        button.className = "music";

        button.innerText = music.title;

        button.onclick = ()=>playMusic(index);

        container.appendChild(button);

    });

}

function playMusic(index){

    currentIndex = index;

    player.loadVideoById(playlist[index].youtubeId);

    document.getElementById("currentTitle").innerText = playlist[index].title;

    document.querySelectorAll(".music").forEach(btn=>{
        btn.classList.remove("active");
    });

    document.querySelectorAll(".music")[index].classList.add("active");

    playing = true;

    document.getElementById("playPause").innerText = "⏸";

}

document.getElementById("playPause").onclick = function(){

    if(!player) return;

    if(playing){

        player.pauseVideo();

        playing = false;

        this.innerText = "▶";

    }else{

        player.playVideo();

        playing = true;

        this.innerText = "⏸";

    }

};

document.getElementById("next").onclick = function(){

    currentIndex++;

    if(currentIndex >= playlist.length){

        currentIndex = 0;

    }

    playMusic(currentIndex);

};

document.getElementById("prev").onclick = function(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = playlist.length - 1;

    }

    playMusic(currentIndex);

};

function onPlayerStateChange(event){

    if(event.data === YT.PlayerState.ENDED){

        currentIndex++;

        if(currentIndex >= playlist.length){

            currentIndex = 0;

        }

        playMusic(currentIndex);

    }

}
