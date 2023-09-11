// Make some arrays of objects based on schema design

// users
// const users = [
//     {username: 'kiss_my_axe', password: 'bruh', email: ''},
//     {username: 'myfavesongiswonderwall', password: 'troll', email: ''},
//     {username: 'i<3geetars', password: 'askmeaboutmygeetar', email: ''}
// ]

// level
const levels = [
  { level: "Beginner" },
  { level: "Intermediate" },
  { level: "Advanced" },
];

// songs/solos
const songs = [
  {
    levelsId: 1,
    name: "Smells Like Teen Spirit",
    artist: "Nirvana",
    image: "https://s2.dmcdn.net/v/AbreH1LeixfMKxkxV/x720",
  },
  {
    levelsId: 1,
    name: "Californication",
    artist: "Red Hot Chili Peppers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/d/df/RedHotChiliPeppersCalifornication.jpg",
  },
  {
    levelsId: 1,
    name: "While My Guitar Gently Weeps",
    artist: "The Beatles",
    image:
      "https://www.thisdayinmusic.com/wp-content/uploads/2018/05/the-white-album.jpg",
  },
  {
    levelsId: 3,
    name: "Through the Fire and the Flames",
    artist: "Dragonforce",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Df-inhuman-cover250.jpg/220px-Df-inhuman-cover250.jpg",
  },
];

const tabs = [
  {
    levelsId: 1,
    name: "Smells Like Teen Spirit",
    url: "https://www.youtube.com/watch?v=rac0pIyNCfc",
  },
  {
    levelsId: 1,
    name: "Californication",
    url: "https://www.youtube.com/embed/80hkqmEFSWM",

  },
  {
    levelsId: 1,
    name: "While My Guitar Gently Weeps",
    url: "https://www.youtube.com/watch?v=4Aebj8zw0hE",
  },
  {
    levelsId: 3,
    name: "Through the Fire and the Flames",
    url: "https://www.youtube.com/watch?v=7FHnSrb1rHk&list=RD7FHnSrb1rHk&start_radio=1",
  },
];

module.exports = { songs, levels, tabs };
