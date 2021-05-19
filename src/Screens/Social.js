import fb from "../Images/fb.svg"
import github from "../Images/github.svg"
import insta from "../Images/instagram.svg"
import linkedin from "../Images/linkedin.svg"
import twitter from "../Images/twitter.svg"
import "../Css/Home.css"

const Social = () => {
    return (
        <div className="social">
            <div className="img">
                <img src={fb} alt="Facebook" className="fb" height={20} width={20} />
                <img src={github} alt="Facebook" className="github" height={20} width={20} />
                <img src={insta} alt="Facebook" className="insta" height={20} width={20} />
                <img src={linkedin} alt="Facebook" className="linkedin" height={20} width={20} />
                <img src={twitter} alt="Facebook" className="twitter" height={20} width={20} />
            </div>
        </div>
    );
}

export default Social;