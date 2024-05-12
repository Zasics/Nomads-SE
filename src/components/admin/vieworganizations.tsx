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
export const ViewOrganizations = ({ className }: AdminProps) => {
    return (
        <div className={classNames(styles.root, classNames)}>
            <div className={styles.title}>View Organizations</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Organization Name</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                        <tr>
                            <td className={styles.td}>Dar Al Fouad Hospital</td>
                            <td className={styles.td}>edit - view requests - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>57357 Hospital</td>
                            <td className={styles.td}>edit - view requests - remove</td>
                        </tr>
                        <tr>
                            <td className={styles.td}>Al Salam Hospital</td>
                            <td className={styles.td}><Link to="/orgdetails">edit</Link> - view requests - remove</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
            <button className={styles.button}>Learn more</button>
            
        </div>
    );
};
