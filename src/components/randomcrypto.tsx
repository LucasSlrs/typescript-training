import React, { useEffect, useState } from "react";
import axios from "axios";
import { cryto } from "../interfaces";

const Crypto = () => {
  const [userData, setUserData] = useState<cryto[]>([]);

  useEffect(() => {
    axios
      .get<cryto[]>(
        "https://random-data-api.com/api/crypto_coin/random_crypto_coin?size=10"
      )
      .then((response: any) => {
        if (response.status === 200) {
          console.log("response", response.data);
          setUserData(response.data);
        } else {
          alert("error");
        }
      });
  }, []);
  return (
    <div className="App">
      <p>Those are not the real names and logo, the api does it randomly</p>
      {userData.map((element) => {
        return (
          <div key={element.id}>
            <div>{element.coin_name}</div>
            <img className="imgSize" src={element.logo} alt="coin logo" />
          </div>
        );
      })}
    </div>
  );
};
export default Crypto;
