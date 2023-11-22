import "./online.css";

export default function Online({ user }) {
  const PF = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{PF + user.userName}</span>
    </li>
  );
}
