import * as yup from "yup";

export  const ProductsSchema = yup.object().shape({
  title: yup.string().trim().required("This field is required").min(3, "Simvol sayı 3-den çox olmalıdır." ),
  category: yup.string().trim().required("This field is required").min(3, "Simvol sayı 3-den çox olmalıdır." ),
  price: yup.string()
  .required('This field is required').matches(/^[0-9]+$/, "Please enter Number"),
  count: yup.string()
  .required('This field is required').matches(/^[0-9]+$/, "Please enter Number"),
  rate: yup.string()
  .required('This field is required').matches(/^[0-9]+$/, "Please enter Number"),
});