import React from 'react'
import Part from './part'

const Content = ({ parts }) => {

   return (
      <ul>
         {
            parts.map(x => <Part key={x.id} name={x.name} exercises={x.exercises} />)
         }
      </ul>
   )
}

export default Content