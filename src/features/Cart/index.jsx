import { useSelector } from "react-redux";
import { cartTotalSelector } from "./selectors";
CartFeature.propTypes = {};

function CartFeature(props) {
  const cartTotal = useSelector(cartTotalSelector);
  console.log(cartTotal);

  return <div>CartFeature</div>;
}

export default CartFeature;
