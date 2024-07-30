// C:\Users\newma\school_projects\RafifkiProjectFinal\Frontend\public\js\main.js


const { useState } = React;
const ReactDOM = window.ReactDOM;
const React = window.React;



function UNGoalsSection() {
  const goals = [
    { 
      goal: 'Zero Hunger', 
      dataPoints: ['School Kitchens Built', 'Lunches Served', 'Data 1.3'], 
      goalClass: 'un-goal-zero-hunger',
      dataPointClasses: ['data-point-zero-hunger-1', 'data-point-zero-hunger-2', 'data-point-zero-hunger-3']
    },
    { 
      goal: 'Good Health and Well-Being', 
      dataPoints: ['Health Clinics', 'Medication Dispensed', 'Pregnant Mothers Helped'], 
      goalClass: 'un-goal-good-health',
      dataPointClasses: ['data-point-good-health-1', 'data-point-good-health-2', 'data-point-good-health-3']
    },
    { 
      goal: 'Quality Education', 
      dataPoints: ['Schools Renovated', 'Desks and Other Supplies', 'Data 3.3'], 
      goalClass: 'un-goal-quality-education',
      dataPointClasses: ['data-point-quality-education-1', 'data-point-quality-education-2', 'data-point-quality-education-3']
    },
    { 
      goal: 'Clean Water and Sanitation', 
      dataPoints: ['km/miles of water piping', 'Sanitation Tool', 'Data 4.3'], 
      goalClass: 'un-goal-clean-water',
      dataPointClasses: ['data-point-clean-water-1', 'data-point-clean-water-2', 'data-point-clean-water-3']
    },
  ];

  return (
    <section className="un-goals">
      <div className="un-goals-header">
        <h2>United Nations Sustainable Development Goals</h2>
        <p>Rafiki Village Project uses the UN Sustainable Development Goals to inspire our projects and improve the communities we work with. 
          The goals of No Poverty, Zero Hunger, Good Health and Well-Being, Quality Education, and Clean Water and Sanitation are what we hope 
          to achieve through our work. To find out more about the United Nations 17 Sustainable Development Goals please go to <br></br>
          <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer">sdgs.un.org/goals</a>.</p>
      </div>
      <div className="un-goals-grid">
        {goals.map((item, index) => (
          <div key={index} className="un-goal-item">
            <div className={`un-goal ${item.goalClass}`}>{item.goal}</div>
            <div className="data-points">
              {item.dataPoints.map((data, idx) => (
                <div key={idx} className={`data-point ${item.dataPointClasses[idx]}`}>{data}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
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
