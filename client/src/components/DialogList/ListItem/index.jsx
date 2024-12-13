import cx from "classnames";
import "animate.css";
import styles from "../DialogList.module.css";
import { getCurrentChatRequest } from "../../../actions/actionCreators";
import { connect } from "react-redux";

const IMAGE_PLACEHOLDER = "/assets/icons/image-placeholder.avif";

const ListItem = (props) => {
  const {
    chat: { members, messages, imagePath, name, _id },
    currentChat,
  } = props;

  const cn = cx(
    styles["list-item"],
    {
      [styles["current-chat-item"]]: currentChat?._id === _id,
    },
    "animate__animated",
    "animate__slideInRight",
  );

  const clickHandler = () => {
    props.getCurrentChatRequest(_id);
  };

  return (
    <article className={cn} onClick={clickHandler}>
      <img src={imagePath ? imagePath : IMAGE_PLACEHOLDER} />
      <h3>{name}</h3>
    </article>
  );
};

const mapStateToProps = (currenrtChat) => ({ currenrtChat });

const mapDispatchToProps = {
  getCurrentChatRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
