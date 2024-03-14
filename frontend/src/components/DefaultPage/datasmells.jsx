import React from 'react';
import DataSmellDetails from './DataSections';
import "./datasmells.css";
import Navbar from './Navbar';
import h5 from "./../../assets/h5.png";
import h6 from "./../../assets/mka.png";
import h7 from "./../../assets/h7.png";
import h8 from "./../../assets/h8.png";
import h9 from "./../../assets/h9.png";

import { useLocation } from 'react-router-dom';

const yourSections = [
  // Define your 35 sections here with image paths, titles, and bullet points
  {
    image: './../assets/h5.png',
    title: 'Section 1 Title',
    bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
  },

  // ... add 34 more sections
];
const imageUrls=[h7,h8,h9,h8,h7];
const description = 'This is the description for the data smell';


function DataSmells() {
  const location = useLocation();
  const { ok } = location.state;

  // Convert the string back to JSON
  const responseData = JSON.parse(ok);
  const { metrics } = responseData.data;
  console.log("in datasmells.jsx");
  console.log(metrics);
  return (
    <>
     <Navbar/>
     <div className='datasml'>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>
      <DataSmellDetails imageUrls={imageUrls} description={description} metrics={metrics}/>



    


    </div>
    </>
  );
}

export default DataSmells;