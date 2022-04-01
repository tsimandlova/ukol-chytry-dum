import React, {useState} from 'react';
import './style.css';

import blindsClosed from './img/blinds-closed.svg';
import blindsOpen from './img/blinds-open.svg';


//chybi doresit tahani stavu z smartHomeData.js
const Blinds = ({state}) => {

  const [stavZaluzii, setStavZaluzii] = useState(state);

  const handleClick1 = () => {
    setStavZaluzii('open');
  }

  const handleClick2 = () => {
    setStavZaluzii('closed');
  }

    return (
			<div className="blinds">
				<div className="blinds__icon">
					{stavZaluzii === 'open' ? <img src={blindsOpen} /> : <img src={blindsClosed} />}
				</div>
				<div className="blinds__name">
					Žaluzie
				</div>
				<div className="blinds__controls">
        {stavZaluzii === 'open' ? <button className="button button--active" onClick={handleClick1}>Otevřeno</button> : <button className="button" onClick={handleClick1}>Otevřeno</button>}
				{stavZaluzii === 'closed' ? <button className="button button--active" onClick={handleClick2}>Zavřeno</button> : <button className="button" onClick={handleClick2}>Zavřeno</button>}
				</div>
			</div>
  );
};

export default Blinds;