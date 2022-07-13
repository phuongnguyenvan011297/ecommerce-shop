import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CartItem from "./CartItem";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    gap: 8,
  },
}));

function CartList({ data }) {
  const classes = useStyles();
  console.log(data);
  return (
    <Box>
      <Grid container className={classes.list}>
        {data.map((item) => (
          <Grid item key={item.id} xs={12}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CartList;
