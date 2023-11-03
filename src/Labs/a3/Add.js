import React from "react";
import { useParams } from "react-router-dom";
function Add() {
  const { a, b } = useParams();
  return (
    <div>
      {" "}
      <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
// export default Add;
// function Add({ asd = [9, 2, 8, 3] }) {
//   const { dsa } = useParams();
//   const ewq = [dsa, ...asd];
//   return (
//     <div>
//       <h2>{ewq}</h2>
//     </div>
//   );

export default Add;
