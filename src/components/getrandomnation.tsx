import React, { useState } from "react";
import { RandomNation } from "../interfaces";
import axios from "axios";

const GetRandomNation = () => {
  const [nation, setNation] = useState<RandomNation>();
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    axios
      .get<RandomNation>("https://random-data-api.com/api/nation/random_nation")
      .then((response: any) => {
        if (response.status === 200) {
          setNation(response.data);
          setLoading(false);
        } else {
          console.error(JSON.stringify(response.data));
          setLoading(false);
        }
      });
  };
  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <button
        onClick={(e) => {
          handleClick(e);
          setLoading(true);
        }}
      >
        Try me
      </button>
      <div>{nation?.flag}</div>
      <div>{nation?.national_sport}</div>
      <div>{nation?.nationality}</div>
    </div>
  );
};
export default GetRandomNation;
