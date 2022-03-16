import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import { v4 as uuidv4 } from 'uuid';

function App() {


  let data = [{
    headline: "Pirmas darbas",
    description: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "9",
  }, {
    headline: "Antras darbas",
    description: "Is this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "10",
  }, {
    headline: "Trecias darbas",
    description: "Why this is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "2",
  }, {
    headline: "Ketvirtas darbas",
    description: "Whom is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "1",
  }, {
    headline: "Penktas darbas",
    description: "Like is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "5",
  }, {
    headline: "Sestas darbas",
    description: "Not the same is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    time: "4",
  }]

  let kintamieji = data.map(item => {
    return <Main key={uuidv4()} headline={item.headline} description={item.description} time={item.time}/>
  })

  return (
    <>
    <Header />
    <div className="album py-5 bg-light">
      <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {kintamieji}
      </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;