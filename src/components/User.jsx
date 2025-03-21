import React from 'react' 
const User = (props) => { 
  return ( 
    <div> 
      <h3 style={{color:'black'}}>Welcome {props.uname} Logged in As {props.category}</h3> 
    </div> 
  ) 
} 
 
export default User
