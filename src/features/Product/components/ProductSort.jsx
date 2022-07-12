import { Tab, Tabs } from "@material-ui/core";

ProductSort.propTypes = {};

function ProductSort({ currentSort = "salePrice:ASC", onChange }) {
  const handleChange = (e, newValue) => {
    onChange(newValue);
  };

  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC" />

      <Tab label="Giá cao xuống thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
