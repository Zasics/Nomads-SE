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
export const Admin = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>ADMIN DASHBOARD</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    <table className={styles.table}>
                        <tr>
                            <td className={styles.td}><Link to="/ViewOrgList">View Organization Lists</Link></td>
                            <td className={styles.td}><Link to="/ViewDonorList">View Donor Lists</Link></td>
                            <td className={styles.td}><Link to="/ViewOrgSubmissions">Review Organization Submissions</Link></td>
                        </tr>
                        <tr>
                        <td className={styles.td}><Link to="">Review Donor Submissions</Link></td>
                            <td className={styles.td}><Link to="/ViewOrgRequests">Manage Organization Requests</Link></td>
                            <td className={styles.td}>Manage Donor Requests</td>
                            
                        </tr>
                        <tr>
                        <td className={styles.td} ><Link to="/ChangePassword">Password Management</Link></td>
                            <td className={styles.td}><Link to="/ViewOrganizations">View Registered Organizations</Link></td>
                            <td className={styles.td}>View Organization Details</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <button className={styles.button}>Learn more</button>
            
        </div>
    );
};
