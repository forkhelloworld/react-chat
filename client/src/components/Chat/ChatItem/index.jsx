import cx from "classnames";
import styles from "../Chat.module.css";
import { connect } from "react-redux";
import CONSTANTS from "../../../constants";

const ChatItem = (props) => {
  const {
    message: { autor, body, imagePath },
  } = props;
  const cn = cx(styles["message-container"], {
    [styles["current-user-message"]]: autor._id === props.user?._id,
  });

  return (
    <div className={cn}>
      <p className={styles["message-author"]}>
        {autor.firstName} {autor.lastName}
      </p>
      <p>{body}</p>

      {imagePath && (
        <img
          src={`${CONSTANTS.API_BASE}/${imagePath}`}
          className={styles["message-image"]}
        />
      )}
    </div>
  );
};

const mapStateToProps = (user) => ({ user });

export default connect(mapStateToProps)(ChatItem);
