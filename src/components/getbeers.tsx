import useAxios from "./useAxios";
import { Beers } from "../interfaces";

const GetRestaurant = () => {
  const restaurantList: any = useAxios(
    "https://random-data-api.com/api/beer/random_beer?size=5"
  );
  if (!restaurantList) {
    return <div>Loading.....</div>;
  }
  return (
    <div className="App">
      <p>Here's some beers</p>
      {restaurantList?.map((el: Beers) => {
        return (
          <div>
            <div key={el.id}>Name: {el.name}</div>
            <div>Style: {el.style}</div>
            <div>Malts: {el.malts}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default GetRestaurant;
