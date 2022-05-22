import './App.css';

import About from '../About/About';
import CryptoExplorer from '../CryptoExplorer/CryptoExplorer';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Investments from '../Investments/Investments';
import News from '../News/News';

const App = () => {
  return (
    <div className='app'>
      <Header></Header>
      <Hero></Hero>
      <Investments></Investments>
      <CryptoExplorer></CryptoExplorer>
      <News></News>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default App;
