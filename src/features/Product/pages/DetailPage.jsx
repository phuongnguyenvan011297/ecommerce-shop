import {
  Box,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { addToCart } from "../../Cart/cartSlice";
import AddtoCartForm from "../components/AddtoCartForm";
import ProductAdditional from "../components/ProductAdditional";
import ProductDescription from "../components/ProductDescription";
import ProductInfo from "../components/ProductInfo";
import ProductMenu from "../components/ProductMenu";
import ProductReviews from "../components/ProductReviews";
import ProductThumbnail from "../components/ProductThumbnail";
import useProductDetail from "../hooks/useProductDetail";

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: "400px",
    padding: theme.spacing(1.5),
    borderRight: "1px solid #ccc",
  },

  right: {
    flex: "1 1 0",
    padding: theme.spacing(1.5),
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    paddingBottom: "2rem",
  },
  loading: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
  },
}));

function DetailPage(props) {
  const classes = useStyles();
  const match = useRouteMatch();
  const { productId } = match.params;
  const { product, loading } = useProductDetail(productId);

  const dispatch = useDispatch();

  const handleAddToCartSubmit = (values) => {
    const action = addToCart({
      id: product.id,
      product: product,
      quantity: values.quantity,
    });
    dispatch(action);
  };

  if (loading) {
    return (
      <Box className={classes.loading}>
        <LinearProgress />
      </Box>
    );
  }
  return (
    <div>
      <Box className={classes.root}>
        <Container>
          <Paper elevation={0}>
            <Grid container>
              <Grid item className={classes.left}>
                <ProductThumbnail product={product} />
              </Grid>
              <Grid item className={classes.right}>
                <ProductInfo product={product} />
                <AddtoCartForm onSubmit={handleAddToCartSubmit} />
              </Grid>
            </Grid>
          </Paper>

          <ProductMenu />

          <Switch>
            <Route exact path={match.url}>
              <ProductDescription product={product} />
            </Route>
            <Route path={`${match.url}/additional`}>
              <ProductAdditional />
            </Route>
            <Route path={`${match.url}/reviews`}>
              <ProductReviews />
            </Route>
          </Switch>
        </Container>
      </Box>
    </div>
  );
}

export default DetailPage;
