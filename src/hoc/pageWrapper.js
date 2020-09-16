import React from 'react';
import { useMatch } from '@reach/router';

// Components
import Layout from './Layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';

const pageWrapper = WrapperComponent => {
  return props => {
    const match = useMatch('/:lang');

    return (
      <StateProvider>
        <Layout lang={match && match.lang}>
          <WrapperComponent lang={match && match.lang} {...props} />
        </Layout>
      </StateProvider>
    );
  };
};

export default pageWrapper;
