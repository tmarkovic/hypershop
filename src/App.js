import './App.css';
import Title from './Title';
import Product from './Product';
function App() {
  return (
    <div>
      <Title />
      <section>
        <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <div className="grid grid-cols-2 gap-4 lg:col-span-2 lg:grid-cols-4 lg:py-12">
              <Product name="The Watcher" price={1337} />
              <Product name="Watch out" price={49} />
              <Product name="Watch dog" price={234} />
              <Product name="Watching machine" price={149} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
