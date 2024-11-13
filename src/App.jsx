import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import articleImg from "./assets/images/uma-esfera-brilhante-do-ceu-orbita-a-galaxia-estrelada-gerada-por-ia_188544-15599.avif";
// import { Counter } from "./components/Counter/Counter";

import "./styles/App.css";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      const response = await axios.get(
        "https://api.spaceflightnewsapi.net/v4/articles"
      );

      const newsData = response.data;
      //console.log(newsData)
      setNews(newsData);
    }

    loadNews();
  }, []);

  return (
    <>
      <Navbar />

      {/* <Counter /> */}

      <section id="articles">
        {news.map((article) => {
          return (
            <Article
              title={article.title}
              provider={article.news_site}
              description={article.summary}
              thumbnail={article.image_url}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
