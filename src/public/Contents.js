import Menu from '../public/Menu'
import Card from './Card'
import LoginModal from './LoginModal'
import './Contents.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

var isTrand = true;
const trandPos = 1;
const recentPos = 8;

export default function Contents () {

    function setTrand() {
        isTrand = true;
        const trandDOM = document.querySelector('.tranding');
        const recentDOM = document.querySelector('.recent');
        const hrDOM = document.querySelector('hr');
        trandDOM.className = `tranding ${isTrand ? 'active' : ''}`;
        recentDOM.className = `recent ${isTrand ? '' : 'active'}`;
        hrDOM.style.left = trandPos + 'rem';
    }

    function setRecent() {
        isTrand = false;
        const trandDOM = document.querySelector('.tranding');
        const recentDOM = document.querySelector('.recent');
        const hrDOM = document.querySelector('hr');
        trandDOM.className = `tranding ${isTrand ? 'active' : ''}`;
        recentDOM.className = `recent ${isTrand ? '' : 'active'}`;
        hrDOM.style.left = recentPos + 'rem';
    }

    return (
        <Router>
            <div className="subNav">
                <ul>
                    <div className="filterArea">
                        <li>
                            <Link to="/" onClick={setTrand}>
                                <div className="tranding active">
                                    <p>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></svg>
                                    </p>
                                    <p> 트랜딩 </p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/recent" onClick={setRecent}>
                                <div className="recent">
                                    <p>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></svg>
                                    </p>
                                    <p> 최신 </p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Switch>
                                <Route exact path="/">
                                    <div className="orderType">
                                        <p> 이번주 </p>
                                        <span>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                                        </span>
                                    </div>
                                    <LoginModal />
                                </Route>
                            </Switch>
                        </li>
                    </div>
                    <Menu />
                    <hr />
                </ul>
            </div>
            <div className="mainContents">
                <Switch>
                    <Route exact path="/">
                        <Tranding />
                    </Route>
                    <Route path="/recent">
                        <Recent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Tranding () {
    const items = []

    for (var i = 0; i < 10; i++) {
        const cardList = {
            "title" : "개발자 이력서 갈아엎기의 효과! 국비/방통대 출신의 ㅈ소 탈출 스토리",
            "subText" : "고졸 PC수리기사였던 참치님. 방통대와 국비교육을 거쳐 ㅈ소기업을 탈출하기위해 했던 노력과 성공이야기입니다. 그리고 이력서 갈아엎기의 효과",
            "postDate" : "2021년 6월 24일",
            "commentInfo" : `${i+1}개의 댓글`,
            "ownerName" : "dongyi",
            "likeCount" : "37",
            "userThumbnail" : "https://media.vlpt.us/images/dongyi/profile/1d42f7e3-42c3-4b65-8c64-e6169c437565/cm-fb-profile.png?w=120"
        }
        items.push(<Card {...cardList} />)
    }
    return (
        <div className="cardList">
            {items}
        </div>
    );
}

function Recent() {
    return (
        <div> no data </div>
    );
}