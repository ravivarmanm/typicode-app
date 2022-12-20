import React, { useState, useEffect } from "react";

const Datas = require("./Data.json");
const Data = () => {
  const [data, setData] = useState("");
  return (
    <div>
      {Datas.map((items) => (
        <p key={items.id}>{items.userid}</p>
      ))}
    </div>
  );
};
export default Data;
