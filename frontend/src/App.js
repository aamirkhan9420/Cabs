import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Allroutes from './Components/Routes/Allroutes';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Allroutes />
    <Footer />
    </div>
  );
}

export default App;
