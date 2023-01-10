import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct } = useProducts();

  useEffect(() => {
    getOneProduct(id);
  }, []);


  return (
    <Paper sx={{ m: 1 }} elevation={24}>
      <Grid  container spacing={4} className="detail">
        <Grid item xs={6}>
          <img  src={oneProduct.picture} alt="" />
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{fontWeight: "bolder"}} variant="h3">{oneProduct.name}</Typography>
          <Typography sx={{color: "black",  textDecoration: "underline"}} variant="subtitle1">{oneProduct.type}</Typography>
          <Typography sx={{color: "orange", fontWeight: "bolder", fontSize: "40px"}} variant="caption"> {oneProduct.price}$ </Typography>
          <br />
          <Typography sx={{fontSize: "20px"}} variant="caption"> {oneProduct.description} </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductDetails;
