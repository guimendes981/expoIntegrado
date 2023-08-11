// UniversityListDisplay.js
import React, { useState, useEffect } from 'react';

const UniversityListDisplay = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const fetchUniversities = async () => {
      const response = await fetch('http://universities.hipolabs.com/search?country=Brazil');
      const data = await response.json();
      setUniversities(data);
    };
    fetchUniversities();
  }, []);

  return (
    <ul>
      {universities.map((university, index) => (
        <li key={index}>
          <p>Nome: {university.name}</p>
          <p>URL: <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">{university.web_pages[0]}</a></p>
        </li>
      ))}
    </ul>
  );
};

export default UniversityListDisplay;
