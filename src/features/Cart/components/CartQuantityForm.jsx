import React from "react";
import { useForm } from "react-hook-form";
import QuantityField from "../../../components/form-controls/QuantityField";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function CartQuantityForm({ onSubmit = null, value: initialQuantity }) {
  console.log(initialQuantity);
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Minimum value is 1")
      .integer("Quantity must be a valid number")
      .typeError("Please enter a number"),
  });

  const form = useForm({
    mode: "onTouched",
    defaultValues: { quantity: initialQuantity },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (values) => {
    console.log("test2", values);
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const submitCallback = form.handleSubmit(handleFormSubmit);

  return (
    <form onSubmit={submitCallback} onBlur={submitCallback}>
      <QuantityField
        name="quantity"
        form={form}
        submitCallback={submitCallback}
      />
    </form>
  );
}

export default CartQuantityForm;
