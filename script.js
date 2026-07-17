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

const container=document.getElementById("playlist");

const iframe=document.getElementById("player");

const title=document.getElementById("currentTitle");

playlist.forEach((music,index)=>{

const btn=document.createElement("button");

btn.className="music";

btn.innerText=music.title;

btn.onclick=()=>{

document.querySelectorAll(".music").forEach(item=>item.classList.remove("active"));

btn.classList.add("active");

title.innerText=music.title;

iframe.src=`https://www.youtube.com/embed/${music.id}?autoplay=1`;

};

container.appendChild(btn);

});

btn=container.children[0];

btn.click();
