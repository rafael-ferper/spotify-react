import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Playlist from './Playlist/Playlist';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
    <Sidebar />
    <div className='main-container'>
      <Playlist />
    </div>
    <Footer />
    </>
  );
}

export default App;
