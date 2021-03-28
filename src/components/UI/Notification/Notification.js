import {Component} from 'react';
import styles from './Notification.module.css';

class Notification extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const message = this.props.notificationMessage;
        if(!message) {
            return null;
        }
        return (
           <p className={styles.message}>{message}</p>
           )}
}

export default Notification;