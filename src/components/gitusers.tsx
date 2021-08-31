import useAxios from "./useAxios";
import { GithubUsers } from "../interfaces";

const GitUsers = () => {
  const userData: any = useAxios("https://api.github.com/users");

  if (!userData) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="App">
      {userData.map((el: GithubUsers) => {
        return <div key={el.id}>{el.login}</div>;
      })}
    </div>
  );
};
export default GitUsers;
