import React from "react";
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
      <p>Here's a restaurant</p>
      {restaurantList?.map((el: Beers) => {
        return <div key={el.id}>{el.name}</div>;
      })}
    </div>
  );
};

export default GetRestaurant;
