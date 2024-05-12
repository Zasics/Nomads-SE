import classNames from 'classnames';
import styles from './admin.module.scss';

export interface AdminProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ViewOrgDetails = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>Al Salam Hospital</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    
                        <tr>
                            <td className={styles.td}>Phone: 25251789</td>
                            <td className={styles.td}>Address: Maadi Corniche - Next to Cleopatra group</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Email: info@alsalam.com</td>
                            <td className={styles.td}>organization Type: Hospital</td>
                        </tr>
                        
                        
                    </table>
                </div>
            </div>
            <button className={styles.button} ><a href="/viewrequests">View Requests</a></button>
            <button className={styles.button} ><a href="/vieworganizations">Back</a></button>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
