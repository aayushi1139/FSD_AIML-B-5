// import React from 'react';
// import Student from './Student';
// import logo from './img.jpg'; // Assuming this is a valid image in your project
// import ImageManipulation from './imageMnipulation';

import Registration from "../registration"





// function App() {
//   // return (
//   //   <div style={{ marginLeft: '400px' }}>
//   //     <Student
//   //       pic={<img src={logo} alt="Student Pic" height={100} width={150} />}
//   //       college="ABES Engineering College"
//   //       roll="331747"
//   //       name="Anshika Singhal"
//   //       branch="CSE AIML"
//   //       section="B"
//   //     />
//   //     <Student
//   //       pic={<img src={logo} alt="Student Pic" height={100} width={150} />}
//   //       college="ABES Engineering College"
//   //       roll="641747"
//   //       name="Aayushi Kumari"
//   //       branch="CSE AIML"
//   //       section="B"
//   //     />
//   //     <Student
//   //       pic={<img src={logo} alt="Student Pic" height={100} width={150} />}
//   //       college="ABES Engineering College"
//   //       roll="091747"
//   //       name="Shreya Yadav"
//   //       branch="CSE AIML"
//   //       section="B"
//   //     />
//   //   </div>
//   // );
// return(
//   <ImageManipulation/>
// )
// }

// export default App;
function App() {
const[sharedata,setShareData] =useState();
  return(
<Registration regData ={setShareData} />   
  )
}
export default App