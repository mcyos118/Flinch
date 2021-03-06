// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Faq from "../../components/Faq/Faq";

const Index = () => {
  return (
    <Fragment>
      <Head>
        <title>Flinch | Faq</title>
        <link
          rel="icon"
          href="https://ammedodi.sirv.com/Images/neonjesus.png"
        />
      </Head>
      <Faq />
    </Fragment>
  );
};

export default Index;
