import React, { useContext } from 'react';
import { StudentContext } from '../Appcontext';

const Child2context = () => {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>Child 2 Context</h2>
      <p>Branch: {student.branch}</p>
      <p>Section: {student.section}</p>
    </div>
  );
};

export default Child2context;