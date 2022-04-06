import React, {useState} from "react";
import UserCard from './UserCard';
import { v4 as uuidv4 } from 'uuid';


function UserCardsList() {
    let data = [{
        id: 1,
        pic: "https://avatars.githubusercontent.com/u/1?v=4",
        name: "mojombo",
        url: "https://api.github.com/users/mojombo"
      }, {
        id: 2,
        pic: "https://avatars.githubusercontent.com/u/2?v=4",
        name: "defunkt",
        url: "https://api.github.com/users/defunkt"
      }, {
        id: 3,
        pic: "https://avatars.githubusercontent.com/u/3?v=4",
        name: "pjhyett",
        url: "https://api.github.com/users/pjhyett"
      }, {
        id: 2,
        pic: "https://avatars.githubusercontent.com/u/4?v=4",
        name: "wycats",
        url: "https://api.github.com/users/wycats"
      }]


    
      const listas = data.map((item) => {
        return( 
        <UserCard 
        key={uuidv4()}
        id={item.id} 
        pic={item.pic} 
        name={item.name}/>
        );
    });
    return (
        <div className="row">
            {listas}
        </div>
    )
}
export default UserCardsList