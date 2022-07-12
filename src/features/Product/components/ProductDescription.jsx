import { Paper } from "@material-ui/core";
import DOMPurify from "dompurify";

ProductDescription.propTypes = {};

function ProductDescription({ product }) {
  const safeDescription = DOMPurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: "15px" }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }}></div>
    </Paper>
  );
}

export default ProductDescription;
