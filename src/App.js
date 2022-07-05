import './App.css';
import Product from './components/Product/Product';

import {products} from './data/products';


function App() {
  console.log(products);
  return (
    <div className='main__app'>
      <h1>Jean Claude Van Damme</h1>
      {products.map((item,index)=>{
        return <Product key={index} title={item.title} description={item.description} valoration={item.valoration} price={item.price} image={item.image}/>
      })}
    </div>
  );
}

export default App;