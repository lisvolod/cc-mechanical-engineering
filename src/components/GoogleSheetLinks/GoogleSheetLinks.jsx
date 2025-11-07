import React, { useState, useEffect } from "react";
import "./GoogleSheetLinks.scss";
import Loader from "./../Loader/Loader.jsx";
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID;

const GoogleSheetLinks = ({ sheetName }) => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(
          `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/'${sheetName}'!A:B?key=${API_KEY}`
        );
        const data = await response.json();

        if (data.values) {
          const formattedLinks = data.values
            .filter(row => row.length >= 2) // Відфільтрувати рядки без 2-х значень
            .map(([name, url]) => ({ name, url }));
            setLinks(formattedLinks);
        } else {
          setError("Помилка: Дані відсутні або таблиця порожня.");
        }
      } catch (err) {
        setError("Помилка завантаження: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSheetData();
  }, [sheetName]);

  if (loading) return (<Loader/>);
  if (error) return <p>{error}</p>;

  return (
    <div>
      {/* <h3>{sheetName}</h3> */}
      <ul className="links">
        {links.map(({ name, url }, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleSheetLinks;
