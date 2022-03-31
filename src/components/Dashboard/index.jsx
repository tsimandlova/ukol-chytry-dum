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
          <Climate />
          <Blinds />
          <Energy />
        </main>
  );
};

export default Dashboard;