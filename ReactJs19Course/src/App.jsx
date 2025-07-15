import React from "react";

const App = () => {
  return (
    <main>
      <div className="pattern"></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner"></img>
          <h1>
            Find <span className="text-gradient">Movies</span> You Will Enjoy
            Without the Hassle
          </h1>
        </header>
        <p>Search</p>
      </div>
    </main>
  );
};

export default App;
