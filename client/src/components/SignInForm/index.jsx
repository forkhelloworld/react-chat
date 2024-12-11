import { useFormik } from "formik";
import CustomField from "../CustomField";

const SignInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    //className={styles.form}
    >
      <CustomField
        type="text"
        name="email"
        formik={formik}
        placeholder="Type your email"
      />
      <CustomField
        type="text"
        name="password"
        formik={formik}
        placeholder="Type your pass"
      />
      <button type="submit">Submit form</button>
    </form>
  );
};

export default SignInForm;
