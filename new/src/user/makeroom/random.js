import { Link } from 'react-router-dom';
import './makeroom.css';

function RandomU(){
    return(
        <div>
            <div className="circle"></div>
            <div className='checkbox'>
                <div className='checknum'>방번호 확인</div>
                <Link to="/user/loginmenu"><div className='checknum'>질문 받기 종료</div></Link>
            </div>
        </div>
    )
}

export default RandomU;