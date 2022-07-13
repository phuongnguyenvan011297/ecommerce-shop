import {
  Box,
  Grid,
  IconButton,
  Link,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import ConfirmDialog from "../../../components/dialog/ConfirmDialog";
import React, { useState } from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants/common";
import CartQuantityForm from "./CartQuantityForm";
import { useDispatch } from "react-redux";
import { removeFromCart, setQuantity } from "../cartSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #e0e0e0",
    borderRadius: "5px",
    padding: theme.spacing(1),
  },
  thumbnail: {
    width: "7%",
    maxWidth: 160,
    minWidth: 80,
  },
  productInfo: {
    position: "relative",
    top: 10,
    paddingLeft: 10,
    fontSize: 17,

    "& a": {
      color: theme.palette.text.primary,
      lineHeight: "20px",

      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
  price: {
    fontWeight: 500,
  },
  originPrice: {
    textDecoration: "line-through",
    opacity: 0.9,
    marginLeft: 10,
    fontSize: 12.5,
  },
  quantity: {},
  productTotal: {
    paddingLeft: "2rem",
  },
  remove: {},
}));

function CartItem({ item }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id, product, quantity } = item;
  const productTotal = product.salePrice * quantity;
  const [openRemoveConfirm, setOpenRemoveConfirm] = useState(false);

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : THUMBNAIL_PLACEHOLDER;
  const productDetailUrl = `/products/${id}`;

  const handleSetQuantitySubmit = ({ quantity }) => {
    const newQuantity = quantity;
    console.log("test", { id, quantity: newQuantity });
    dispatch(setQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveClick = () => {
    setOpenRemoveConfirm(true);
  };
  const handleRemoveOk = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <Grid container alignItems="center">
          <Grid item container xs={4} wrap="nowrap">
            <Link to={productDetailUrl} className={classes.thumbnail}>
              <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Link>

            <Box className={classes.productInfo}>
              <Link to={productDetailUrl}>{product.name}</Link>
            </Box>
          </Grid>

          <Grid
            item
            container
            xs={3}
            alignItems="center"
            component={Box}
            paddingX="15px"
          >
            <Typography variant="body2" className={classes.price}>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.salePrice)}
            </Typography>
            <Typography variant="body2" className={classes.originPrice}>
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.originalPrice)}
            </Typography>
          </Grid>

          <Grid item xs={2} className={classes.quantity}>
            <CartQuantityForm
              value={quantity}
              onSubmit={handleSetQuantitySubmit}
            />
          </Grid>
          <Grid item xs={2} className={classes.productTotal}>
            <Typography variant="body1" color="primary">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(productTotal)}
            </Typography>
          </Grid>
          <Grid item xs={1} className={classes.remove}>
            <IconButton onClick={handleRemoveClick}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <ConfirmDialog
        open={openRemoveConfirm}
        setOpen={setOpenRemoveConfirm}
        onConfirm={handleRemoveOk}
        title="⚠ Xoá sản phẩm"
      >
        Bạn có muốn xóa sản phẩm đang chọn?
      </ConfirmDialog>
    </div>
  );
}

export default CartItem;
