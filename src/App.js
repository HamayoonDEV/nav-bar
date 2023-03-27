import "./App.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
function App() {
  const [click, setClick] = useState(false);
  const handelClick = () => {
    setClick(!click);
  };
  return (
    <div className="App">
      <div className="navbar">
        <h1>web & Mob</h1>
        <div className="navul">
          <ul>
            <li>front end</li>
            <li>back end</li>
            <li>Full stack</li>
            <li>project demo</li>
          </ul>
        </div>
        <div className="hambarger" onClick={handelClick}>
          {click ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
        </div>
      </div>
      <div className={click ? "mobul active" : "mobul"}>
        <ul>
          <li>front end</li>
          <li>back end</li>
          <li>Full stack</li>
          <li>project demo</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
