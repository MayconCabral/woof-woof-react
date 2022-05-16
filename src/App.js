import './App.css';
import DogsBreed from './components/DogsBreed';
import DogsPicture from './components/DogsPicture';
import Provider from './context/Provider';



function App() {
  return (
    <Provider>
      <main>
      <DogsBreed />
      <div className='dogImages'>
          <DogsPicture />
      </div>      
      </main>
    </Provider>  
  );
}

export default App;
