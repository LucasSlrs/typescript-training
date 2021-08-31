import useAxios from "./useAxios";

import { crypto } from "../interfaces";

const Crypto = () => {
  const userData: any = useAxios(
    "https://random-data-api.com/api/crypto_coin/random_crypto_coin?size=10"
  );

  return (
    <div className="App">
      <p>
        Those are not the real names and logo, the api does it randomly
        (provided by "Random Data API")
      </p>
      {userData.map((el: crypto) => {
        return (
          <div key={el.id}>
            <div>{el.coin_name}</div>
            <img className="imgSize" src={el.logo} alt="coin logo" />
          </div>
        );
      })}
    </div>
  );
};
export default Crypto;
