import React, {useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import UsersItem from "./UsersItem";

const Users = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
    console.log('UseEffectRunUsers')
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      return setUsers(response.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      {users.map(user => <UsersItem key={user.id} user={user}/>)}
    </div>
  );
};

export default Users;