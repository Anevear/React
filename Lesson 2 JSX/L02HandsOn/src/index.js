import React from "react";
import ReactDOM from "react-dom";

const stateInfo=(one, two, three, state1, state1P, state1C, state2, state2P, state2C, state3, state3P, state3C, state4, state4P, state4C) => {
         return (
                  <div>
                           <table>
                                    <tr>
                                             <th>{one}</th>
                                             <th>{two}</th>
                                             <th>{three}</th>
                                    </tr>
                                    <tr> 
                                             <th>{state1}</th>
                                             <td>{state1P}</td>
                                             <td>{state1C}</td>
                                    </tr>
                                    <tr>
                                             <th>{state2}</th>
                                             <td>{state2P} million</td>
                                             <td>{state2C}</td>
                                    </tr>
                                    <tr>
                                             <th>{state3}</th>
                                             <td>{state3P} million</td>
                                             <td>{state3C}</td>
                                    </tr>
                                    <tr>
                                             <th>{state4}</th>
                                             <td>{state4P} million</td>
                                             <td>{state4C}</td>
                                    </tr>
                           </table>
                  </div>
         );
};


ReactDOM.render(stateInfo('State', 'POP', 'Capital', 'Idaho','  ','Boise','Tennessee', 6.651, 'Nashville', 'Maine', 1.331, 'Agusta', 'Wisconsin',5.779, 'Madison'),
         document.getElementById('root')
)