import { yupResolver } from "@hookform/resolvers/yup";
import {
  Avatar,
  Button,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PasswordField from "../../../../components/form-controls/PasswordField";

LoginForm.propTypes = {};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "relative",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    position: "absolute",
    top: theme.spacing(3),
    left: "0",
    right: "0",
  },
}));

function LoginForm(props) {
  const schema = yup
    .object()
    .shape({
      identifier: yup.string().required("Please enter todo"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      identifier: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    await onSubmit(values);
    console.log(values);
  };

  const { isSubmitting } = form.formState;

  const classes = useStyles();

  return (
    <div className={classes.paper}>
      {isSubmitting && <LinearProgress className={classes.progress} />}

      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          className={classes.submit}
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
