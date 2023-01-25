import './App.scss';

import Navmenu from './components/Navmenu';
import Filter from './components/Filter';
import Glasses from './components/Glasses';

const App = () => (
  <div className="App">
    <section className="menu-container">
      <Navmenu />
    </section>
    <section className="filter-container">
      <Filter />
    </section>
    <main className="main-container">
      <Glasses />
    </main>
  </div>
);

export default App;
