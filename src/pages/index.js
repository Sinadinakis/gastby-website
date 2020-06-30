import React from 'react';
import { useMatch } from '@reach/router';
// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import Home from '../views/Home';

const IndexPage = () => {
  const match = useMatch('/:id');
  return (
    <StateProvider>
      <Layout lang={match && match.id}>
        <Home lang={match && match.id} />
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;
