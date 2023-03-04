
//music info
const musicInfo = [
    {
        musicName: "Saza E Maut",
        musicTime: "3:15",
        artistName: "Raftaar x KR$NA",
    },
    {
        musicName: "Click Pow Get Down",
        musicTime: "3:15",
        artistName: "Raftaar x fff Fortnite",
    },
    {
        musicName: "Tu Phir Se KAAAana",
        musicTime: "1:25",
        artistName: "Raftaar x Salim Merchant rewe Karma",
    },
    {
        musicName: "Saza E Mauft",
        musicTime: "3:45",
        artistName: "Raftaar x KR$NA",
    },
    {
        musicName: "Click Pow Get Down",
        musicTime: "2:15",
        artistName: "Raftaar x Fortnite",
    },
    {
        musicName: "Tu Phir Se Aana",
        musicTime: "1:15",
        artistName: "Raftaar x Salim Merchant xxx Karma",
    }

];

// playlist
const musicPlaylist = document.querySelector(".music-playlist");
const musicPlayer = document.querySelector(".music-player");
const playlistOpenBtn = document.querySelector(".playlist-open-btn");
const playlistCloseBtn = document.querySelector(".playlist-close-btn");
const playlist = document.querySelector(".playlist");

const openPlaylist = () => {
    musicPlayer.classList.add("open");
    musicPlaylist.classList.add("open");
};

const closePlaylist = () => {
    musicPlayer.classList.remove("open");
    musicPlaylist.classList.remove("open");
};

playlistOpenBtn.onclick = () => openPlaylist();
playlistCloseBtn.onclick = () => closePlaylist();

musicInfo.forEach((item, index) => {
    let playlistItem = document.createElement("div");
    playlistItem.classList.add("playlist-item");

    let playlistItemInfo = document.createElement("div");
    playlistItemInfo.classList.add("playlist-item-info");
    playlistItem.appendChild(playlistItemInfo);

    let playlistItemTime = document.createElement("span");
    playlistItemTime.classList.add("playlist-item-time");
    playlistItemTime.innerText = item.musicTime;
    playlistItemInfo.appendChild(playlistItemTime);

    let playlistItemName = document.createElement("span");
    playlistItemName.classList.add("playlist-item-name");
    playlistItemName.innerText = item.musicName;
    playlistItemInfo.appendChild(playlistItemName);

    let playlistItemArtist = document.createElement("p");
    playlistItemArtist.classList.add("playlist-artist-name");
    playlistItemArtist.innerText = item.artistName;
    playlistItemInfo.appendChild(playlistItemArtist);

    let playlistShareBtn = document.createElement("button");
    playlistShareBtn.classList.add("playlist-share-btn");
    playlistItem.appendChild(playlistShareBtn);

    let playlistMenuIcon = document.createElement("i");
    playlistMenuIcon.setAttribute(
        "class",
        "fa fa-share-nodes"
    );

    let playlistHeartBtn = document.createElement("button");
    playlistHeartBtn.classList.add("playlist-heart-btn");
    playlistItem.appendChild(playlistHeartBtn);

    let playlistHeartIcon = document.createElement("i");
    playlistHeartIcon.setAttribute("class", "fa fa-heart playlist-heart-icon");
    playlistHeartBtn.appendChild(playlistHeartIcon);


    playlistShareBtn.appendChild(playlistMenuIcon);

    playlist.appendChild(playlistItem);
});

const playlistItems = document.querySelectorAll(".playlist-item");
playlistItems.forEach((item, index) => {
    item.onclick = () => {
        currentMusic(index);
        closePlaylist();
        playMusic();
    };
});


let musicName = document.querySelector(".music-name");
let artistName = document.querySelector(".artist-name");
let musicIndex = 0;
const currentMusic = (index) => {
    let i = index % musicInfo.length;
    musicName.innerText = musicInfo[i].musicName;
    artistName.innerText = musicInfo[i].artistName;
};
currentMusic(musicIndex);

// music controls
const prevBtn = document.querySelector(".back-btn");
const playBtn = document.querySelector(".play-btn");
const nextBtn = document.querySelector(".forward-btn");
let isPlaying = false;


playBtn.onclick = () => {
    startMusic();
};
const startMusic = () => {
    isPlaying ? pauseMusic() : playMusic();
};
nextBtn.onclick = () => {
    nextMusic();
};
const nextMusic = () => {
    musicIndex++;
    if (musicIndex >= musicInfo.length) {
        musicIndex = 0;
    }
    currentMusic(musicIndex);
    playMusic();
};
prevBtn.onclick = () => {
    prevMusic();
};
const prevMusic = () => {
    musicIndex--;
    if (musicIndex < 0) {
        musicIndex = musicInfo.length - 1;
    }
    currentMusic(musicIndex);
    playMusic();
};
const playMusic = () => {
    isPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
};
function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
}
