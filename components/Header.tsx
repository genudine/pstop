import styles from "../styles/header.module.css";
import { Health, Status, WebsocketStatus } from "./types";

const StatusItem = ({
  status,
  children,
}: {
  status: WebsocketStatus | Status;
  children: React.ReactNode;
}) => {
  switch (status) {
    case WebsocketStatus.Primary:
    case Status.Up:
      return (
        <span className={styles.statusItem}>
          {children} [<span className={styles.good}>ok</span>]
        </span>
      );
    case WebsocketStatus.Backup:
      return (
        <span className={styles.statusItem}>
          {children} [<span className={styles.warn}>degraded</span>]
        </span>
      );
    case WebsocketStatus.Down:
    case Status.Down:
      return (
        <span className={styles.statusItem}>
          {children} [<span className={styles.bad}>offline</span>]
        </span>
      );
  }
};

export default function Header({
  health,
  failed,
  waiting,
}: {
  health: Health;
  failed: boolean;
  waiting: boolean;
}) {
  return (
    <div className={styles.invertedBar}>
      pstop | saerro.harasse.rs status:{" "}
      {failed ? (
        <span className={styles.bad}>failed!</span>
      ) : waiting ? (
        <>fetching...</>
      ) : (
        <>
          <StatusItem status={health.redis}>redis</StatusItem> |{" "}
          <StatusItem status={health.pc}>pc</StatusItem> |{" "}
          <StatusItem status={health.ps4us}>ps4us</StatusItem> |{" "}
          <StatusItem status={health.ps4eu}>ps4eu</StatusItem>
        </>
      )}
    </div>
  );
}
