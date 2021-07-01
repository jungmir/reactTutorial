import './Card.css'

export default function Card (props) {
    return (
        <div className="card">
            <div className="thumbnail">
                <img src='http://www.wroclaw.pl/go/resources/main/img/blank-thumbnail-banner.png' alt="thumbnail" />
            </div>
            <div className="mainText">
                <div className="title">
                    {props.title}
                </div>
                <div className="subText">
                    {props.subText}
                </div>
                <div className="contentsInfo">
                    <span className="postDate">
                        {props.postDate}
                    </span>·
                    <span className="commentInfo">
                        {props.commentInfo}
                    </span>
                </div>
            </div>
            <div className="footer">
                <div className="owner">
                    <img src={props.userThumbnail} alt="userThumbnail"/>
                    <p>by <p className="ownerName">{props.ownerName}</p></p>
                </div>
                <div className="likes">
                    <svg width="12" height="11" viewBox="0 0 24 24"><path fill="currentColor" d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"></path></svg>
                    <p className="likeCount">
                        {props.likeCount}
                    </p>
                </div>
            </div>
        </div>
    );
}