import SongForm from "../components/songForm"

const Home = () => {

    return (

        <div className="home">


            <h1 className="introText">What song do you want recommendations for? </h1>
            <p className="content">Hit enter when done.</p>
            <SongForm></SongForm>

        </div>
    )

}

export default Home