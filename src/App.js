import './App.css';
import Navbar from './Components/navbar';
import MainSection from './Components/MainSection';
import Post from "./Components/Posts";
function App() {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className='MainSection'>
      <MainSection />
    </div>
    <div className="PostSection">
      <Post/>
    </div>
    </>
  );
}

export default App;
