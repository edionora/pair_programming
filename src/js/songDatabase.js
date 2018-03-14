function Song(source, title, id) {
    this.source = source
    this.title = title
    this.id = id
}

const songs = [
    new Song(
        '/In The Name Of Love.mp3',
        'In The Name of Love',
        0
    ),
    new Song(
        '/Thief.mp3',
        'Thief',
        1
    ),
    new Song(
        '/Alive.mp3',
        'Alive',
        2
    ),
    new Song(
        '/Clarity.mp3',
        'Clarity',
        3
    ),
]

module.exports = songs
