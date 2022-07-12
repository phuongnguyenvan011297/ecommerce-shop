import { Box, Link, makeStyles } from "@material-ui/core";
import { NavLink, useRouteMatch } from "react-router-dom";

ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,
    listStyleType: "none",

    "& > li": {
      padding: theme.spacing(2),
    },
    "& > li >a": {
      color: "#000",
    },

    "& > li >a.active": {
      color: theme.palette.primary.main,
      textDecoration: "underline",
      fontWeight: "bold",
    },
  },
}));

function ProductMenu(props) {
  const classes = useStyles();

  const match = useRouteMatch();

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={match.url} exact>
          Description
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${match.url}/additional`} exact>
          Additional Infomation
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${match.url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
