import Navbar from './components/Navbar/Navbar';
import Catalog from './components/Store/Catalog/Catalog';
import ShippingBanner from './components/Footer/ShippingBanner/ShippingBanner';
import Services from './components/Footer/Services/Services';
import BottomSection from './components/Footer/BottomSection/BottomSection';
import { UserDataContextProvider } from './contexts/UserDataContext';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';

const initialStorage = JSON.parse(localStorage.getItem('saveCache')) || [];
const wishlistStorage = JSON.parse(localStorage.getItem('saveWishCache')) || [];

function App() {
  const [shoppingCart, setShoppingCart] = useState(initialStorage);
  const [wishlistCart, setWishlistCart] = useState(wishlistStorage);

  const notifyToast = (message, error = false) => {
    if (error) return toast.error(message);
    toast.success(message);
  };

  useEffect(() => {
    localStorage.setItem('saveCache', JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    localStorage.setItem('saveWishCache', JSON.stringify(wishlistCart));
  }, [wishlistCart]);

  return (
    <div className="main__app">
      <UserDataContextProvider>
        <Navbar
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          wishlistCart={wishlistCart}
          setWishlistCart={setWishlistCart}
          notifyToast={notifyToast}
        />
        <Catalog
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          wishlistCart={wishlistCart}
          setWishlistCart={setWishlistCart}
          notifyToast={notifyToast}
        />
      </UserDataContextProvider>
      <ShippingBanner />
      <Services />
      <BottomSection />
      <Toaster reverseOrder={false} />
    </div>
  );
}

export default App;
