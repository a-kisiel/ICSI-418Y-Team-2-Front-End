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
  {
    title: "News 4",
    description:
      "News 4 description in full details. These news will only be posted by the admin of the platform.",
  },
  {
    title: "News 5",
    description:
      "News 5 description in full details. These news will only be posted by the admin of the platform.",
  },
];

function generateAllMockNews() {
  let output = [];

  for (let i = 0; i < 5; i++) {
    output.push(
      <div className="news">
        <div className="news-inner">
          <h1 className="hTagLeagueNews">{mockNews[i].title}</h1>
          <h3 className="hTagLeagueNews">{mockNews[i].description}</h3>
        </div>
        {i !== 4 ? <hr className="hrTagLeagueNews" /> : null}
      </div>
    );
  }
  return <div className="newsBox">{output}</div>;
}

export default function LeagueNews() {
  return generateAllMockNews();
}
