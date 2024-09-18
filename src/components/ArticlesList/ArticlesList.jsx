// import React from "react";

const ArticlesList = ({ articles }) => {
  return (
    <ul>
      {articles.map((item) => (
        <li key={item.ObjectID}>
          <a href={item.url} target="blank">
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
