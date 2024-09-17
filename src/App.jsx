import { useEffect, useState } from 'react';
import { fetchArticles } from './services/api';
import ArticlesList from './components/ArticlesList/ArticlesList';

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchArticles();
      setArticles(data.hits);
    };
    getData();
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
      {!!articles.length && <ArticlesList articles={articles} />}
    </div>
  );
};
export default App;

// axios.get('https://hn.algolia.com/api/v1/search?query=react').then(res => console.log(res.data));
