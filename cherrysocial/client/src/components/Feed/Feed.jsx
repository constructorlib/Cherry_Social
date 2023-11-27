import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
// import { Posts } from "../../dummyData";
import axios from "axios";
export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const proxy = import.meta.env.VITE_PROXY;
    const fetchPosts = async () => {
      const res = await axios.get(
        `${proxy}/posts/timeline/6551d3f81720514eff91624a`
      );
      console.log("FOOOOOOOOOOOOO");
      console.log(res);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
