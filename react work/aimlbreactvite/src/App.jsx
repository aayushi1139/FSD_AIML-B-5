// import React from 'react';
// import Student from './Student';


// // Define the App component
// function App() {
//   // let a = 20;
//   // let mystyle = {
//   //   backgroundColor: 'cyan',
//   //   color: 'red',
//   //   border: '10px solid black',
//   //   height:'100px',

//   };

  
//   return (
//     // <div style={mystyle}>
//     //   <h2>ABES EC</h2>
//     //   {/* <div style={(mystyle)}>(a)</div> */}
//       <div>
//         <Student name="Aayushi Kumari" branch="cse" />
//         </div>
//   );


// export default App;
import React from 'react'
import Student from './Student'
import logo from './student.png'

function App() {
  const studentdata={
    college:"ABES Engineering college",
    pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
     roll:"24865",
      name:"Aayushi",
       branch:"CSE AIML",
        section:"B"
  }
  return (
    // <div><Student name="Aayushi" branch="CSE AIML"/>
    <div style={{marginLeft:"500px"}}>
      <Student data={studentdata}/>

      {/* <Student 
    pic={<img src={logo} height={200} width={193}/>}
    college="ABES Engineering college" roll="24865" name="Aayushi" branch="CSE AIML" section="B"/>
    <Student 
    pic={<img src={logo} height={200} width={193}/>}
   roll="12348" name="Shreya" branch="CSE AIML" section="B"/>
    <Student 
    pic={<img src={logo} height={200} width={193}/>}
    college="ABES Engineering college" roll="28957" name="Anshika" branch="CSE AIML" section="B"/> */}
    </div>
  )
}

export default App
