import React from 'react';
import Content from './content';
import Header from './header';
import Total from './total';

const Course = ({ courses }) => {

   const { parts, name } = courses;

   const total = parts.map(x => x.exercises).reduce((a, b) => a + b)

   return (
      <div>
         <Header name={name} />
         <Content parts={parts} />
         <Total total={total} />
      </div>
   )
}

export default Course