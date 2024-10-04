/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import "./terminal.css";
import { text } from "../../helpers/text";
import { useLanguage } from "../../contexts/LanguageContext";
import { Button } from "@chakra-ui/react";

type TypewriterProps = {
  text: string;
  delay: number;
  func: (output: string) => void;
  Spinner?: boolean;
  spinTime?: number;
};

const Typewriter = ({ text, delay, func, Spinner, spinTime }: TypewriterProps) => {
  const startTime = new Date();
  let Output = "";
  let index = 0;
  text = Spinner ? "⠋⠙⠹⠸⠼⠴⠦⠧⠇" : text;

  const intervalId: any = setInterval(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        return clearInterval(intervalId);
      }
    });

    const endTime = new Date();
    if (index < text.length) {
      Output += text[index];
      index += 1;

      if (Spinner) {
        func(text[index]);
        setTimeout(function () {
          func(text[index + 1]);
        }, 700);
        if (index === 8) {
          if (endTime.getTime() - startTime.getTime() < (spinTime || 0)) {
            index = 0;
          } else {
            clearInterval(intervalId);
          }
        }
      } else {
        func(Output);
      }
    } else {
      return clearInterval(intervalId);
    }
  }, delay);
};

const Terminal: React.FC = () => {

  const { language } = useLanguage();

  const [Text1, setText1] = useState<string>("");
  const [Text2, setText2] = useState<string>("");
  const [Text3, setText3] = useState<string>("");
  const [Text4, setText4] = useState<string>("");
  const [start, setStart] = useState(false);
  const cursor = "▮";
  let previousCommand: string;

  const [prevusedCommand, setprevusedCommand] = useState<string[]>([]);

  const SkipIntro = () => {
    let id = setTimeout(() => { }, 0) as unknown as number;
    while (id--) {
      clearTimeout(id);
    }

    id = setInterval(() => { }, 0) as unknown as number;
    while (id--) {
      clearInterval(id);
    }
    setText1("ssh tomoyuki.ant@gmail.com");
    setText3("Access Granted!");
  };

  useEffect(() => {
    if(start) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          if (!Text3.includes("Access")) {
            let id = setTimeout(() => { }, 0) as unknown as number;
            while (id--) {
              clearTimeout(id);
            }

            id = setInterval(() => { }, 0) as unknown as number;
            while (id--) {
              clearInterval(id);
            }
            setText1("ssh tomoyuki.ant@gmail.com");
            setText2("tomoyuki.ant@gmail.com's password:");
            setText3("Access Granted!");
          }
          const CommandArea = document.getElementById("command") as HTMLInputElement;
          if (CommandArea) {
            previousCommand = CommandArea.value;
            if(previousCommand.length>0) {
              setprevusedCommand(prevArray => [...prevArray, "tomoyuki.ant@gmail.com:~$ " + previousCommand]);
              CommandArea.value = "";
            }
          }
        }
      });

      Typewriter({ text: "ssh tomoyuki.ant@gmail.com", delay: 100, func: setText1 });

      setTimeout(() => {
        setText2("tomoyuki.ant@gmail.com's password:▮");
      }, 3000);

      setTimeout(() => {
        Typewriter({ text: "", delay: 100, func: setText4, Spinner: true, spinTime: 2500 });
      }, 4300);

      setTimeout(() => {
        setText3("Connecting to tomoyuki.ant@gmail.com...");
      }, 4300);

      setTimeout(() => {
        setText2("tomoyuki.ant@gmail.com's password:");
        setText3("> Access granted.");
      }, 7300);
    }
  }, [start]);

  return (
    <div className="bg-skills">
      <p className="heading">{text[language].terminalHeading}</p>
      <p className="text">{text[language].terminalDescription}</p>
      <div className="terminal">
        {start ? (
          <div className='console'>
            <span className='userPrefix'>user@localhost:~$
              <span style={{ color: "white", marginLeft: "8px" }}>{Text1}{Text1.length === 20 ? "" : cursor}</span>
            </span>

            {Text3.includes("Access") ? "" : <span id='skipButton' onClick={SkipIntro}>Press Enter or Click Here to Skip</span>}
            {Text2}
            <span> {Text4} <span style={{ color: Text3.includes("Access") ? ("yellow") : "" }} >{Text3}</span></span>
            <br />
            {Text3.includes("Access") ? (
              <pre>
                {`                _______                  _             _ 
               |__   __|                (_)           | |
                  | | ___ _ __ _ __ ___  _ _ __   __ _| |
                  | |/ _ \\ '__| '_ \` _ \\| | '_ \\ / _\` | |
                  | |  __/ |  | | | | | | | | | | (_| | |
                  |_|\\___|_|  |_| |_| |_|_|_| |_|\\__,_|_|
                                                  
      `}
              </pre>
            ) : null}

            {Text3.includes("Access") ? <span>Welcome! This is my portfolio website.</span> : ""}
            {Text3.includes("Access") ? <span>What is this? It's an interactive terminal you can use to learn more about me and my work.</span> : ""}<br />
            {Text3.includes("Access") ? <span><span style={{ color: "skyblue" }}>Available Commands:</span></span> : ""}
            {Text3.includes("Access") ? <span><span style={{ color: "#c9c9c9" }}>General: </span> about, projects, all links, clear</span> : ""}
            {Text3.includes("Access") ? <span><span style={{ color: "#c9c9c9" }}>Links:</span> github, email, discord, telegram</span> : ""}

            <br></br>
            {Text3.includes("Access") ? <span>Thank you for visiting!◝(ᵔᵕᵔ)◜</span> : ""}
            <br></br>
            <ul className='previousCommands' id='console23'>
              {prevusedCommand.map((item, index) => {
                if (item.match(new RegExp(`\\b${"discord"}\\b`, "g"))) {
                  return (
                    <div  className="mcq-wrapper">
                      <li className="userPrefix" key={index}>{item}</li>
                      <ul id="mcq" className="mcq">
                        <li key={index} className="mcq-option">My Discord: <a href="https://discord.com/users/1036814817887014922" rel="noreferrer" target="_blank">forbesus ↗</a></li>
                      </ul>
                      <br />
                    </div>
                  );
                }
                else if (item.match(new RegExp(`\\b${"github"}\\b`, "g"))) {
                  return (
                    <div  className="mcq-wrapper">
                      <li className="userPrefix" key={index}>{item}</li>
                      <ul id="mcq" className="mcq">
                        <li key={index} className="mcq-option">My Github: <a href="https://github.com/forbesus" rel="noreferrer" target="_blank">@forbesus ↗</a></li>
                      </ul>
                      <br />
                    </div>
                  );
                }
                else if (item.match(new RegExp(`\\b${"email"}\\b`, "g"))) {
                  return (
                    <div  className="mcq-wrapper">
                      <li className="userPrefix" key={index}>{item}</li>
                      <ul id="mcq" className="mcq">
                        <li key={index} className="mcq-option">My Email: <a href="mailto:tomoyuki.ant@gmail.com" rel="noreferrer" target="_blank">tomoyuki.ant@gmail.com ↗</a></li>
                      </ul>
                      <br />
                    </div>
                  );
                }
                else if (item.match(new RegExp(`\\b${"telegram"}\\b`, "g"))) {
                  return (
                    <div  className="mcq-wrapper">
                      <li className="userPrefix" key={index}>{item}</li>
                      <ul id="mcq" className="mcq">
                        <li key={index} className="mcq-option">My Telegram: <a href="https://t.me/forbes35" rel="noreferrer" target="_blank">@forbes35  ↗</a></li>
                      </ul>
                      <br />
                    </div>
                  );
                }
                else if (item.match(new RegExp(`\\b${"all links"}\\b`, "g"))) {
                  return (
                    <div><li className="userPrefix" key={index}>{item}</li>
                      <label htmlFor="mcq">Click on link to open it:</label>
                      <div className="mcq-wrapper"><br></br>
                        <ul id="mcq" className="mcq">
                          <li className="mcq-option" tabIndex={0}><a href="https://github.com/forbesus" target='_blank' rel="noreferrer">My Github: @forbesus ↗</a></li>
                          <li className="mcq-option" tabIndex={1}><a href="mailto:tomoyuki.ant@gmail.com" target='_blank' rel="noreferrer">My Email: tomoyuki.ant@gmail.com↗</a></li>
                          <li className="mcq-option" tabIndex={3}><a href="https://t.me/forbes35" target='_blank' rel="noreferrer">My Telegram: @forbes35 ↗</a></li>
                          <li className="mcq-option" tabIndex={4}><a href="https://discord.com/users/1036814817887014922" target='_blank' rel="noreferrer">My Discord: forbes99 ↗</a></li>
                        </ul>
                      </div><br />
                    </div>
                  );
                }
                else if (item.match(new RegExp(`\\b${"clear"}\\b`, "g"))) {
                  setprevusedCommand([]);
                  return "";
                }
                else if (item.match(new RegExp(`\\b${"about"}\\b`, "g"))) {
                  return (
                    <div>
                      <li className="userPrefix" key={index}>{item}</li>
                      <div className='aboutme'><br></br>
                      Hi, nice to meet you. I'm Tomoyuki, blockchain and fullstack developer.
                        <br></br><br></br>
                      I started programming when I was 13 and have been programming since then. I got into crypto in 2020 through Neue.ite. I am passionate about the blockchain industry and believe it has the potential to change the word for better. I have also contributed to an open source web3 UI library (Web3UIKit).
                        <br></br><br></br>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <li className="userPrefix" key={index}>{item}</li>
                    bash: {item.replace("tomoyuki.ant@gmail.com:~$", "")}: command not found<br /><br />
                    </div>
                  );
                }
              })}
            </ul>
            {Text3.includes("Access") ? <span className='commands'><span className='userPrefix'>tomoyuki.ant@gmail.com:~$</span> <input type="text" id="command" name="command" autoFocus></input></span> : ""}
          </div>
        ):(
          <Button size='lg' onClick={() => setStart(true)} colorScheme="blue" variant='solid' className="terminal-btn">
            Start
          </Button>
        )}
      </div>
    </div>
  );
};

export default Terminal;