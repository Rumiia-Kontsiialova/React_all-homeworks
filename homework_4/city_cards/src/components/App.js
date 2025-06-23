import CitySelector from "./CitySelector";
import CityCard from "./CityCard";
import {useState} from 'react'
import styles from '../styles/App.module.css'

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className={styles.container}>
      <h1>Выберите город: </h1>
      <CitySelector onCitySelect = {setSelectedCity}/>
      {selectedCity && <CityCard city={selectedCity} />}
    </div>
  );
}

export default App;
