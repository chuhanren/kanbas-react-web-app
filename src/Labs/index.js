import { Link } from "react-router-dom";
import Assignment3 from "./a3";
import Nav from "../Nav";
import JavaScript from "./a3/JavaScript";

function Labs() {
  return (
    <div>
      <Nav />
      {/* <Link to="/hello">Hello</Link> |<Link to="/Labs/a3">A3</Link> |
      <Link to="/Kanbas">Kanbas</Link> */}
      <Assignment3 />
    </div>
  );
}
export default Labs;
