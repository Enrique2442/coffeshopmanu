import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import LoginNav from './src/navigation/LoginNav';
import BottomTab from './src/navigation/BottomTab';
import fetchData from './api/components';

export default function App() {

  const API = 'services/admin/administrador.php';

  const verifyLogged = async () => {
    try {
      const data = await fetchData(API, 'getUser');
      if (data.session) {
        setLogueado(true)
        console.log(data.username);
      } else {
        setLogueado(false)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [logueado, setLogueado] = useState(false);

  useEffect(() => {
    verifyLogged();
  }, [])

  return (

    <NavigationContainer>
      {logueado ?
        <BottomTab
          logueado={logueado}
          setLogueado={setLogueado} />
        :
        <LoginNav
          logueado={logueado}
          setLogueado={setLogueado}
        />
      }
    </NavigationContainer>
  );
}