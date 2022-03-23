import Praktika1 from "./components/Praktika1";
import Praktika2 from "./components/Praktika2";
import Praktika3 from "./components/Praktika3";
import Praktika31 from "./components/Praktika31";
import Card from "./components/Praktika4/Card";
import { v4 as uuidv4 } from 'uuid';


function App() {

  let data = [{
    pic: "https://en.number13.de/content/images/size/w600/2021/08/photo-1542831371-29b0f74f9713.jpg",
    headline: "As mokausi HTML",
  }, {
    pic: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
    headline: "As mokausi CSS",
  }, {
    pic: "https://miro.medium.com/max/1400/0*-v413rdknCLjM3r8",
    headline: "As mokausi JavaScript",
  }]

  let listas = data.map(item => {
    return <Card key={uuidv4()} pic={item.pic} headline={item.headline} />
  })

  return (
    <div className="container">
       <Praktika1 />
       <Praktika2 />
       <Praktika3 />
       <Praktika31 />
       <div className="row">
       {listas}
       </div>
    </div>

  );
}

export default App;
