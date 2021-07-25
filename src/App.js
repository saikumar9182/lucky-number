import logo from "./logo.svg";
import "./App.css";
import bg from "./bg.jpg";
import happy from "./happy.svg";
import unhappy from "./unhappy.svg";
import title from "./components/title";
import { useState } from "react";

let dateInput = "";
let lucky = 0;

const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={unhappy} width="100%" height="200px" />
);

function App() {
  let dis;
  const [displayResult, setDisplayResult] = useState(["", ""]);
  const xbutton = (
    <span>
      <strong>Privacy Notice!</strong> We are not storing your data.{" "}
      <a href="#" onClick={xButtonHandler}>
        X
      </a>
    </span>
  );
  function xButtonHandler() {
    setFlag(false);
    setPrivacyPolicy("");
  }

  const [display, setDisplay] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(xbutton);
  const [flag, setFlag] = useState(true);
  console.log(flag);
  console.log(typeof flag);

  function buttonHandler() {
    console.log(dateInput);
    const arr = dateInput.split("-");
    let sum = 0;

    arr.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
      }

      if (sum % lucky == 0) {
        setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
      } else {
        setDisplayResult([
          "Oops!!Your birthday is not a lucky number!",
          unhappyImgDiv,
        ]);
      }
    });

    console.log(sum);
  }

  function privacyPolicyHandler() {
    if (flag == false) {
      setFlag(true);
      setPrivacyPolicy(xbutton);
    }
  }

  return (
    <div className="App" style={{backgroundImage:`url(${bg})`}}>
      <div className="title">
        <h1>Is Your Birthday Lucky?</h1>
        <a href="#main-section">Scroll down to Checkout</a>
      </div>

      <div id="main-section">
        <span>
          
          {privacyPolicy}
        </span>

        <h2 id="heading">
          Enter Your Birthdate and lucky number to continue...
        </h2>

        <label>Select your Birth date:</label>
        <br />
        <input
          onChange={(e) => {
            dateInput = e.target.value;
          }}
          type="date"
          id="birthday"
          name="birthday"
        />
        <br />

        <label>Enter your lucky number:</label>
        <br />
        <input
          onChange={(e) => {
            lucky = e.target.value;
          }}
          type="number"
          id="quantity"
        ></input>
        <br />

        <button onClick={buttonHandler}>CHECK</button>

        <div className="output">
          <div className="label">{displayResult[0]}</div>
          {displayResult[1]}
        </div>
      </div>

      <footer>
        <ul>
          <li className="footerLink">
            <a href="https://github.com/saikumar9182">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://twitter.com/SaiKuma79977750">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="footerLink">
            <a href="https://www.linkedin.com/in/sai-kumar-837542191/">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>

        <div>
          © 2020 | Sai Kumar |
          <a href="#main-section" onClick={privacyPolicyHandler}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
