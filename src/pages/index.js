import React from 'react';
import { Match } from "@reach/router"

// Components
import Layout from '../components/layout';
import Routers from "../components/Routers"
import { StateProvider } from '../services/GlobalStore/GlobalStore';

const IndexPage = () => {

  return (
    <StateProvider>
      <Layout>
        <Match path="/app/:name">
          {({ match }) => <Routers name={match && match.name} />}
        </Match>
      </Layout>
    </StateProvider>
  );
};

export default IndexPage;
