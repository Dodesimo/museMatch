require('dotenv').config()

var client_id = '6f2ff01f951e46a6a98b25e7bfb89d26';
var client_secret = 'd30e2ddb544d4ac789cb09fbc519dc1b';

async function getToken() {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        },
    });

    return await response.json();
}

async function getTrackInfo(name, access_token) {

    const query = `https://api.spotify.com/v1/search?q=${name}&type=track&limit=1`

    const response = await fetch(query, {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + access_token},
    });

    return await response.json();
}

async function getRecommendations(songID, access_token){

    const query = `https://api.spotify.com/v1/recommendations?limit=3&seed_tracks=${songID}&min_popularity=30&max_popularity=70`

    const response = await fetch(query, {

        method: 'GET',
        headers: {'Authorization': 'Bearer ' + access_token}


    })

    return await response.json();

}

const getSimilar = async (req, res) => {

    const {name} = req.params
    const accessToken = await getToken().then(response => response.access_token)

    const similarTracks = await getTrackInfo(name,accessToken).then(profile =>
            profile.tracks.items[0].id).then(profile => getRecommendations(profile,accessToken))

    res.status(200).json(similarTracks)

}

//Todo:
//Make helper get url from search app.
//THen, recommendation system

module.exports = {

    getSimilar

}