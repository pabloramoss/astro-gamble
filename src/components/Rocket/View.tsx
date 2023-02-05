import Results from "./Results";
import Rocket from "./Rocket";
import Sidebar from "./Sidebar";

const View: React.FC = () => {
  return (
    <div style={{ height: "500px", width: "900px", background: "black" }}>
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <Sidebar />
        <Rocket />
      </div>
      <Results />
    </div>
  );
};

export default View;
