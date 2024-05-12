import classNames from 'classnames';
import styles from './organization.module.scss';

export interface OrganizationProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Organization = ({ className }: OrganizationProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>ORGANIZATION HOME PAGE</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                Welcome to our organization's page dedicated to saving lives through blood donation! At 
                our core, we are driven by the belief that every individual has the power to make a 
                difference. Through our collective efforts, we strive to provide a lifeline to those 
                in need by ensuring a stable and sustainable blood supply. With a focus on innovation, 
                collaboration, and community engagement, we work tirelessly to coordinate donation 
                drives, manage inventory, and support patients in their time of need. Together, we 
                embody the spirit of compassion and generosity, transforming the lives of countless 
                individuals one donation at a time. Join us in our mission to make a lifesaving impact 
                and spread hope and healing throughout our community and beyond.
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
