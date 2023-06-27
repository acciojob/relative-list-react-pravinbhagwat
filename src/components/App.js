import React from 'react'

const App = () => {
  return (
    <div id="main">
        <ol id='relativeList'>
                {
                  list.map((name, indx)=>(
                    <li id={`relativeListItem${indx+1}`}>{name}</li>
                  ))
                }
               </ol>
    </div>
  )
}

export default App
