import "./share.css";
import * as Icons from "@mui/icons-material";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* <img src="assets/person/1.jpeg" className="shareProfileImg" alt="" /> */}
          <input
            type="text"
            placeholder="What's in your mind, Dinora?"
            className="shareInput"
          />
        </div>
        <hr className="sharehr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <Icons.PermMedia className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
