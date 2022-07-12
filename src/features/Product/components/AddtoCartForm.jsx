import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import QuantityField from "../../../components/form-controls/QuantityField";

function AddtoCartForm({ onSubmit = null }) {
  const schema = yup
    .object()
    .shape({
      quantity: yup
        .number()
        .min(1, "Please enter at least 1")
        .required("Please enter quantity"),
    })
    .required();

  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    await onSubmit(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ width: "250px" }}
        type="submit"
      >
        Mua
      </Button>
    </form>
  );
}

export default AddtoCartForm;
