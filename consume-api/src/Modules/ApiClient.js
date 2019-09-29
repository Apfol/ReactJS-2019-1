
const apiKey = "c83a1679902d8fa544f8dba9a6e305b2";
const URL = "http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=colombia&api_key=c83a1679902d8fa544f8dba9a6e305b2&format=json";

function gettopartists(){
   return fetch(URL)
                .then(response => response.json())
                .then(data => data.topartists.artist)
                .then(artist => artist.map(artist => {
                    return {
                        albumId: artist.mbid,
                        name: artist.name,
                        image:artist.image[3]["#text"],
                        listeners: artist.listeners
                    }
                }))
}

export {gettopartists}
/*
const URL = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=queen&api_key=c83a1679902d8fa544f8dba9a6e305b2&format=json";

function gettopartists(){
   return fetch(URL)
                .then(response => response.json())
                .then(data => data.topalbums.album)
                .then(album => album.map(album => {
                    return {
                        albumId: album.mbid,
                        name: album.name,
                        image: album.image[3]["#text"],
                        listeners: album.playcount
                    }
                }))
}

export {gettopartists}*/