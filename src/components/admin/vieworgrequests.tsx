import classNames from 'classnames';
import styles from './admin.module.scss';

export interface AdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ViewOrgRequests = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>Health Provider Pending Rquests</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                    <tr className={styles.thead}>
                        <th>#</th>
                        <th>Organization</th>
                        <th>Donation Type</th>
                        <th>Donation Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={styles.tr}>
                        <td>1</td>
                        <td>Al Salam Hospital</td>
                        <td>Medical Supplies</td>
                        <td>20 bottle of sanitizers</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>2</td>
                        <td>57357 Hospital</td>
                        <td>Medical Supplies</td>
                        <td>10 boxes of face masks</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>57357 Hospital</td>
                        <td>Blood Type A</td>
                        <td>5 units</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>57357 Hospital</td>
                        <td>Blood Type O</td>
                        <td>8 units</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dar Al Fouad</td>
                        <td>Ventilator</td>
                        <td>3 units</td>
                        <td>
                        <button className={styles.buttonaccept} >Accept</button>
                        <button className={styles.buttonreject} >Reject</button>
                        </td>
                    </tr>
                    </tbody>
                        
                        
                    </table>
                </div>
            </div>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
