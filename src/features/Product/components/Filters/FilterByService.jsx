import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";

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

function FilterByService({ filters, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    onChange({
      [name]: checked,
    });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">CHỌN DỊCH VỤ</Typography>
      <ul>
        {["isPromotion", "isFreeShip"].map((service) => {
          return (
            <li key={service}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service])}
                    color="primary"
                    name={service}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                    onChange={handleChange}
                  />
                }
                label={service}
              />
            </li>
          );
        })}
      </ul>
    </Box>
  );
}

export default FilterByService;
