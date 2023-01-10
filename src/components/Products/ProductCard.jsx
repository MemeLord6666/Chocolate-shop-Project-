import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "../../contexts/authContext";
import { ADMIN } from "../../helpers/consts";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useProducts } from "../../contexts/productsContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from '@mui/icons-material/Favorite';
// import "./src/index.css";

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  const { addProductToCart, checkProductInCart } = useCart();

 
  const { deleteProduct } = useProducts();
  const {
    user: { email },
  } = useAuth();


  return (
    <Card  sx={{ maxHeight: 550, maxWidth: 280 }}>
      <CardContent className="imgC">
      <CardMedia className="imgCard"
        sx={{ height: 350, width: 250, cursor: "pointer" }}
        image={item.picture}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />
      <CardMedia className="imgCard2"
        sx={{ height: 350, width: 250, cursor: "pointer" }}
        image={item.picture2}
        title="green iguana"
        onClick={() => navigate(`/products/${item.id}`)}
      />

      </CardContent>
      <CardContent className="hhh" >
      <Typography sx={{color: "#503223", fontWeight: "bold"}} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <CardActions className="hhhh ll" sx={{ marginTop: "-1px"}}>
        {email == ADMIN ? (
          <>
            <Button sx={{color: "red", fontWeight: "bold"}} onClick={() => deleteProduct(item.id)}>Delete</Button>
            <Button sx={{color: "blue", fontWeight: "bold"}} onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
          </>
        ) : (
          <IconButton className="dd" onClick={() => addProductToCart(item)}>
            {checkProductInCart(item.id) ? (
              <>
                <ShoppingCartIcon
                  sx={{
                    color: "orange",
                  }}
                />
              </>
            ) : (
              <>
                <AddShoppingCartIcon
                sx={{
                  color: "#503223"
                }} />
              </>
            )}
          </IconButton>
        )}
         <FavoriteIcon className="icc"/>
         

      </CardActions>
        <Typography className="hhhh ll ls"
          sx={{ color: "orange", fontWeight: "500" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {item.price}$
        </Typography>
      </CardContent>
     
    </Card>
  );
}
