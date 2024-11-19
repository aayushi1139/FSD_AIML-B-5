import React from 'react'
import'./studentstyle.css'

// function Student(props)
function Student({data}) {
  return (
    <div className='icard'>
        {/* {JSON.stringify(data)} */}
        {/* <h2>Hi ,{props.name}
            <br></br>
            Your Branch is:{props.branch}
        </h2> */}
        {/* <table>
            <tbody>
                <tr><td colSpan={2}>{props.college}</td></tr>
                <tr><td colSpan={2}>{props.pic}</td></tr>
                <tr><td>Roll</td><td>{props.roll}</td></tr>
                <tr><td>Name</td><td>{props.name}</td></tr>
                <tr><td>Branch</td><td>{props.branch}</td></tr>
                <tr><td>Section</td><td>{props.section}</td></tr>
            </tbody>
        </table> */}
        <table>
            <tbody>
                <tr><td colSpan={2}>{data.college}</td></tr>
                <tr><td colSpan={2}><img src={data.pic} height={100} width={100} alt='student pic'/></td></tr>
                <tr><td>Roll</td><td>{data.roll}</td></tr>
                <tr><td>Name</td><td>{data.name}</td></tr>
                <tr><td>Branch</td><td>{data.branch}</td></tr>
                <tr><td>Section</td><td>{data.section}</td></tr>
            </tbody>
        </table>
    </div>
  )
}
// Student.defaultProps={
//     college:"AKG Engineering College"
// }
export default Student