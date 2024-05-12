import classNames from 'classnames';
import styles from './admin.module.scss';
import { Link } from 'react-router-dom';

export interface AdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ViewDonorList = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>View Donors List</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Donor Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                        <tr>
                            <td className={styles.td}>John Doe</td>
                            <td className={styles.td}>01148979966</td>
                            <td className={styles.td}>john@gmail.com</td>
                            <td className={styles.td}>shiekh zayed</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Mohamed Ashraf</td>
                            <td className={styles.td}>0124896697</td>
                            <td className={styles.td}>aashraf@outlook.com</td>
                            <td className={styles.td}>5th settlment</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Dina Salem</td>
                            <td className={styles.td}>010589654</td>
                            <td className={styles.td}>dinasalem@guc.com</td>
                            <td className={styles.td}>3rd settlement</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
