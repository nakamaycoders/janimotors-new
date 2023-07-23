import React from "react";
import Layout from "../../layout/layout/layout";
import Product from './Product';
const ProductList = (props) => {
  return (
    <>
        <Layout>
          <Product {...props}/>
      </Layout>
  </>
  );
};

export default ProductList;
