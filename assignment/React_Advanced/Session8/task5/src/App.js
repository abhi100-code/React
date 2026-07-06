import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart App</h1>

      <ProductList />

      <hr />

      <Cart />
    </div>
  );
}

export default App;