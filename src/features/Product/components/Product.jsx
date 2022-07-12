import { Box, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";

Product.propTypes = {};

const useStyles = makeStyles((theme) => ({
  pd: {
    padding: "8px",
  },
  img: {
    padding: "8px",
    minHeight: "215px",
  },
  span: {
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "4px",
  },
}));

function Product({ product }) {
  const history = useHistory();
  const classes = useStyles();
  const thumbnail = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };
  return (
    <Box className={classes.pd} onClick={handleClick}>
      <Box className={classes.img}>
        <img src={thumbnail} alt={product.name} width="100%" />
      </Box>

      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box className={classes.span} component="span">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? `  -${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
