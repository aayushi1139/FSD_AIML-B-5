import React, { useContext } from 'react';
import { StudentContext } from '../Appcontext';

const Child3context = () => {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>Child 3 Context</h2>
      <p>College: {student.college}</p>
    </div>
  );
};

export default Child3context;