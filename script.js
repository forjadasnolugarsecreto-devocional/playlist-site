const songs=[

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
title:"Você Viverá — Rebeca Carvalho",
id:"66BP5rpxydo"
},

{
title:"Do Secreto ao Florescer",
id:"r-ZmU6vO6uc"
},

{
title:"Mil Motivos Para Agradecer",
id:"IhQlArzkCLU"
},

{
title:"Deus, Eu Tenho Tantas Bênçãos",
id:"Xq_07hEF2AQ"
},

{
title:"Ele Cumprirá / Firme nas Promessas",
id:"OBoIfiHaxXc"
},

{
title:"Lágrimas",
id:"o0gY6ZnXNhE"
},

{
title:"Das Raízes à Colheita",
id:"jQbPXZt7i98"
}

];

const playlist=document.getElementById("playlist");
const player=document.getElementById("player");

songs.forEach((song,index)=>{

    const div=document.createElement("div");

    div.className="music";

    if(index===0){
        div.classList.add("active");
    }

    div.textContent=song.title;

    div.onclick=()=>{

        document.querySelectorAll(".music")
            .forEach(item=>item.classList.remove("active"));

        div.classList.add("active");

        player.src=`https://www.youtube.com/embed/${song.id}?autoplay=1&rel=0`;

    };

    playlist.appendChild(div);

});
