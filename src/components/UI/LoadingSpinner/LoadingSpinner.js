import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={styles["lds-hourglass"]}></div>
    )
}

export default LoadingSpinner;