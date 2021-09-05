import React from "react";
import PlacesContainer from "./Places/PlacesContainer";
import ProfileContainer from "./Profile/ProfileContainer";

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <ProfileContainer />
        <PlacesContainer />
      </div>
    </main>
  );
};

export default Main;
