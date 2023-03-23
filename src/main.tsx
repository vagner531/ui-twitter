import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import { Tweet } from "./components/Tweet";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />

      <div className="content">
        <main className="timeline">
          <Header title="Home" />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/vagner531.png" alt="Vagner Santos" />
              <textarea id="tweet" placeholder="What´s happening?"></textarea>
            </label>

            <button type="submit">Tweet</button>
          </form>
          <div className="separator" />

          <Tweet />
          <Tweet />
          
        </main>
      </div>
    </div>
  </React.StrictMode>
);
