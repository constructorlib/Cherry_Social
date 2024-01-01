import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const res = axios.get("posts/timeline/655558961b0b22cab8ec4bb5");
    console.log();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
