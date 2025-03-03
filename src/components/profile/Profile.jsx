import './Profile.css'
import { PropTypes } from 'prop-types'

function Profile({
  username,
  shortInfo,
  description
}) {
  return (
    <>
      <div className="profile-card">
        <div className="profile-card__logo-card">
          <div className="profile-card__logo"><img src="./placeholder-main-icon.jpg" /></div>
          <span className="profile-card__username">{username}</span>
          <span className="profile-card__short-info">{shortInfo}</span>
        </div>
        <div className="profile-card__details">
          <div className="profile-card__description">{description}</div>
        </div>
      </div>
    </>
  )
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  shortInfo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Profile;