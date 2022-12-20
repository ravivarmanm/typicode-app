import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = require("https://jsonplaceholder.typicode.com/posts");
console.log(baseUrl);
const Data = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);
  if (!data)
    return (
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.userId}</p>
        ))}
      </div>
    );
};

export default Data;
