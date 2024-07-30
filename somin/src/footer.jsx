import { Link } from "react-router-dom";
import Home from './Home.png';
import Group from './Group.png';
import Community from './Community.png';
import Village from './Village.png';

const footer = () => {
    return (
        <div className="menu">
            <p>
                <Link to='/'>
                    <img src={Home} alt='Home'/>
                    <br />
                    <b>홈</b>
                </Link>
            </p>
            <p>
                <Link to='/story'>
                    <img src={Village} alt='Village'/>
                    <br />
                    <b>마을이야기</b>
                </Link>
            </p>
            <p>
                <Link to=''>
                    <img src={Community} alt='Community'/>
                    <br />
                    <b>게시판</b>
                </Link>
            </p>
            <p>
                <Link to=''>
                    <img src={Group} alt='Group'/>
                    <br />
                    <b>모임</b>
                </Link>
            </p>
        </div>
    )
}

export default footer;