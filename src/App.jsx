import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/hero/hero';
import About from './Components/about/about';
import Service from './Components/service/service';
import Mywork from './Components/mywork/mywork';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;