// Dependencies
import React from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import Picture from "./Components/Picture/Picture.js";
import Footer from "./Components/Footer/Footer.js";
import Card from "./Components/Card/Card.js";

// Images

// Hometown
import vancouver1 from "./Images/Vancouver1.jpg";
import vancouver2 from "./Images/Vancouver 2.jpg";
import vancouver3 from "./Images/Vancouver3.jpg";
import uoft1 from "./Images/UofT.jpg";
import travelsLocal1 from "./Images/Waterloo.jpg";
import travelsLocal2 from "./Images/NiagaraFalls.jpg";
import travelsLocal3 from "./Images/Yale.jpg";
import travelsLocal4 from "./Images/Montreal1.jpg";
import travelsLocal5 from "./Images/Montreal2.jpg";
import travelsLocal6 from "./Images/Montreal3.jpg";
import tech1 from "./Images/VisitingFirstTechCompany.jpg";
import tech2 from "./Images/FirstTechJob.jpg";
import tech3 from "./Images/SecondTechJob.jpg";

function App() {
  return (
    <div className="App">
      <Header />
      <Picture
        src={[
          [vancouver1, "27%", ""],
          [vancouver2, "30%", ""],
          [vancouver3, "30%", ""]
        ]}
      />
      <Card
        title="Growing Up: Vancouver"
        body="I grew up and spent most of my time up until University in Vancouver, British Columbia. Vancouver remains one of my favorite cities in the world for it's beautiful landscapes, relaxed attitude and phenomenal planning."
        maxRelativeWidth="60%"
      />
      <Picture src={uoft1} maxRelativeWidth="30%" />
      <Card
        title="University: Toronto"
        body="In 2016 I moved to Toronto, Ontario to attend the University of Toronto studying Computer Science. Toronto is an incredible city to live in and Toronto has been a jumping off point for many of my interests in the past years."
        maxRelativeWidth="60%"
      />
      <Picture
        src={[
          [travelsLocal1, "30%", "Waterloo, Ontario"],
          [travelsLocal2, "30%", "Niagara Falls, Ontario"],
          [travelsLocal3, "30%", "Yale University - New Haven, Connecticut"],
          [travelsLocal4, "30%", ""],
          [travelsLocal5, "30%", ""],
          [travelsLocal6, "30%", "Montreal, Quebec"]
        ]}
      />
      <Card
        title="Travel: Local"
        body="Toronto became my hub for travels throughout the Northeast. Along with my partner Ellen I visited a number of cities both for leisure and for hackathons."
        maxRelativeWidth="60%"
      />
      <Picture
        src={[
          [tech1, "30%", "Visiting my first Tech Company: Mozilla"],
          [
            tech2,
            "30%",
            "My first Tech Job: Grow Enterprise Fintech (now part of ATB)"
          ],
          [tech3, "30%", "My second Tech Job: RBC"]
        ]}
      />
      <Card
        title="Travel: Local"
        body="In first year of University I got to finally visit a mythical tech company office, which featured beanbags and all. After second second year I was able to land my first job working at a fintech startup out of Vancouver. Following my third year I got another job this time at a major bank which cemented my career direction in the fintech area."
        maxRelativeWidth="60%"
      />
      <Picture
        src={[
          [tech1, "30%", "Visiting my first Tech Company: Mozilla"],
          [
            tech2,
            "30%",
            "My first Tech Job: Grow Enterprise Fintech (now part of ATB)"
          ],
          [tech3, "30%", "My second Tech Job: RBC"]
        ]}
      />
      <Card
        title="Travel: Local"
        body="In first year of University I got to finally visit a mythical tech company office, which featured beanbags and all. After second second year I was able to land my first job working at a fintech startup out of Vancouver. Following my third year I got another job this time at a major bank which cemented my career direction in the fintech area."
        maxRelativeWidth="60%"
      />
      <Footer />
    </div>
  );
}
// Needs to be cleaned up

export default App;
