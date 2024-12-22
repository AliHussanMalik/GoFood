import React from "react";
import Carousel from "../components/Carousel";
import Card from "../components/Card";

export default function Home() {
  return (
    <>
    <navbar/>
      <Carousel />
<div className="m-5">
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   <Card />
   </div>
     
    </>
  );
}
