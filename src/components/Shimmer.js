import React from "react";

const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="shimmer-container">
      {arr.map((array) => {
        return <div className="shimmer-card" key={array}></div>;
      })}
    </div>
  );
};

export default Shimmer;
