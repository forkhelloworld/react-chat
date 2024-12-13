import { useFormik } from "formik";
import CustomField from "../CustomField";
import { signInRequest } from "../../actions/actionCreators";
import styles from "../../pages/Home/Home.module.css";
import { connect } from "react-redux";

const SignInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      props.signInRequest(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className={styles.form}
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

const mapDispatchToProps = {
  signInRequest,
};
export default connect(null, mapDispatchToProps)(SignInForm);
