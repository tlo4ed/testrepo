import logo from './logo.svg';
import './App.css';

import { Amplify, API, Auth } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './config';
import { useEffect, useState, } from 'react';
import React from 'react';
import Topbar from './components/Topbar.jsx';
import DriverLicencesList from './components/DriverLicencesList.jsx';

Amplify.configure(config);



const App = ({ signOut, user }) => {
  const [data, setData] = useState();

  useEffect(() => {

    const postData = async () => {
      const apiName = 'baseApi';
      const path = '/users';
    
      const myInit = {
        body: {
          address,
          name,
          userId: licenseNumber
        }
      };
    
      const authHeaders = {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`
        }
      };
    
      try {
        const response = await API.post(apiName, path, authHeaders, myInit);
        console.log('API response:', response);
      } catch (error) {
        console.log('Error:', error.response?.data);
      }

    };



    const fetchData = async () => {
      const apiName = 'baseApi';
      const path = `/users/${user.attributes?.email}`;

      const authHeaders = {
        headers: {
          Authorization: `Bearer ${(await Auth.currentSession())
            .getIdToken()
            .getJwtToken()}`
        }
      };
      
      try {
        const response = await API.get(apiName, path, authHeaders);
        setData(response);
      } catch (error) {
        console.log(error.response?.data)
      }

    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Topbar 
        email={user.attributes?.email}
        signout={signOut}
      ></Topbar>
      <DriverLicencesList data={data}></DriverLicencesList>
    </React.Fragment>

  );
}

export default withAuthenticator(App);



