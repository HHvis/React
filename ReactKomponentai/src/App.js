import Header from "./components/Header";
import PostContent from "./components/PostContent";
import Box from "./components/Box";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from 'uuid';

function App() {

  let data = [{
    headline: "Pirmas darbas",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "9 mins",
  }, {
    headline: "Antras darbas",
    description: "Is this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "10 mins",
  }, {
    headline: "Trecias darbas",
    description: "Why this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "2 mins",
  }, {
    headline: "Ketvirtas darbas",
    description: "Whom is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "1 min",
  }, {
    headline: "Penktas darbas",
    description: "Like is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "5 mins",
  }, {
    headline: "Sestas darbas",
    description: "Not the same is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "4 mins",
  }]

  let listas = data.map(item => {
    return <Box key={uuidv4()} headline={item.headline} description={item.description} time={item.time} trecias={item.trecias} spalva={item.spalva} />
  })


  return (
    <div className="container">

          <Header />

      <main>
      <div className="row">
        <section>
          <PostContent />
        </section>
      </div>
      <div className="album py-5 bg-light">
      <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {listas}
      </div>
      </div>
      </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
