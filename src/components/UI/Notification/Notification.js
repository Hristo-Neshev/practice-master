import styles from './Notification.module.css';

const Notification = (props) => {
    const message = props.notificationMessage;
    if (!message) {
        return null;
    }
    return (
        <p className={styles.message}>{message}</p>
    )

}

export default Notification;