import { useEffect, useState } from "react";
import { fetchArticles } from "./services/api";
import ArticlesList from "./components/ArticlesList/ArticlesList";
import { Hearts } from "react-loader-spinner";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setArticles((prev) => [...prev, ...data.hits]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (topic) => {
    setQuery(topic);
    setArticles([]);
    setPage(0);
  };

  return (
    <div>
      <h2>HTTP</h2>
      <SearchBar setQuery={handleSetQuery} />
      {articles.length ? <ArticlesList articles={articles} /> : null}
      {isLoading && <Hearts />}
      {isError && <h2>Шось пішло не так</h2>}
      <button onClick={handleChangePage}>Load more</button>
    </div>
  );
};
export default App;

// axios.get("https://hn.algolia.com/api/v1/search?query=react").then((res) => console.log(res.data));
