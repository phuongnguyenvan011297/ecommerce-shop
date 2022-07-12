import { useEffect } from "react";
import { useState } from "react";
import productApi from "../../../api/productApi";

function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        setProduct(result);
      } catch (error) {
        console.log(error);
      }

      setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}

export default useProductDetail;
