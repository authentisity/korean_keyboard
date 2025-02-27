import React from "react";
import "./keyboard.css";

const Keyboard: React.FC = () => {
  return (
    <div id="keyboard">
      <div className="key-row">
        <div className="key" style={{ borderTopLeftRadius: "20px" }}>
          ~
        </div>
        <div className="key">1</div>
        <div className="key">2</div>
        <div className="key">3</div>
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key">0</div>
        <div className="key">-</div>
        <div className="key">=</div>
        <div
          className="key"
          style={{ borderTopRightRadius: "20px", flex: 2, fontSize: "55%" }}
        >
          Backspace
        </div>
      </div>
      <div className="key-row">
        <div className="key" style={{ flex: 1.5 }}>
          TAB
        </div>
        <div className="key">Q</div>
        <div className="key">W</div>
        <div className="key">E</div>
        <div className="key">R</div>
        <div className="key">T</div>
        <div className="key">Y</div>
        <div className="key">U</div>
        <div className="key">I</div>
        <div className="key">O</div>
        <div className="key">P</div>
        <div className="key">{"{"}</div>
        <div className="key">{"}"}</div>
        <div className="key" style={{ flex: 1.5 }}>
          |
        </div>
      </div>
      <div className="key-row">
        <div className="key" style={{ flex: 1.75 }}>
          CAPS
        </div>
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
        <div className="key">F</div>
        <div className="key">G</div>
        <div className="key">H</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
        <div className="key">:</div>
        <div className="key">"</div>
        <div className="key" style={{ flex: 2.25 }}>
          ENTER
        </div>
      </div>
      <div className="key-row">
        <div className="key" style={{ flex: 2.25 }}>
          SHIFT
        </div>
        <div className="key">Z</div>
        <div className="key">X</div>
        <div className="key">C</div>
        <div className="key">V</div>
        <div className="key">B</div>
        <div className="key">N</div>
        <div className="key">M</div>
        <div className="key">&lt;</div>
        <div className="key">&gt;</div>
        <div className="key">?</div>
        <div className="key" style={{ flex: 2.75 }}>
          SHIFT
        </div>
      </div>
      <div className="key-row">
        <div
          className="key"
          style={{ borderBottomLeftRadius: "20px", flex: 1.875 }}
        >
          Emoji
        </div>
        <div className="key" style={{ flex: 1.875 }}>
          Alt
        </div>
        <div className="key" style={{ flex: 6.25 }}>
          ____
        </div>
        <div className="key" style={{ flex: 1.875 }}>
          Alt
        </div>
        <div
          className="key"
          style={{ backgroundColor: "transparent", flex: 3.125 }}
        ></div>
      </div>
    </div>
  );
};

export default Keyboard;
