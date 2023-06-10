import "./App.css";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [markdown, setMarkdown] = useState("## Markdown Preview");

  return (
    <main>
    <h1 className="title text-center m-1">Text to HTML</h1>
      <section className="markdown">
        <textarea
          className="input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <hr />
        <div className="container">
          <article className="result">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </div>
      </section>
    </main>
    // https://www.markdownguide.org/cheat-sheet/
  );
}

export default App;
