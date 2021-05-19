import "../Css/Home.css"
import main from "../Images/main.png"
const Home = () => {

    const thing = "Personal\nPortfolio"

    return (
        <div className="home">
            <p className="name">{thing}</p>
            <p className="work">Android & Web Developer</p>
            <p className="userName"><span className="fName">Smit</span>CoderX</p>

            <div className="dev">
            {/* <img src={main} alt="" className="main" /> */}
            </div>
        </div>
    );
}

export default Home;