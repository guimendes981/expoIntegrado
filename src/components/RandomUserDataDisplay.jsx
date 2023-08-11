// RandomUserDataDisplay.js
import React, { useState, useEffect } from 'react';

const RandomUserDataDisplay = () => {
  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUserData(data.results[0]);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      <p>Nome: {userData.name?.first} {userData.name?.last}</p>
      <p>Email: {userData.email}</p>
      <p>Localização: {userData.location?.city}, {userData.location?.country}</p>
      <button onClick={fetchUserData}>Atualizar Dados</button>
    </div>
  );
};

export default RandomUserDataDisplay;
