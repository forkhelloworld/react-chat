import { useEffect } from "react";
import ListItem from "./ListItem";
import styles from "./DialogList.module.css";
import { getUserChatsList } from "../../actions/actionCreators";
import { connect } from "react-redux";

const DialogList = (props) => {
  useEffect(() => {
    props.getUserChatsList();
  }, []);

  const { chatList } = props;

  return (
    <section className={styles.list}>
      <header className={styles["list-header"]}>Chat List</header>
      {chatList &&
        chatList.map((chat) => <ListItem chat={chat} key={chat._id} />)}
      <footer onClick={props.openModal} className={styles.foot}>
        + Add new chat
      </footer>
    </section>
  );
};

const mapStateToProps = (chatList) => chatList;

const mapDispatchToProps = {
  getUserChatsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogList);
