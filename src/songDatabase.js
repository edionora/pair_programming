function Song(source, title, artist, description, album, id) {
    this.source = source;
    this.title = title;
    this.description = description;
    this.id = id;
    this.artist = artist;
    this.album = album;
  }
  
  const songs = [
   
    new Song('/In The Name Of Love.mp3', 'In The Name of Love', 'Martin Garrix', 'No information available',"https://i.scdn.co/image/a1a2e08be66df92c75e46ad8330c9d4937bff209", 0),
    
    new Song('/Thief.mp3', 'Thief', 'Ookay', 'No information available', 'https://d3us2i0tqwa7m7.cloudfront.net/pulses/17337344460510000/1467213445524_res_original.jpg', 1),
    
    new Song('/Alive.mp3', 'Alive', 'Madden', 'No information available', "https://images.genius.com/10026a73893c124b0912a4a8cec7b1c7.1000x1000x1.jpg", 2),
   
    new Song('/Clarity.mp3', 'Clarity', 'Zedd Ft. Foxes', "Zedd's no. 1 hit featuring Foxes", "https://2.bp.blogspot.com/-oJcdjSsRJ30/UveFwl73XWI/AAAAAAAAANs/1tjYEGB-6lY/s1600/clarityfoxes.jpg",3),
  ]

  module.exports = songs