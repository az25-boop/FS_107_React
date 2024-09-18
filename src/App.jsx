import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Hearts } from "react-loader-spinner";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchArticles();
        setIsLoading(false);
        setArticles(data.hits);
      } catch (error) {
        console.log("error", error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      {articles.length ? <ArticlesList articles={articles} /> : null}
      {isLoading && <Hearts />}
    </div>
  );
};
export default App;

// axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res) => console.log(res.data));
