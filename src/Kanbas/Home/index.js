import ModuleList from "../Courses/Modules";
import Status from "./status";
function Home() {
  return (
    <div className="row">
      <div className="col">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col-3">
        <Status />
      </div>
    </div>
  );
}
export default Home;
