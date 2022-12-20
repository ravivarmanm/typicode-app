import React from "react";
import style from "./Table.css";
import Data from "./Data.jsx";
const Table = () => {
  return (
    <div>
      <h1>TABLE</h1>
      <table>
        {/* <tr className="heading">
          <th className="userId">UserId</th>
          <th className="ids">Id</th>
          <th className="titles">Title</th>
          <th className="bodys">Body</th>
        </tr>
        <tr>
          <td>{userid}</td>
          <td>{id}</td>
          <td>{title}</td>
          <td>{body}</td>
        </tr> */}
      </table>
      <Data />
    </div>
  );
};
export default Table;
