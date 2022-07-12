import { Box } from "@material-ui/core";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilter.propTypes = {};

function ProductFilter({ filters, onChange }) {
  const handleCategoryChange = (newCategoryId) => {
    const newFilters = {
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };

  const handleChange = (values) => {
    onChange(values);
    console.log(values);
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilter;
