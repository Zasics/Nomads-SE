import classNames from 'classnames';
import styles from './donor.module.scss';

export interface DonorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Donor = ({ className }: DonorProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>DONOR HOME PAGE</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                Welcome to our donor page! Your decision to donate blood saves lives. Your generosity 
                ensures hospitals have the blood they need for emergencies, surgeries, and illnesses. 
                Whether you're a first-timer or a regular donor, your contribution is invaluable. Find 
                upcoming drives, learn about the process, and register to donate here. Thank you for 
                considering becoming a donor and joining us in our mission to save lives.
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
