import React from 'react'
import Name from './Name';

const ConditionalRender = () => {

  const userData = [
      {
        name: "vikraam",
      },
      {
        name: "Dheepa",
      },
    ];

    const userList = userData.map((data)=><Name name={data.name}/>)
  
  return (
    <>
    {userList}
    </>
  )
}

export default ConditionalRender
