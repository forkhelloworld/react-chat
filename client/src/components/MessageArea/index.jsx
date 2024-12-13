import { useState } from "react";
import { connect } from "react-redux";
import styles from "./MessageArea.module.css";
import { addNewMessageRequest } from "../../actions/actionCreators";
import cx from "classnames";

const MessageArea = (props) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [drag, setDrag] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text || image) {
      const newMessageObject = {
        author: props.user._id,
        body: text,
        image: image,
        chat: props.currentChat?._id,
      };
      props.addNewMessageRequest(newMessageObject);
      setText("");
    }
  };

  const changeHandler = ({ target: { value } }) => {
    setText(value);
  };

  const imageReader = (source) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(source);
  };

  const imageHandler = (event) => {
    imageReader(event.target.files[0]);
  };

  const dragEnter = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrag(true);
  };

  const dragLeave = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrag(false);
  };

  const dragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const drop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("drop");
    setImage(event.dataTransfer.files[0]);
    setDrag(false);
  };

  const cn = cx(styles.container, {
    [styles["drag-active"]]: drag,
  });

  const viewDrag = () => "Drop picture to send it";

  const viewForm = () => (
    <>
      <textarea
        className={styles.textarea}
        value={text}
        onChange={changeHandler}
      />
      <article className={styles["flex-column"]}>
        <button type="submit">
          <img src="/assets/icons/plane-icon.jpg" className={styles.icon} />
        </button>
        <div className={styles["input-wrapper"]}>
          <input
            type="file"
            name="image"
            onChange={imageHandler}
            files={image}
            className={styles["input-file"]}
          />
          <img
            src="/assets/icons/876210.png"
            className={styles["input-icon"]}
          />
        </div>
      </article>
    </>
  );

  return (
    <form
      onDragEnter={dragEnter}
      onDrop={drop}
      onDragLeave={dragLeave}
      onDragOver={dragOver}
      onSubmit={submitHandler}
      className={cn}
    >
      {drag ? viewDrag() : viewForm()}
    </form>
  );
};

const mapState = ({ user, currentChat }) => ({ user, currentChat });

const mapDispatch = {
  addNewMessageRequest,
};

export default connect(mapState, mapDispatch)(MessageArea);
