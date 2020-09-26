import React from "react";
import "../styles/LeagueNews.css";

const mockNews = [
  {
    title: "News 1",
    description:
      "News 1 description in full details. These news will only be posted by the admin of the platform.",
  },
  {
    title: "News 2",
    description:
      "News 2 description in full details. These news will only be posted by the admin of the platform.",
  },
  {
    title: "News 3",
    description:
      "News 3 description in full details. These news will only be posted by the admin of the platform.",
  },
];

function generateAllMockNews() {
  let output = [];

  for (let i = 0; i < 3; i++) {
    output.push(
      <div className="news">
        <h1>{mockNews[i].title}</h1>
        <h3>{mockNews[i].description}</h3>
        {i !== 2 ? <hr style={{ border: "2px solid rgb(53, 83, 83)" }} /> : null}
      </div>
    );
  }
  return <div className="newsBox">{output}</div>;
}

export default function LeagueNews() {
  return generateAllMockNews();
}
