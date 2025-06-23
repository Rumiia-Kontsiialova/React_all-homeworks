import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import TaskList from "./TaskList";
import OrderStatus from "./OrderStatus";

function App() {
  const products = ["iPhone", "Samsung", "Xiaomi"];
  const tasks = [];
  const orders = [
    {orderId: 123, status: "В пути"},
    {orderId: 456, status: "Обработан"},
    {orderId: 789, status: "Доставлен"}
  ];

  return (
    <div className="App">
      <Greeting name="Имя1" />
      <Greeting name="Имя2" />
      <Greeting name="Имя3" />
      <h2>Список покупок</h2>
      <ShoppingList items={products} />
      <h2>Список задач</h2>
      <TaskList tasks={tasks} />
      <h2>Статус заказов</h2>
      {orders.map(order => (
        <OrderStatus 
          orderId={order.orderId} 
          status={order.status} 
        />
      ))}
    </div>
  );
}

export default App;
