import { useState } from "react";
import { connect } from "react-redux";
import styles from "./ModalWindow.module.css";
import { createNewChatRequest } from "../../actions/actionCreators";

const ModalWindow = (props) => {
  const [nameInput, setInput] = useState("");

  const changeHandler = ({ target: { value } }) => {
    setInput(value);
  };

  const closeModal = () => {
    props.close(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.createNewChatRequest({
      name: nameInput,
    });
    closeModal();
  };

  return (
    <section className={styles["back-wrapper"]}>
      <article className={styles["modal-window"]}>
        <form onSubmit={submitHandler}>
          <h3>Create New Chat</h3>
          <span className={styles["close-modal"]} onClick={closeModal}>
            X
          </span>
          <input
            type="text"
            name="name"
            value={nameInput}
            onChange={changeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </article>
    </section>
  );
};

const mapDispatch = {
  createNewChatRequest,
};

export default connect(null, mapDispatch)(ModalWindow);
