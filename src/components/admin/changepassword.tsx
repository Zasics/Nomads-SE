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
export const ChangePassword = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>Change Password</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Old Password</td>
                            <td>New Password</td>
                            <td>Confirm New Password</td>
                        </tr>
                    </thead>
                        <tr>
                            <td className={styles.td}><input name="old" type="password" placeholder="Enter Old Password" className={styles.password}/></td>
                            <td className={styles.td}><input name="new" type="password" placeholder="Enter New Password" className={styles.password}/></td>
                            <td className={styles.td}><input name="new1" type="password" placeholder="Confirm New Password" className={styles.password}/></td>
                        </tr>
                        <tr>
                            <td className={styles.td}>&nbsp;</td>
                            <td className={styles.td}><button className={styles.submit}>Submit</button></td>
                            <td className={styles.td}></td>
                        </tr>
                    
                    </table>
                </div>
            </div>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
