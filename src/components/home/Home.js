import React from "react";
import Layout from "../shared/Layout";

export default function Home(props) {
  return (
    <>
      <Layout
        metamaskConnected={props.metamaskConnected}
        clicked={props.clicked}
        hideGeneralSearch={props.hideGeneralSearch}
      >
        <h1>This is home</h1>
      </Layout>
    </>
  );
}
