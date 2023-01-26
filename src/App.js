import UsersList from "./components/UsersList";
import axios from 'axios';
import React, {createContext, useEffect, useState} from "react";
import UserDetails from "./components/UserDetails";

export const AppContext = createContext({});

function App() {
    const [users, setUsers] = useState([])
    const [activeUser, setActiveUser] = useState(null)
    useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
        .then(res => {
          setUsers(res.data);
        })
  }, [])

  return (
      <AppContext.Provider value={{setActiveUser}}>
          <div className="flex justify-around">
              <UsersList users={users}/>
              {activeUser && <UserDetails info={activeUser}/>}
          </div>
      </AppContext.Provider>

  );
}

export default App;
