import './App.css'
import Deals from './assets/components/Deals/Deals'
import Navbar from './assets/components/Navbar'
import ProductDetail from './assets/components/productDetail/ProductDetail'
import Services from './assets/components/services/Services'
import Tyres from './assets/components/tyres/tyres'
import Payment from './assets/components/payment/Payment'
import Question from './assets/components/question/Question'
import Footer from './assets/components/footer/Footer'
function App() {

  return (
    <>
      <Navbar />
      <ProductDetail />
      <Deals />
      <Services />
      <Tyres />
      <Payment />
      <Question />
      <Footer />
    </>
  )
}

export default App
