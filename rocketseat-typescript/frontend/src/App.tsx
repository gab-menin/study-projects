import React, {useEffect, useState} from 'react';
import api from './services/api';

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const getUsers = async () => {
    try {
      const result = await api.get<IUser[]>("/users").then(response => {
        return response.data;
      })
      setUsers(result);
    } catch (error) {
      return error;
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      { users.map(user => <p>{user.name}</p>) }
    </div>
  );
}

export default App;
