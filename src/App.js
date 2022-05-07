import React from "react"
import "./styles.css"

/////////////////////
// Import Components
/////////////////////

import AverageRating from "./components/AverageRating";
import Reviews from "./components/Reviews"
import SentimentAnalysis from "./components/SentimentAnalysis";
import Sidebar from "./components/Sidebar";
import WebsiteVisitors from "./components/WebsiteVisitors";

/////////////////////
// App
/////////////////////

function App () {
  return (
    <div className="appcontainer">
      <h1> React Static Components</h1>
      <Sidebar/>
      <Reviews/>
      <AverageRating/>
      <SentimentAnalysis/>
      <WebsiteVisitors/>
    </div>
  )
}

export default App;