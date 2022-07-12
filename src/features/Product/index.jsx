import { Box, makeStyles } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

ProductFeature.propTypes = {};

const useStyles = makeStyles((theme) => ({
  pdt: {
    paddingTop: "32px",
  },
}));

function ProductFeature(props) {
  const match = useRouteMatch();
  const classes = useStyles();

  return (
    <Box className={classes.pdt}>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        <Route path={`${match.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
