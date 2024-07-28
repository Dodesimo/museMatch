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

async function getTrackInfo(access_token) {
    const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
        method: 'GET',
        headers: {'Authorization': 'Bearer ' + access_token},
    });

    return await response.json();
}

const getSimilar = async (req, res) => {

    const name = req.params

    const tracks = await getToken().then(response => {
        getTrackInfo(response.access_token).then(profile => {
            res.status(200).json(profile)
        })
    });

}

module.exports = {

    getSimilar

}