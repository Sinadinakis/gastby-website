import React from 'react';
import { useMatch } from '@reach/router';
// Components
import Layout from '../components/layout';
import { StateProvider } from '../services/GlobalStore/GlobalStore';
import Contact from '../views/Contact';

const ContactPage = () => {
  const match = useMatch('/:lang/:id');
  return (
    <StateProvider>
      <Layout lang={match && match.lang}>
        <Contact />
      </Layout>
    </StateProvider>
  );
};

export default ContactPage;
