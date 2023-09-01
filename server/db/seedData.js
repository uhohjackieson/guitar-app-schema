// Make some arrays of objects based on schema design

// users
// const users = [
//     {username: 'kiss_my_axe', password: 'bruh', email: ''},
//     {username: 'myfavesongiswonderwall', password: 'troll', email: ''},
//     {username: 'i<3geetars', password: 'askmeaboutmygeetar', email: ''}
// ]

// level
const levels = [
    {level: "Beginner"},
    {level: "Intermediate"},
    {level: "Advanced"}
]

// songs/solos
const songs = [
    {name: 'Smells Like Teen Spirit', artist: 'Nirvana'},
    {name: 'Californication', artist: 'Red Hot Chili Peppers'},
    {name: 'While My Guitar Gently Weeps', artist: 'The Beatles'},    
    {name: 'Through the Fire and the Flames', artist: 'Dragonforce'}
]

const tabs = [
    {name: 'Smells Like Teen Spirit', url: "https://www.youtube.com/watch?v=rac0pIyNCfc"},
    {name: 'Californication', url: "https://www.youtube.com/watch?v=80hkqmEFSWM"},
    {name: 'While My Guitar Gently Weeps', url: "https://www.youtube.com/watch?v=4Aebj8zw0hE"},
    {name: 'Through the Fire and the Flames', url: "https://www.youtube.com/watch?v=7FHnSrb1rHk&list=RD7FHnSrb1rHk&start_radio=1"}

]


module.exports = { songs, levels, tabs }