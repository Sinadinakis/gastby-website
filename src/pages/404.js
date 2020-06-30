import React from 'react';
import { useMatch } from '@reach/router';

// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import NotFound from '../views/NotFound';

const NotFoundPage = () => {
  const match = useMatch('/:lang/:id');

  return (
    <StateProvider>
      <Layout lang={match && match.lang}>
        <NotFound />
      </Layout>
    </StateProvider>
  );
};

export default NotFoundPage;
