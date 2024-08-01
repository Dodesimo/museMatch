import {useState} from 'react'
import SongTile from "./songTile";

const SongForm = () => {

    const [songs, setSong] = useState('')
    const [recs, setRecs] = useState([])
    const handleSubmit = async (e) => {

        e.preventDefault()

        const s = songs
        const json = await (fetch(`https://muse-match.vercel.app/api/musematch/${s}`)).then(response => response.json()).then(rJson => rJson.tracks)
        setRecs(json)
        console.log(json)


    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>

                    <input className="search"
                           type="text"
                           onChange={(e) => setSong(e.target.value)}
                           value={songs}
                    />

                </form>
            </div>

            <div className="results">

                {recs.map(song => (<SongTile so={song}/>))}

            </div>

        </div>

    )
}

export default SongForm