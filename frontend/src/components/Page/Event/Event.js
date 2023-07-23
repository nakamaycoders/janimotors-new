import React from "react";
import Layout from "../../layout/layout/layout";
import MetaData from "../../layout/MetaData";

export default function Event() {
  return (
    <>
      <MetaData title={`Events -- JANI MOTORS`} />
      <Layout>
        <div>
          <h1 className="text-center pt-5" style={{ color: "red" }}>
            Coming Soon
          </h1>
        </div>
      </Layout>
    </>
  );
}
