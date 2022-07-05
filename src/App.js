import './App.css';
import Product from './components/Product/Product';

import {products} from './data/products';


function App() {
  console.log(products);
  return (
    <>
      <h1>Jean Claude Van Damme</h1>
      {products.map((item,index)=>{
        return <Product key={index} title={item.title} description={item.description} valoration={item.valoration} amount={item.amount} price={item.price} image={item.image}/>
      })}
    </>
  );
}

export default App;