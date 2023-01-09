import { Box, Grid } from "@mui/material";
import ProductsList from "../components/Products/ProductsList";
import SideBar from "../components/Products/SideBar";
import React from "react";

const ProductsPage = () => {
  return (
    <Box p={5}>
      <div className="shop" style={{display: "flex"}}>
        <div><h3>SHOP</h3></div>
        <div><span>Shop your favourite Belgian chocolates! Discover our wide range of chocolate gifts and refine your search by type, <br /> price range or quantity to find your ideal gift.</span></div>
      </div>
      <Grid container spacing={3}>
        <SideBar />
        <ProductsList />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
