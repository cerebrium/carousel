import React, { useMemo } from "react";

const circle = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <circle cx="10" cy="10" r="7" fill="#fff" stroke="#000" stroke-width="2" />
  </svg>
);

const blackCircle = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
    <circle cx="10" cy="10" r="7" fill="#000" stroke="#000" stroke-width="3" />
  </svg>
);

export const ImageTrack = ({ index, total }) => {
  const circles = useMemo(() => {
    let result = [];
    for (let i = 0; i < total; i++) {
      if (i === index) {
        result.push(<div style={{ margin: "2px" }}>{blackCircle}</div>);
      } else {
        result.push(<div style={{ margin: "2px" }}>{circle}</div>);
      }
    }
    return result;
  }, [total, index]);
  return <>{circles}</>;
};
