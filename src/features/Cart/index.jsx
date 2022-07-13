import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import CartCheckout from "./components/CartCheckout";
import CartList from "./components/CartList";
import { cartItemCountSelector } from "./selectors";
CartFeature.propTypes = {};

function CartFeature(props) {
  const cartItemCount = useSelector(cartItemCountSelector);
  const cartItems = useSelector((state) => state.cart.cartItem);
  console.log(cartItemCount);

  return (
    <Box>
      <Container>
        <Typography component="h6">
          GIỎ HÀNG
          <Box component="span"> ({cartItemCount} sản phẩm)</Box>
        </Typography>
        <Grid container spacing={2}>
          <Grid item md={9}>
            <CartList data={cartItems} />
          </Grid>

          <Grid item md={3}>
            <CartCheckout />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
