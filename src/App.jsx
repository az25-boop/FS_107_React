import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios
      .get("https://hn.algolia.com/api/v1/search?query=react")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <div>
      <h2>HTTP</h2>
    </div>
  );
};
export default App;
