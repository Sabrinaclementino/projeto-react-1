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
        <Article
          title="Space News"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolore fuga ab eveniet ut. Corrupti debitis quisquam dolores ad, consectetur maxime! Optio, deleniti eveniet. Modi ut hic blanditiis neque ea!"
          thumbnail={articleImg}
        />
        <Article
          title="Space News"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolore fuga ab eveniet ut. Corrupti debitis quisquam dolores ad, consectetur maxime! Optio, deleniti eveniet. Modi ut hic blanditiis neque ea!"
          thumbnail={articleImg}
        />
        <Article
          title="Space News"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia dolore fuga ab eveniet ut. Corrupti debitis quisquam dolores ad, consectetur maxime! Optio, deleniti eveniet. Modi ut hic blanditiis neque ea!"
          thumbnail={articleImg}
        />
      </section>
    </>
  );
}

export default App;
