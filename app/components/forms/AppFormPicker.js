import React from "react";
import {useFormikContext} from "formik";
import AppPicker from "../AppPicker";
import AppErrorMessage from "./AppErrorMessage";
export default function AppFormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
  width,
}) {
  const {errors, touched, values, setFieldValue} = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        numberOfColumns={numberOfColumns}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
