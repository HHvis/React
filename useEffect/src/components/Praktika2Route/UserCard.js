import React, {useState} from 'react'

function UserCard(props) {
    
    console.log(props);
    let {id, pic, name } = props;
  return (
    <div className="col-lg-4">
        <img className ="bd-placeholder-img rounded-circle" width="140" height="140" src={pic}></img>
        <h2>{name}</h2>
        <p><a className="btn btn-secondary" href="/UserCard/${name}">View details &raquo;</a></p>
      </div>
  )
}

export default UserCard