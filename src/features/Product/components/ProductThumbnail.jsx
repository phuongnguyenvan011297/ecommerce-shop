import { Box } from "@material-ui/core";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";

ProductThumbnail.propTypes = {};

function ProductThumbnail({ product }) {
  const thumbnail = product?.thumbnail
    ? `${STATIC_HOST}${product.thumbnail.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;

  return (
    <div>
      <Box>
        <img src={thumbnail} alt="test" width="100%" />
      </Box>
    </div>
  );
}

export default ProductThumbnail;
