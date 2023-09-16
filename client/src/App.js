import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./views/Home";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Boscanici Adrian Gabriel</h1>
        <h1>Bogdan Dulgheriu gabriel</h1>
        <h1>Stefan Ionel</h1>
        <h1>Miloiu Cristi</h1>
        <h1>Furtuna Teo</h1>
        <h1>Andronie Laurentiu</h1>
        <h1>Ruxi Martoiu</h1> 
        <h1>Dumitru Mihnea-Ioan</h1>
      </header>
      <script>
      const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function showSlide(index) {
  
  carouselItems.forEach(item => {
    item.style.display = 'none';
    })};

  
  carouselItems[index].style.display = 'block';


function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length};
  showSlide(currentIndex);


function previousSlide() {
  currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length};
  showSlide(currentIndex);



showSlide(currentIndex);


document.getElementById('nextBtn').addEventListener('click', nextSlide);
document.getElementById('prevBtn').addEventListener('click', previousSlide);

      </script>
    </div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}