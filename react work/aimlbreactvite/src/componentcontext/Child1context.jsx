import React, { useContext } from 'react';
import { StudentContext } from '../Appcontext';

const Child1context = () => {
  const student = useContext(StudentContext);
  return (
    <div>
      <h2>Child 1 Context</h2>
      <p>Name: {student.name}</p>
    </div>
  );
};

export default Child1context;