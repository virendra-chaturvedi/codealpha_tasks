var progress = document.getElementById("progress");
var a=document.getElementById("audio");
var arr = [
    {
        "song":"music/Boy With Luv.mp3",
        "title":"Boy With Luv",
        "image":"images/img1.jpg",
    },
    {
        "song":"music/Dandelions.mp3",
        "title":"Dandelions",
        "image":"images/img2.jpg",
    },
    {
        "song":"music/Mom's Old Hatchback.mp3",
        "title":"Mom's Old Hatchback",
        "image":"images/img3.jpg",
    },
    {
        "song":"music/I Love You.mp3",
        "title":"I Love You",
        "image":"images/img4.jpg",
    },
];
function aplay()
{
//window.alert("hii");
a.play();
document.getElementById('pl').style.display="none"
document.getElementById("pa").style.display="inline"
}

function apause()
{
//window.alert("check");
a.pause();
document.getElementById('pl').style.display="inline"
document.getElementById("pa").style.display="none"
}

var i=0;
function aforward()
{
//window.alert("hii");
i = i+1;
if(arr.length==i)
{
    i=0
}
a.src = arr[i].song;
document.getElementById("box").style.backgroundImage = "url("+arr[i].image +")";
document.getElementById("title").innerText = arr[i].title;
progress.value = 0;
a.play();
}

function abackward()
{
//window.alert("hii");
i = i-1;
if(i<0)
{
    i = arr.length-1
}
a.src = arr[i].song;
document.getElementById("box").style.backgroundImage = "url("+arr[i].image +")";
document.getElementById("title").innerText = arr[i].title;
progress.value = 0;
a.play()
}
document.getElementById("title").innerText = arr[0].title;

a.addEventListener("loadedmetadata", function() {
    progress.max = a.duration;
});

a.addEventListener("timeupdate", function() {
    progress.value = a.currentTime;
});

progress.addEventListener("input", function() {
    a.currentTime = progress.value;
});