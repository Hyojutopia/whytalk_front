import { Link } from "react-router-dom";
import AD from "../adver/ad";
import './id.css';

function FindIDU(){
    return(
        <div>
            <AD/>
            <div className="middle">
                <div className='box'>
                    <div className='idpw'>
                        <input className='inputidpw'/>
                        <input className='inputidpw'/>
                    </div>
                    <div className="infoid">
                        <div className="name">이름</div>
                        <div className="name">이메일</div>
                    </div>
                </div>
                <Link to="/user/login"><div className='butidfind'>아이디 찾기</div></Link>
                
            </div>
            <AD/>
        </div>
    );
}

export default FindIDU;