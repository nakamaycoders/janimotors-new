import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./AllProduct.css";
import axios from "../../helpers/axios";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
import { Link } from "react-router-dom";
// import {useAlert} from 'react-alert';
import Button from "@mui/material/Button";
import MetaData from "../../components/layouts/MetaData";
// import EditIcon from '@mui/icons-material/Edit';
// import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
// import { MdModeEditOutline } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete";
// import SideBar from "../../components/Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const AllProducts = ({ history }) => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.product);
  console.log('All products',products)

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.products
  );

  // const deleteProductHandler = (id) => {
  //   dispatch(deleteProduct(id));
  // };
  const deleteProductHandler = (id) => {
    const deleteUrl = `https://janimotors-api.onrender.com/api/admin/product`;
    try {
      axios.delete(`${deleteUrl}/${id}`);
      dispatch(getAdminProduct());
    }
     catch (err) {
      console.log(err)
      alert(err);
    }
    // history.go(0);
  };

  useEffect(() => {
    if (error) {
      // alert.error(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
      // alert.error(deleteError);
      dispatch(clearErrors());
    }
    if (isDeleted) {
      // alert.success("Product Deleted Successfully");
      history.push("/product/all");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
    dispatch(getAdminProduct());
  }, [dispatch, error, deleteError, history, isDeleted]);
  const columns = [
    { field: "id", headerName: "Product ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 300,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      // type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "category",
      headerName: "Category",
      // type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "action",
      flex: 0.3,
      headerName: "Action",
      minWidth: 150,

      renderCell: (params) => {
        return (
          <>
            {/* <Link to={`/product/update/${params.getValue(params.id, "id")}`}>
              <MdModeEditOutline />
            </Link> */}

            <Button
              onClick={() =>
                deleteProductHandler(params.id)
              }
              >
              {/* <Link to={`/admin/product/${params.id}`}>delete</Link> */}
              <DeleteIcon />
            </Button>
              {console.log("ye wali>>>>>>>>>>>>>>>>>",params.id)}
          </>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        category: item.category,
        price: item.price,
        name: item.name,
      });
    });

  return (
    <>
      <MetaData title={`All Products - Admin Dashboard`} />
    <main className="content">
      <div className="dashboard">
        <div className="productListContainer">
          <h1 id="productListHeading">ALL PRODUCTS</h1>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick
              className="productListTable"
              autoHeight
              />
        </div>
      </div>
      </main>
    </>
  );
};

export default AllProducts;
