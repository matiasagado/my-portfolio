import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="body">
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
