import "./profile.css";
import { PropTypes } from "prop-types";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import LanguagesDisplay from "./components/LanguagesDisplay";

function Profile({ profileData, description }) {
  const username = profileData.login;
  const name = profileData.name;
  const avatarUrl = profileData.avatar;

  return (
    <>
      <div className="profile-card">
        <div className="profile-card__logo-card">
          <div className="profile-card__logo">
            <img src={avatarUrl} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <h3 className="profile-card__username">{name}</h3>
            <span className="profile-card__short-info">{username}</span>
          </div>
          <div className="profile-card__socials">
            <span>
              GithHub:{" "}
              <a
                href={`https://github.com/${username}`}
                className="social github"
              >
                {username}
              </a>
            </span>
          </div>
        </div>
        <div className="separator vertical"></div>
        <div className="profile-card__details">
          <h2>Mostova Alona</h2>
          <blockquote>
            <p>Aspiring web-developer</p>
            <p>Node, JS, HTML, CSS, React</p>
          </blockquote>
          <div className="scrollable">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h4: ({ children }) => {
                  return <h4 style={{ padding: "0.3rem" }}>{children}</h4>;
                },
                hr: () => {
                  return (
                    <div
                      className="separator"
                      style={{ width: "100%", margin: "0.2rem 0" }}
                    />
                  );
                },
                ul: () => {
                  return (
                    <div
                      style={{
                        width: "90%",
                        display: "grid",
                        gridTemplateColumns: "repeat(11, 50px)",
                        columnGap: "2rem",
                        listStyle: "none",
                        overflowY: "hidden",
                        overflowX: "scroll",
                        scrollbarWidth: "thin",
                      }}
                    >
                      <LanguagesDisplay />
                    </div>
                  );
                },
              }}
            >
              {description}
            </Markdown>
          </div>
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
