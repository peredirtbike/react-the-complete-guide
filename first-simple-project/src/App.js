import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import Card from './components/UI/Card';
import ListUser from './components/Users/ListUser';


function App() {
  const [users, setUsers] = useState([
    { id: 'fadsg', name: 'Pere', age: 31 },
    { id: 'faswa', name: 'Joan', age: 26 }
  ]);

  const addUserHandler = (enteredInfo) => {
    console.log(enteredInfo)
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(enteredInfo);
      return updatedUsers;
    });
  };

  return (
    <div>
      <Card>
        <AddUser onAddUser={addUserHandler} />
      </Card>

      <Card>
        <ListUser users={users}/>
      </Card>
      
    </div>
  );
}

export default App;
