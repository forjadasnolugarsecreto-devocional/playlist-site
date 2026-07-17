const playlist = [

{
title:"Música 1",
id:"Sg0_mFLVqZo"
},

{
title:"Música 2",
id:"WTen9x3j6Sw"
},

{
title:"Música 3",
id:"dNMIxWWxYNo"
},

{
title:"Música 4",
id:"QYKpysFX-9I"
},

{
title:"Música 5",
id:"66BP5rpxydo"
},

{
title:"Música 6",
id:"Kv4eCXia5fQ"
}

];

const playlistDiv=document.getElementById("playlist");

const player=document.getElementById("player");

const title=document.getElementById("currentTitle");

const container=document.getElementById("playerContainer");

playlist.forEach((music,index)=>{

const btn=document.createElement("button");

btn.className="music";

btn.innerHTML="🎵 "+music.title;

btn.onclick=function(){

document.querySelectorAll(".music").forEach(item=>item.classList.remove("active"));

btn.classList.add("active");

container.classList.remove("hidden");

title.innerText=music.title;

player.src=`https://www.youtube.com/embed/${music.id}?autoplay=1`;

player.scrollIntoView({

behavior:"smooth",

block:"center"

});

};

playlistDiv.appendChild(btn);

});
