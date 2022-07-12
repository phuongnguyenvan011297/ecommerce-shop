import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

FilterByPrice.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: "1px solid #ccc",
  },
  range: {
    display: "flex",
    marginBottom: "16px",
    "& > span": {
      marginLeft: "8px",
      marginRight: "8px",
    },
  },
}));

function FilterByPrice({ onChange }) {
  const classes = useStyles();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handleChange = (e) => {
    setValues((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onChange(values);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN KHOẢNG GIÁ</Typography>
      <Box className={classes.range}>
        <TextField
          name="salePrice_gte"
          value={values.salePrice_gte}
          onChange={handleChange}
        ></TextField>{" "}
        <span>-</span>{" "}
        <TextField
          name="salePrice_lte"
          value={values.salePrice_lte}
          onChange={handleChange}
        ></TextField>
      </Box>
      <Button variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setValues({ salePrice_gte: 0, salePrice_lte: 0 })}
      >
        Reset
      </Button>
    </Box>
  );
}

export default FilterByPrice;
