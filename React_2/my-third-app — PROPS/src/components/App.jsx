import Content from "./Content"
import FirstImg from "../assets/img/img1.jpg"
import SecondImg from "../assets/img/img2.jpg"
import ThirdImg from "../assets/img/img3.jpg"
import Card from "./Card"


function App() {
    const cardsData = [
      {
        id: 1,
        title: 'Смартфон Samsung Galaxy S21',
        price: 69990,
        inStock: true,
        imageUrl: 'https://via.placeholder.com/250x150?text=Samsung',
      },
      {
        id: 2,
        title: 'Наушники Apple AirPods Pro',
        price: 19990,
        inStock: false,
        imageUrl: 'https://via.placeholder.com/250x150?text=AirPods',
      },
      {
        id: 3,
        title: 'Ноутбук ASUS VivoBook 15',
        price: 54990,
        inStock: true,
        imageUrl: 'https://via.placeholder.com/250x150?text=ASUS',
      },
    ]

  return (
    <div className="App">
      <Content title='Заголовок 1' paragraph='Первый параграф' img={FirstImg} />
      <Content title='Заголовок 2' paragraph='Второй параграф' img={SecondImg} />
      <Content title='Заголовок 3' paragraph='Третий параграф' img={ThirdImg} />
      <ul>
        {cardsData.map(card => <Card title={card.title} price={card.price} exist={card.inStock}/>)}
      </ul>
    </div>
  );
}

export default App;
