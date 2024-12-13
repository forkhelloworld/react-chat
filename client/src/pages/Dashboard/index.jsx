import { useState } from "react";
import DialogList from "../../components/DialogList";
import Chat from "../../components/Chat";
import MessageArea from "../../components/MessageArea";
import ModalWindow from "../../components/ModalWindow";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  const [modalOpen, setModal] = useState(false);

  const modalHandler = () => {
    setModal(true);
  };

  return (
    <main className={styles["messenger-wrapper"]}>
      <DialogList openModal={setModal} />
      <section className={styles.container}>
        <Chat />
        <MessageArea />
      </section>
      {modalOpen && <ModalWindow close={setModal} />}
    </main>
  );
};

export default Dashboard;
