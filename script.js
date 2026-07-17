const playlist = [

{
title:"Canção & Louvor | Eu Nunca Fui Forte",
id:"Sg0_mFLVqZo"
},

{
title:"Stella Laura | O Senhor é o Meu Pastor",
id:"WTen9x3j6Sw"
},

{
title:"Débora Almeida | Testemunho Lindo",
id:"dNMIxWWxYNo"
},

{
title:"Kailane Frauches | No Secreto",
id:"ID_DO_VIDEO"
},

{
title:"Rebeca Carvalho & Leandro Borges - Você Viverá",
id:"ID_DO_VIDEO"
},

{
title:"Oração Forjadas no Lugar Secreto",
id:"ID_DO_VIDEO"
}

];


let player;

let current=0;


function onYouTubeIframeAPIReady(){

player = new YT.Player('player',{

height:'120',

width:'100%',

videoId:playlist[0].id,

playerVars:{
controls:1,
rel:0
}

});

}


const list=document.getElementById("playlist");


playlist.forEach((music,index)=>{

let div=document.createElement("div");

div.className="music";

div.innerHTML=music.title;


div.onclick=()=>{

current=index;

player.loadVideoById(music.id);

document.getElementById("current").innerHTML=music.title;

};


list.appendChild(div);


});



function playPause(){

let state=player.getPlayerState();

if(state===1){

player.pauseVideo();

}else{

player.playVideo();

}

}



function next(){

current++;

if(current>=playlist.length)
current=0;


player.loadVideoById(playlist[current].id);

document.getElementById("current").innerHTML=playlist[current].title;

}



function previous(){

current--;

if(current<0)
current=playlist.length-1;


player.loadVideoById(playlist[current].id);

document.getElementById("current").innerHTML=playlist[current].title;

}
