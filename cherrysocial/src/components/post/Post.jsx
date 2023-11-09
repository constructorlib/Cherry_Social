import "./post.css";
import * as Icons from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="assets/person/1.jpeg" className="postProfileImg" alt="" />
            <span className="postUserName">Dinora Khoshimova</span>
            <span className="postDate"> 5 mins ago</span>
          </div>
          <div className="postTopRight">
            <Icons.MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter"></div>
        <div className="postBottom"></div>
      </div>
    </div>
  );
}
