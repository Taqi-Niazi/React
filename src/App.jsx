import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Food from "./Food";
import Footer from "./Footer";
import Myheader from "./Myheader";
import Button from './Button';
import Card from "./Card";
import ClickEvent from "./ClickEvent";
import ColorPick from "./ColorPick";
import ComponentA from "./componentA";
import DigitalClock from "./DigitalClock";
import Fruits from "./Fruits";
import List from "./List";
import MyComponent from './MyComponent';
import OnChange from "./OnChange";
import Planets from "./Planets";
import ToDoList from "./ToDoList";
import Updater from "./Updater";
import UseEffect from "./UseEffect";
import UserLogin from "./UserLogin";

function App() {
  
  return(

  <>
  {/*<Fruits name = "Apple" color = "Red" mrp = {100} Available ={true}/>
  <Fruits name = "Peach" color = "Peach" mrp = {120} Available = {false}/>
  <Fruits name = "Plum" color = "Red" mrp = {80} Available = {true}/>
  <Fruits name = "Orange" color = "Orange" mrp = {90} Available = {false}/>
  <Fruits/>*/}
  <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Food" element={<Food />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Myheader" element={<Myheader />} />
        <Route path="/Button" element={<Button />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/ClickEvent" element={<ClickEvent />} />
        <Route path="/ColorPick" element={<ColorPick />} />
        <Route path="/componentA" element={<ComponentA />} />
        <Route path="/DigitalClock" element={<DigitalClock />} />
        <Route path="/Fruits" element={<Fruits />} />
        <Route path="/List" element={<List />} />
        <Route path="/MyComponent" element={<MyComponent />} />
        <Route path="/OnChange" element={<OnChange />} />
        <Route path="/Planets" element={<Planets />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Updater" element={<Updater />} />
        <Route path="/UseEffect" element={<UseEffect />} />
        <Route path="/UserLogin" element={<UserLogin />} />
      </Routes>
    </Router>
  </>
  );

  
}

export default App
