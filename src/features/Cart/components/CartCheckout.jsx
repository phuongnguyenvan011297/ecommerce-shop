import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import { cartTotalSelector } from "../selectors";
// import { makeStyles } from '@material-ui/core';

// usestyle
const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  submit: {
    marginTop: theme.spacing(3),
  },
}));

function CartCheckout() {
  const classes = useStyles();
  const cartTotal = useSelector(cartTotalSelector);

  return (
    <Box className={classes.root}>
      <Paper>
        <Box className={classes.list}>
          <Typography variant="body2">TỔNG TIỀN</Typography>
          <Typography variant="h5">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(cartTotal)}
          </Typography>
        </Box>
      </Paper>

      <Button
        className={classes.submit}
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        size="large"
      >
        THANH TOÁN
      </Button>
    </Box>
  );
}

export default CartCheckout;
