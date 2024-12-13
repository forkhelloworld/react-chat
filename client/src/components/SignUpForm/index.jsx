import { useFormik } from "formik";
import { useState } from "react";
import { format } from "date-fns";
import CustomField from "../CustomField";
import { signUpRequest } from "../../actions/actionCreators";
import styles from "../../pages/Home/Home.module.css";
import { connect } from "react-redux";

const SignUpForm = (props) => {
  const [fileImage, setFile] = useState();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: format(new Date(), "yyyy-MM-dd"),
    },
    onSubmit: (values) => {
      props.signUpRequest(values);
    },
  });

  const imageHandler = ({ target }) => {
    setFile(target.files[0]);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className={styles.form}
    >
      <CustomField
        type="text"
        name="firstName"
        formik={formik}
        placeholder="Type your firstName"
      />
      <CustomField
        type="text"
        name="lastName"
        formik={formik}
        placeholder="Type your lastName"
      />
      <CustomField
        type="email"
        name="email"
        formik={formik}
        placeholder="Type your email"
      />
      <CustomField
        type="password"
        name="password"
        formik={formik}
        placeholder="Type your pass"
      />
      <CustomField type="date" name="birthday" formik={formik} />
      <input
        type="file"
        name="imagePath"
        files={fileImage}
        onChange={imageHandler}
      />
      <button type="submit">Submit form</button>
    </form>
  );
};

const mapDispatchToProps = {
  signUpRequest,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
