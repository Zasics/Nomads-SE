import classNames from 'classnames';
import styles from './admin.module.scss';

export interface AdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ViewRequests = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>Al Salam Hospital Donation Requests</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.thead}>
                        <th>#</th>
                        <th>Donation Type</th>
                        <th>Donation Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Medical Supplies</td>
                        <td>20 bottle of sanitizers</td>
                        <td>Pending</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Medical Supplies</td>
                        <td>10 boxes of face masks</td>
                        <td>Approved</td>
                        <td>
                        -
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Blood</td>
                        <td>5 units</td>
                        <td>Rejected</td>
                        <td>
                        -
                        </td>
                    </tr>
                    </tbody>
                        
                        
                    </table>
                </div>
            </div>
            <button className={styles.button} ><a href="/vieworganizations">Back</a></button>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
