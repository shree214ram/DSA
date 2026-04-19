import React, { useState, useEffect } from 'react';
import data from './data';
import './style.css';

export default function App() {
  const [countryArr, setCountryArr] = useState([]);
  const [stateArr, setStateArr] = useState([]);
  const [city, setCity] = useState([]);
  // let countryArr = [];
  // let stateArr = [];
  // let city = [];
  // const handleStatesAndCities = () => {
  //   stateArr.map(obj=>{
  //      states.push(obj.state)
  //   })

  // }
  useEffect(() => {
    const ctArr = [];
    data.map((obj) => {
      // obj.states.map((obj) => {
      ctArr.push(obj);
      //   city = obj.cities;
      // });
    });
    setCountryArr(ctArr);
  }, []);
  // const res = data.map((obj) => {
  //   countryArr.push(obj.country);
  //   // obj.states.map((obj) => {
  //   //   stateArr.push(obj.state);
  //   //   city = obj.cities;
  //   // });
  // });
  const countrySel = (e) => {
    console.log(e.target.value, 'in con');

    const s = data.filter((obj) => obj.country == e.target.value);
    // console.log(s, 'ram');
    // console.log(s[0], 's');
    setStateArr(s[0].states);
  };
  const stateSel = (e) => {
    const c = stateArr.filter((obj) => obj.state == e.target.value);
    console.log(c, 'c');
    setCity(c[0].cities);
  };
  // console.log(countryArr, 'country');
  console.log(city, 'cities');
  console.log(stateArr, 'state');

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <select onChange={countrySel}>
        {countryArr?.map((val, i) => {
          console.log(val, 'v');
          return (
            <>
              <option value={val.country}>{val.country}</option>
            </>
          );
        })}
      </select>
      <select onChange={stateSel}>
        {stateArr?.map((val, i) => {
          console.log(val, 'v');
          return (
            <>
              <option value={val.state}>{val.state}</option>
            </>
          );
        })}
      </select>
      <select>
        {city?.map((val, i) => {
          console.log(val, 'v');
          return (
            <>
              <option value={val}>{val}</option>
            </>
          );
        })}
      </select>

      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
