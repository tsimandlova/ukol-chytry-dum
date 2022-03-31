import React, {useState} from 'react';
import './style.css';

import lightOff from './img/light-off.svg';
import lightOn from './img/light-on.svg';

const Light = ({name, state}) => {
  const [stav, setStav] = useState(state);

  const handleClick = () => {
    let novyStav 
    
    {stav === 'on' ? novyStav = 'off' : novyStav = 'on'}

    setStav(novyStav)
  }

    return (
				<div className="light" onClick={handleClick}>
					<div className="light__icon">
						{stav === 'on' ? <img src={lightOn} /> : <img src={lightOff} />}
					</div>
					<div className="light__name">
						{name}
					</div>
				</div>
  );
};

export default Light;