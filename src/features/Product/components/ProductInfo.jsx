import { Box, makeStyles, Typography } from "@material-ui/core";

ProductInfo.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    borderBottom: "1px solid #eee",
  },
  description: {
    margin: theme.spacing(2, 0),
  },
  priceBox: {
    backgroundColor: theme.palette.grey[400],
    padding: theme.spacing(2),
  },
  salePrice: {
    marginRight: theme.spacing(3),
    fontSize: theme.typography.h4.fontSize,
    fontWeight: "bold",
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: "line-through",
  },
}));

function ProductInfo({ product }) {
  const classes = useStyles();
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } =
    product;

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>

      <Box className={classes.priceBox}>
        <Box className={classes.salePrice} component="span">
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(salePrice)}
        </Box>
        {promotionPercent > 0 ? (
          <>
            <Box className={classes.originalPrice} component="span">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(originalPrice)}
            </Box>
            <Box className={classes.promotionPercent} component="span">
              -{promotionPercent}%
            </Box>
          </>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
}

export default ProductInfo;
