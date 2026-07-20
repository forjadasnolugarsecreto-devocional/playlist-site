const songs = [

{
title:"Oração Forjadas no Lugar Secreto",
id:"Kv4eCXia5fQ"
},

{
title:"O Senhor é Meu Pastor — Manú Paiva",
id:"WTen9x3j6Sw"
},

{
title:"Eu Nunca Fui Forte — Canção & Louvor",
id:"Sg0_mFLVqZo"
},

{
title:"Testemunho Lindo — Débora Almeida",
id:"dNMIxWWxYNo"
},

{
title:"No Secreto — Kailane Frauches",
id:"QYKpysFX-9I"
},

{
title:"Você Viverá — Rebeca Carvalho feat. Leandro Borges",
id:"66BP5rpxydo"
},

{
title:"Do Secreto ao Florescer — Janaína Banderob Medeiros",
id:"r-ZmU6vO6uc"
},

{
title:"Mil Motivos Para Agradecer — Rachel Novaes",
id:"IhQlArzkCLU"
},

{
title:"Deus, Eu Tenho Tantas Bênçãos — Isadora Pompeo",
id:"Xq_07hEF2AQ"
},

{
title:"Ele Cumprirá / Firme nas Promessas — Julliany Souza",
id:"OBoIfiHaxXc"
},

{
title:"Lágrimas — Sara Evelyn",
id:"o0gY6ZnXNhE"
},

{
title:"Das Raízes à Colheita — Janaína Banderob Medeiros",
id:"jQbPXZt7i98"
}

];

const playlist = document.getElementById("playlist");
const player = document.getElementById("player");

let current = 0;

function play(index){

    current = index;

    document.querySelectorAll(".music").forEach(item=>{
        item.classList.remove("active");
    });

    document.querySelectorAll(".music")[index].classList.add("active");

    player.src =
`https://www.youtube.com/embed/${songs[index].id}?autoplay=1&rel=0&enablejsapi=1`;

}

songs.forEach((song,index)=>{

    const div=document.createElement("div");

    div.className="music";

    if(index===0){
        div.classList.add("active");
    }

    div.innerHTML=`
        <span class="icon">♪</span>
        <span>${index+1}. ${song.title}</span>
    `;

    div.onclick=()=>play(index);

    playlist.appendChild(div);

});

window.addEventListener("message",(event)=>{

    if(typeof event.data !== "string") return;

    if(event.data.includes('"event":"onStateChange"') &&
       event.data.includes('"info":0')){

        let next=current+1;

        if(next>=songs.length){
            next=0;
        }

        play(next);

    }

});
