import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Hearts } from "react-loader-spinner";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(false);
        setIsLoading(true);
        const data = await fetchArticles();
        setArticles(data.hits);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      {articles.length ? <ArticlesList articles={articles} /> : null}
      {isLoading && <Hearts />}
      {isError && <h2>Шось пішло не так</h2>}
    </div>
  );
};
export default App;

// axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res) => console.log(res.data));
