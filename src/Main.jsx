import Button from './components/Button.jsx';
import { Link } from "react-router-dom";

function Main() {
  return (
    <div id="main">
      <div id="title">Geominerals</div>
      <div id="media"></div>
      <div id="menu">
        <Link to={`/menu`}><Button _type="button_standard"  _onClick={()=>console.log("Menu")} _text="Graj"/></Link>
      </div>
    </div>
  );
}

export function Menu() {
  return (
    <div id="main">
      <div id="title">Wybierz zakres materialu</div>
      <div id="media"></div>
      <div id="menu">
        <Button _type="button_standard"  _onClick={()=>{}} _text="Wszystkie"/>
        <Link to={`/grupy`}><Button _type="button_standard"  _onClick={()=>{}} _text="Grupy"/></Link>
        <Button _type="button_standard"  _onClick={()=>{}} _text="cos tam"/>
      </div>
    </div>
  );
}


export function Group() {
    return (
      <div id="main">
        <div id="title">Wybierz Tryb</div>
        <div id="media"></div>
        <div id="menu">
          <Link to={`/gra`}><Button _type="button_standard"  _onClick={()=>{}} _text="Wskaz zdj"/></Link>
          <Button _type="button_standard"  _onClick={()=>{}} _text="Napisz"/>
          <Button _type="button_standard"  _onClick={()=>{}} _text="Podaj wzor"/>
          <Button _type="button_standard"  _onClick={()=>{}} _text="Wskaz wzor"/>
          <br/>
          <Link to={`/menu`}><Button _type="button_standard"  _onClick={()=>{}} _text="Menu"/></Link>
        </div>
      </div>
    );
  }

export default Main;
