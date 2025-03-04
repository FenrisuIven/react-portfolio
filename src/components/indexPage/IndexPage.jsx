import "./indexPage.css";
import Header from "../header/Header";
import Profile from "../profile/Profile";

import parseGitHubProfile from "../../utils/parseGitHubProfile";
import profileDescription from "../../assets/data/profile_data.md";

const profileData = await parseGitHubProfile("https://api.github.com/users/FenrisuIven");
console.log(profileData);

function IndexPage() {
  return (
    <>
      <Header profileData={profileData} />
      <main>
        <Profile profileData={profileData} description={profileDescription} />
      </main>
    </>
  );
}

export default IndexPage;
