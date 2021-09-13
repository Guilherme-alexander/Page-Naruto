const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const PlayPause = document.querySelector('.PlayPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//create song list

const songList = [
    {path:'song/Naruto Shippuden.mp3', songName:'Naruto Remix'},
    {path:'song/Ikimono Gakari  Blue Bird Traduo.mp3', songName:'Blue Bird'},
    {path:'song/Ikimono Gakari Traduo Portugus Blue Bird PTBR.mp3', songName:'Blue Bird PTBR'},
    {path:'song/Rap do Naruto  Tauz RapTributo 05.mp3', songName:'Tauz Naruto I'},
    {path:'song/Rap do Naruto Remake  Tauz RapTributo 73.mp3', songName:'Tauz Naruto II'},
    {path:'song/Rap do Rock Lee Naruto  Tauz 44.mp3', songName:'Tauz Rock Lee'},
    {path:'song/Rap do Gaara Naruto.mp3', songName:'Tauz Gaara'},
    {path:'song/Rap do Minato Naruto  Tauz RapTributo 01.mp3', songName:'Tauz Minato'},
    {path:'song/Rap do Jiraiya Naruto  Tauz RapTributo 48.mp3', songName:'Tauz Jiraiya'},
    {path:'song/Rap do Kakashi Naruto  Tauz RapTributo 09.mp3', songName:'Tauz Kakashi'},
    {path:'song/Rap do Obito Naruto  Tauz RapTributo 38.mp3', songName:'Tauz Obito'},
    {path:'song/Rap do Madara Naruto l Tributo 11.mp3', songName:'Tauz Madara'},
    {path:'song/Rap do Shisui Naruto  Tauz RapTributo 54.mp3', songName:'Tauz Shisui'},
    {path:'song/Rap do Itachi Naruto  Tauz RapTributo 18.mp3', songName:'Tauz Itachi'},
    {path:'song/Rap do Sasuke Pt II Naruto  Tauz RapTributo 19.mp3', songName:'Tauz Sasuke'},
];

let song_Playing = false;

//play song
function playSong(){
    song_Playing = true;
    audio.play();
    PlayPause.classList.add('active');
    PlayPause.innerHTML = '<ion-icon name="pause-outline"></ion-icon>'
}
//pause song
function pauseSong(){
    song_Playing = false;
    audio.pause();
    PlayPause.classList.remove('active');
    PlayPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>'
}

//player or pause song on click

PlayPause.addEventListener('click', () => (song_Playing ?
pauseSong() : playSong()));

//load song
function loadSong(songList){
    title.textContent = songList.songName;
    audio.src = songList.path;
}

//current song

let i = 0;

//on load - select first song form song list
loadSong(songList[i]);

//prev song
function prevSong(){
    i--;
    if(i < 0){
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

//next song
function nextSong(){
    i++;
    if(i > songList.length - 1){
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);