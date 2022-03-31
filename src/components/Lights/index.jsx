import React from 'react';
import './style.css';

import Light from '../Light';

//pokud pro map funkci pouzivam pole naprimo z promenne lights vytvorene v tomhle indexu - viz nize, tak mi aplikace funguje, ale neumim do komponenty Lights dostat pole ze souboru smartHomeData.js :/ predpokladam, ze neco delam blbe v komponente Dasboard, kde se snazim rict, co ma byt v props lights, ale nevim co...
//
// const lights = [
//   {
//     name: 'Obývací pokoj',
//     state: 'off',
//   },
//   {
//     name: 'Ložnice',
//     state: 'on',
//   },
//   {
//     name: 'Kuchyně',
//     state: 'on',
//   },
//   {
//     name: 'Chodba',
//     state: 'off',
//   },
// ];

// const Lights = () => {
//     return (
//       <div className="lights">
//         {
//           lights.map(
//             light => (
//               <Light key={light.name} name={light.name} state={light.state} />
//             )
//           )
//         }
//         {/* <Light name="Obývák" state="on" />
//         <Light name="Kuchyň" state="off" /> */}
// 			</div>
//   );
// };

const Lights = (lights) => {
  return (
    <div className="lights">
      {
        lights.map(
          light => (
            <Light key={light.name} name={light.name} state={light.state} />
          )
        )
      }
    </div>
);
};

export default Lights;