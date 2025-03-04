import "./Profile.css";
import { PropTypes } from "prop-types";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Profile({ profileData, description }) {
  const func = (event) => {
    event.preventDefault();
  };

  const username = profileData.login;
  const bio = profileData.bio;
  const avatarUrl = profileData.avatar;

  return (
    <>
      <div className="profile-card" onScrollCapture={func}>
        <div className="profile-card__logo-card">
          <div className="profile-card__logo">
            <img src={avatarUrl} />
          </div>
          <h3 className="profile-card__username">{username}</h3>
          <span className="profile-card__short-info">{bio}</span>
        </div>
        <div className="separator vertical"></div>
        <div className="profile-card__details">
          <Markdown remarkPlugins={[remarkGfm]}>{description}</Markdown>
        </div>
      </div>
    </>
  );
}
Profile.propTypes = {
  profileData: PropTypes.object,
  description: PropTypes.string.isRequired,
};

export default Profile;
