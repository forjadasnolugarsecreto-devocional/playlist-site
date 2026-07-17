const songs = [

{
title:"Canção & Louvor - Eu Nunca Fui Forte",
id:"Sg0_mFLVqZo"
},

{
title:"Stella Laura - O Senhor é Meu Pastor",
id:"WTen9x3j6Sw"
},

{
title:"Débora Almeida - Testemunho Lindo",
id:"dNMIxWWxYNo"
}

];



let player;



function onYouTubeIframeAPIReady(){


player = new YT.Player(
"youtube-player",

{

height:"280",

width:"100%",


videoId:songs[0].id,


playerVars:{

controls:1,

rel:0

}


});


}



const playlist = document.getElementById("playlist");



songs.forEach((song)=>{


let item=document.createElement("div");


item.className="music";


item.innerHTML=song.title;



item.onclick=function(){


player.loadVideoById(song.id);


};


playlist.appendChild(item);



});
