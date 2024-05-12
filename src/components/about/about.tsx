import classNames from 'classnames';
import styles from './about.module.scss';

export interface AboutProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const About = ({ className }: AboutProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt=""
                className={styles.image}
            />
            <div className={styles.text}>
                <div className={styles.title}>Our Mission and Vision</div>
                <div className={styles.paragraph}>
                    HelpingHands is built on the belief that generosity should know no bounds. Our
                    mission is to facilitate the direct exchange of non-monetary donations between
                    donors and recipients, fostering a community of support and care. We strive to
                    empower individuals and organizations to contribute to meaningful causes and
                    make an impactful change in society. Join us in our journey towards a better
                    tomorrow.
                </div>
            </div>
        </div>
    );
};
