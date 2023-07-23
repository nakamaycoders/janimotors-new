import React, { useEffect } from "react";
import Layout from "../../layout/layout/layout";
import { Banner } from "../../layout/Banner";
import { Search } from "../../layout/Search";
import { Cardss } from "../../layout/InventoryCards/Cardss";
import Cards2 from "../../layout/Card2/Cards2";
import MetaData from "../../layout/MetaData";
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
       <Helmet>
       <title>JANI MOTORS</title>
<meta name="JANI MOTORS" content="JANI MOTORS"/>
<meta name="description" content="We proudly serve our customers. We offer a large selection of pre-owned vehicles at affordable prices
      for everyone. We are committed to providing our customers with the
      best service, to get you a step closer to your vehicle that
      satisfies your needs. Our dealership is always ready to assist you
      in the car buying process!"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Layout>
        <Banner />
        <Search />
        <Cardss />
        <Cards2 />
      </Layout>
    </>
  );
}
export default Home;
