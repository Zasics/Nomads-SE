import classNames from 'classnames';
import styles from './view-donors.module.scss';

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
            <div className={styles.title}>Donor List</div>
            <div className={styles.paragraph}>
                <div className={styles.text}></div>
                <ol className={styles.root}>
                    <li>Donor 1</li>
                    <li>Donor 2</li>
                    <li>Donor 3</li>
                </ol>
            </div>
        </div>
    );
};
