import React from 'react'
import songDatabase from '../js/songDatabase'


const eachSongItem = (songItem, i) => <li key={i} onClick={()=>{playSong(songItem.source)}}>{songItem.title}</li>

const playSong = (source) => {
    this.audio.src = `/songs${source}`
    this.audio.play()
    console.log(this.audio)
}


const MediaPlayer = () => (
    <div className="card col s4 m4 l4 xl4 center">
        <div className="card-content center">
            <p className="card__title center"> Music Player</p>

            <ul className="center">{songDatabase.map(eachSongItem)}</ul>

            {/* <audio ref={(element) => this.audio = element}>
                <source src={this.state.songs[this.state.currentItem].source} type="audio/mpeg" />
                Your browser does not support the audio element.
        </audio> */}

            <audio controls ref={(audio) => this.audio = audio} src="/songs/Alive.mp3" type="audio/mpeg" />
            {console.log(this.audio)}
        </div>
    </div>
)

export default MediaPlayer
