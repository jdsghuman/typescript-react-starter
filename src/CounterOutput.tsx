import * as React from 'react';
interface ICounterOutputProps {
   counter: number;
 }
 const counterOutput = (props: ICounterOutputProps) => {
   return (
      <h1 style={{ textAlign: 'center' }}>{props.counter}</h1>
   )
 }

 export default counterOutput;