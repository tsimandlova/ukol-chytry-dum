import React from 'react';
import './style.css';

import electricity from './img/electricity.svg';
import water from './img/water.svg';

const Energy = () => {
    return (
<div className="energy">
				<div className="energy__source">
					<div className="energy__icon">
						<img src={electricity} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Elektřina</div>
						<div className="energy__value">36.7 kW</div>
					</div>
				</div>
				<div className="energy__source">
					<div className="energy__icon">
						<img src={water} />
					</div>
					<div className="energy__consumption">
						<div className="energy__description">Voda</div>
						<div className="energy__value">14.1 m<sup>3</sup></div>
					</div>
				</div>
			</div>
  );
};

export default Energy;