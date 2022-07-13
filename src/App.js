import './App.css';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import Masonry from './components/Masonry';
import News from './components/News';
import Popup from './components/Popup';

function App() {
  return (
    <Container>
      <Header />
      <Masonry />
      <News />
      <Footer />
      <Popup />
    </Container>
  );
}

export default App;
