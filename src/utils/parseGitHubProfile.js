import axios, { AxiosError } from "axios";

export default async function parseGitHubProfile(profileUrl) {
  const res = await axios.get(profileUrl).catch((err) => err);
  return res instanceof AxiosError
    ? res
    : {
        avatar: res.data.avatar_url,
        login: res.data.login,
        bio: res.data.bio,
        repos: res.data.repos_url,
        profile: res.data.html_url,
      };
}
