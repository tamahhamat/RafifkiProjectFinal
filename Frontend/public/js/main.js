// C:\Users\newma\school_projects\RafifkiProjectFinal\Frontend\public\js\main.js


const { useState } = React;
const ReactDOM = window.ReactDOM;
const React = window.React;

function UNGoalsSection() {
  return (
    <section className="un-goals">
      <h2>UN Goals</h2>
      <p>Details about how the organization follows the UN goals.</p>
    </section>
  );
}






function TimelineSection() {
  return (
    <section className="timeline">
      <h2>Project Timeline</h2>
      <p>Details about the timeline of projects.</p>
    </section>
  );
}







function App() {
  return (
    <div>
      <header className="header">
      <img src="../../images/rafikiLogo.png" alt="Header Logo" className="header-logo" />
        
        <div className="header-buttons">
          <button className="header-button">HOME</button>
          <button className="header-button">ABOUT</button>
          <button className="header-button">WHERE WE WORK</button>
          <button className="header-button">PROJECTS</button>
          <button className="header-button">RAFIKI NEWS</button>
          <button className="header-button">CONTACT</button>
          <button className="header-button">DONATE</button>
          <button className="header-button">OTHER</button>
        </div>
      </header>
      <main className="content">
        <UNGoalsSection />
        <TimelineSection />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
