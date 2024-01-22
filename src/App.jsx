import SideBar from "./components/Sidebar/SideBar";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/Right/Right";

const App = () => {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <RightSide/>
      </div>
    </div>
  );
};

export default App;
