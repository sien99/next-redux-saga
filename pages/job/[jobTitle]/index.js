import { useRouter } from 'next/router';
import styles from '../../../styles/Job.module.css';

const article = () => {
    const router = useRouter();
    const { jobTitle } = router.query;

    return (
        <div className={styles.container}>
        <p>This page shows job information of job entitled:</p>
        <p>{jobTitle}</p>
        </div>
    )
}

export default article;