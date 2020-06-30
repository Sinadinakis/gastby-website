import React from 'react';
import { useMatch } from '@reach/router';
// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import Story from '../views/Story';

const StoryPage = () => {
  const match = useMatch('/:lang/:id');

  return (
    <StateProvider>
      <Layout lang={match && match.lang}>
        <Story />
      </Layout>
    </StateProvider>
  );
};

export default StoryPage;
