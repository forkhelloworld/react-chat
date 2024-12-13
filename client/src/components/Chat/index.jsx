import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import styles from "./Chat.module.css";
import ChatItem from "./ChatItem";

const Chat = (props) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  });

  return (
    <section className={styles.chat}>
      {props.currentChat?.messages?.map((mes) => {
        <ChatItem message={mes} key={mes._id} />;
      })}
      <div ref={scrollRef}></div>
    </section>
  );
};

const mapStateToProps = (currentChat) => ({ currentChat });

export default connect(mapStateToProps)(Chat);
