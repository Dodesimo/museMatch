const SongTile = ({so}) => {

    return (
        <div className="box">
            <a href={so.external_urls.spotify}>
                <div className="albumImg">
                    <img src={so.album.images[1].url}/>
                </div>
            </a>
                <div className="songInfo">
                    <h2>{so.name}</h2>
                    <p>{so.album.artists[0].name}</p>
                </div>
        </div>

)
}

export default SongTile