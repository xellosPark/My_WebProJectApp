import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;