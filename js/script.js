const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const PlayPause = document.querySelector('.PlayPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

//create song list

const songList = [
    {path:'song/Naruto Shippuden.mp3', songName:'Naruto Remix'},
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