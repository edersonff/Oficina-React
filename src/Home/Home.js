import Item from '../Components/Item/Item';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <div className="full">
        <div className="title"><h1>Nelson auto peças</h1></div>
        <img src="img/full-size/main.png"/>
      </div>
      <div className="content">
        <div className="about">
          <div className="titles">
            <h1>Sobre a oficina</h1>
            <p>R. João Januário Ayroso, 2306</p>
          </div>
          <div>
            <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="items">
          <Item/>
          <Item/>
          <Item/>
          <Item/>
        </div>
      </div>
    </div>
  );
}

export default Home;
