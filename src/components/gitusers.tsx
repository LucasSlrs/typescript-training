import React, { useEffect, useState } from "react";
import axios from "axios";
import { GithubUsers } from "../interfaces";

const GitUsers = () => {
  const [userData, setUserData] = useState<GithubUsers[]>([]);

  useEffect(() => {
    axios
      .get<GithubUsers[]>("https://api.github.com/users")
      .then((response: any) => {
        if (response.status === 200) {
          console.log("response", response.data);
          setUserData(response.data);
        } else {
          console.error();
        }
      });
  }, []);
  return (
    <div className="App">
      {userData.map((element) => {
        return <div key={element.id}>{element.login}</div>;
      })}
    </div>
  );
};
export default GitUsers;
