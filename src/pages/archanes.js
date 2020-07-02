import React from 'react';
import { useMatch } from '@reach/router';
// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import Location from '../views/Location';

const LocationPage = () => {
  const match = useMatch('/:lang/:id');

  return (
    <StateProvider>
      <Layout lang={match && match.lang}>
        <Location />
      </Layout>
    </StateProvider>
  );
};

export default LocationPage;
