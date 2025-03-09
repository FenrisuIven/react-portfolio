import PropTypes from "prop-types";

import "./Header.css";

export default function Header({ profileData }) {
  const username = profileData.login;
  const avatarUrl = profileData.avatar;

  return (
    <>
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__nav-list">
            <li className="main-header__nav-item">
              <a href="/">Home</a>
            </li>
            <li className="main-header__nav-item">
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
          <a
            href={`https://github.com/${username}`}
            className="main-header__icon"
          >
            {username}
            <img
              src={avatarUrl}
              alt="Placeholder cat icon"
              className="header__main-icon"
            />
          </a>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  profileData: PropTypes.object,
};

/* <img src='./placeholder-main-icon.png' alt="Placeholder cat icon" class="header__main-icon" /> */
