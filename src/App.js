import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Description from './components/Description/Description';
import Features from './components/Features/Features';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Description />
      <Features />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
