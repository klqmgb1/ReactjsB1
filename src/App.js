import './App.css';
import Navbar from './navbar';
import Header from './header';
import Content from './content';
import Footer from './footer';
function App() {
  return (
    <div className="App">
      <div>
          <Navbar />
          <Header />
          <Content />
          <Footer />
      </div>
    </div>
  );
}

export default App;
