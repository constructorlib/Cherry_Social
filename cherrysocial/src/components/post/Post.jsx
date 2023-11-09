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
            <span className="postDate"> 5 minutes ago</span>
          </div>
          <div className="postTopRight">
            <Icons.MoreVert className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey, it's my first post =) </span>
          <img src="assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />
            <span className="likeCounter">32 people liked this post</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
