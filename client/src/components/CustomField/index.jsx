const CustomField = (props) => {
  const name = props.name;
  return (
    <input
      onChange={props.formik.handleChange}
      value={props.formik.values[name]}
      {...props}
    />
  );
};

export default CustomField;
