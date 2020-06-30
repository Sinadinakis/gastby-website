import React from 'react';
import { useMatch } from '@reach/router';
// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import Wines from '../views/Wines';

const WinesPage = () => {
  const match = useMatch('/:lang/:id');

  return (
    <StateProvider>
      <Layout lang={match && match.lang}>
        <Wines />
      </Layout>
    </StateProvider>
  );
};

export default WinesPage;
