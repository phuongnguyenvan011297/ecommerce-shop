import { Box, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { useEffect } from "react";
import categoryApi from "../../../../api/categoryApi";

FilterByCategory.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer",
      },
    },
  },
}));

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const respone = await categoryApi.getAll();
        setCategoryList(respone);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    onChange(category.id);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
      <ul className={classes.menu}>
        {categoryList.map((category) => {
          return (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              <Typography variant="body2">{category.name}</Typography>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
