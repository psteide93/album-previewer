const albums = [{
    id: 1,
    title: "Let's Chill",
    artist: "Easy Jeff and the All-Stars",
    cover_image: "acoustic.jpg",
    tracks: [{
        id: 1,
        sort_order: 1,
        title: "All That",
        file_name: "allthat.mp3",
    }, {
        id: 2,
        sort_order: 2,
        title: "Frenchy",
        file_name: "frenchy.mp3",
    }, {
        id: 3,
        sort_order: 3,
        title: "Jazz Piano",
        file_name: "jazzpiano.mp3",
    }]
}, {
    id: 2,
    title: "Ready To Launch",
    artist: "The Mudbuckets",
    cover_image: "rock.jpg",
    tracks: [{
        id: 1,
        sort_order: 1,
        title: "Punky",
        file_name: "punky.mp3",
    }, {
        id: 2,
        sort_order: 2,
        title: "Happy Rock",
        file_name: "happyrock.mp3",
    }, {
        id: 3,
        sort_order: 3,
        title: "A New Beginning",
        file_name: "anewbeginning.mp3",
    }]
}, {
    id: 3,
    title: "Peaceful Valley",
    artist: "Forlornment",
    cover_image: "acoustic.jpg",
    tracks: [{
        id: 1,
        sort_order: 1,
        title: "Acoustic Breeze",
        file_name: "acousticbreeze.mp3",
    }, {
        id: 2,
        sort_order: 2,
        title: "Sunny",
        file_name: "sunny.mp3",
    }, {
        id: 3,
        sort_order: 3,
        title: "Ukulele",
        file_name: "ukulele.mp3",
    }]
}, {
    id: 4,
    title: "The Drop",
    artist: "Beat$mith",
    cover_image: "hiphop.jpg",
    tracks: [{
        id: 1,
        sort_order: 1,
        title: "Downtown",
        file_name: "downtown.mp3",
    }, {
        id: 2,
        sort_order: 2,
        title: "Groovy Hip Hop",
        file_name: "groovyhiphop.mp3",
    }, {
        id: 3,
        sort_order: 3,
        title: "Retro Soul",
        file_name: "retrosoul.mp3",
    }]
}]


const url = new URL(window.location)
const queryString = new URLSearchParams(url.search)
const singleAlbum = albums
    .find(album => album.title === queryString.get("album"))

console.log(singleAlbum)

const h2 = document.querySelector("main>h2")
const p = document.querySelector("main>p")
const ul = document.querySelector("main>ul")

h2.textContent = singleAlbum.title
p.textContent = singleAlbum.artist
ul.textContent = "Tracks"

singleAlbum.tracks.map(track => {
    const li= document.createElement("li")
    li.textContent = track.title
    ul.append(li)})

