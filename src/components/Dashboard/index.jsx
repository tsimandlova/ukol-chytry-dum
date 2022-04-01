import React from 'react';
import './style.css';

import Lights from '../Lights';
import Climate from '../Climate';
import Blinds from '../Blinds';
import Energy from '../Energy';

const Dashboard = (data) => {
    return (
      <main className="dashboard">
          <Lights lights={data.lights}/>
          {/* <Lights /> */}
          <Climate />
          <Blinds state="open" />
          <Energy electricity="21.4" water="15.6"/>
        </main>
  );
};

export default Dashboard;