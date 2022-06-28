import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import data from './components/data'

function App() {
  const cards = data.map(item => {
    return (
      <Card
      key = {item.id}
      item = {item}

      //LONGER METHOD:
      // img={item.coverImg}
      // rating={item.stats.rating}
      // reviewCount={item.stats.reviewCount}
      // country={item.location}
      // title={item.title}
      // price={item.price}
      />
    )
  })
  return (
   <>
   <Navbar/>
   <Hero/>
   <section className='cards-list'>
   {cards}
   </section>
   </>
  );
}

export default App;
