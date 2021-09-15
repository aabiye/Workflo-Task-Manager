// import React, { useState } from 'react';
// import './popup.css';


// export const Popup = () => {

//   const [showPopUp, setPopUp] = useState(false)

// 	function handleClick(){
// 		setPopUp(true)
// 	}

// 	return(

// 		<div>
//       TEST POPUP
//       <div>
//       {
//         showPopUp ? <Popup /> : null
//       }
//       </div>
//       <div id="myModal" className="modal">
//         <div className="modal-content">
//           <span className="close">×</span>
//           <div>
//             <div className="form-row">
//               <div className="form-group col-md-6">
//                 <label htmlFor="taskname">Task Name</label>
//                 <input type="text" className="form-control" placeholder="Enter the task name" />
//               </div>
//               <div className="form-group col-md-6">
//                 <label htmlFor="example-date-input">Due Date:</label>
//                 <input className="form-control" type="date" defaultValue id="dueDate" />
//               </div>
//             </div>
//             <div className="form-row">
//               <div className="form-group col-md-6">
//                 <label htmlFor="exampleFormControlTextarea1">Task Description</label>
//                 <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} placeholder="Enter your task's description" defaultValue={""} />
//               </div>
//               <div className="custom-control custom-radio col-md-6">
//                 <label htmlFor="exampleFormControlSelect2">Priority</label>
//                 <br />
//                 <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
//                 <label className="custom-control-label" htmlFor="customControlValidation2">High</label>
//                 <br />
//                 <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
//                 <label className="custom-control-label" htmlFor="customControlValidation2">Medium</label>
//                 <br />
//                 <input type="radio" className="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
//                 <label className="custom-control-label" htmlFor="customControlValidation2">Low</label>
//               </div>
//             </div>
//             <br />
//             <div className="form-row">
//               <div className="form-check col-md-12" id="assigned">
//                 <label htmlFor="exampleFormControlSelect2">Assigned to</label>
//                 <select className="form-control">
//                   <option>Aden Abiye</option>
//                   <option>Ayman Zaki</option>
//                   <option>Ashley Umetsu</option>
//                   <option>Dan Sohval</option>
//                   <option>Linda Eng</option>
//                 </select>
//               </div>
//               <button type="submit" className="btn btn-primary" id="submitbutton">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
// 		</div>
// 	)
// }




