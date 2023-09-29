import './App.css';
import Navbar from './Navigation_bar/Navbar';
import Nav from './Nav';


function App() {
  return (
    <>

      <div style={{ borderBottom: '1px solid grey' }}>
        <div className='container'  >
          <Navbar />
        </div>
      </div>

      <div>
        <Nav />
      </div>

    </>
  );
}

export default App;
