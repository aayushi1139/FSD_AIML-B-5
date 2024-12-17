import React, { createContext } from 'react';
import Child1context from './componentcontext/child1context';
import Child2context from './componentcontext/Child2context';
import Child3context from './componentcontext/Child3context';

// Step 1: Create Context
export const StudentContext = createContext();

const Appcontext = () => {
  const studentData = {
    name: 'Aayushi Kumari',
    branch: 'AIML',
    section: 'B',
    college: 'ABES',
  };

  return (
    // Step 2: Provide Context
    <StudentContext.Provider value={studentData}>
      <div>
        <h1>Student Context Example</h1>
        <Child1context />
        <Child2context />
        <Child3context />
      </div>
    </StudentContext.Provider>
  );
};

export default Appcontext;