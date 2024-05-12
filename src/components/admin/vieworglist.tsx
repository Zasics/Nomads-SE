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
export const ViewOrgList = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>View Organizations List</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Organization Name</td>
                            <td>Phone</td>
                            <td>Email</td>
                            <td>Address</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                        <tr>
                            <td className={styles.td}>Dar Al Fouad Hospital</td>
                            <td className={styles.td}>25251789</td>
                            <td className={styles.td}>info@alsalam.com</td>
                            <td className={styles.td}>Corniche Maadi</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>57357 Hospital</td>
                            <td className={styles.td}>3548965</td>
                            <td className={styles.td}>contact@childrenhospital.com</td>
                            <td className={styles.td}>Sayeda Zeinab</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Dar Al Fouad</td>
                            <td className={styles.td}>2589798</td>
                            <td className={styles.td}>contracts@daralfouad.com</td>
                            <td className={styles.td}>6th of Octobor</td>
                            <td className={styles.td}>edit - view Submission - remove</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <button className={styles.button}><a href="/admin">Go to Dashboard</a></button>
            
        </div>
    );
};
