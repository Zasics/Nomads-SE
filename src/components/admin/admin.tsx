import classNames from 'classnames';
import styles from './admin.module.scss';

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
            <div className={styles.title}>ADMIN HOME PAGE</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                Welcome to the admin page! Here, you oversee critical aspects of our blood donation 
                operations. Access donor registrations, blood inventory, drives, and volunteer activities 
                with intuitive tools. Your role ensures transparency, efficiency, and impactful 
                decision-making. Thank you for your dedication in saving lives through blood donation!
                </div>
            </div>
            <button className={styles.button}>Learn more</button>
            <img
                src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
                className={styles.image}
            />
        </div>
    );
};
