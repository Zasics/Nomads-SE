import classNames from 'classnames';
import styles from './home-page.module.scss';

export interface HomePageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const HomePage = ({ className }: HomePageProps) => {
    function onClick() {
        window.location.href = '/register';
    }

    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
                alt=""
                className={styles.image}
            />
            <div className={styles.title}>Where Generosity Connects</div>
            <div className={styles.paragraph}>
                <div className={styles.text}>
                    Welcome to HelpingHands, your dedicated platform for non-monetary donations.
                    Together, we bridge the gap between those who have and those who need. Explore
                    our wide range of donation categories—from clothes and toys to medical supplies
                    and books—and find out how you can make a difference today!
                </div>
            </div>
            <button className={styles.button} onClick={onClick}>
                Start Your Journey{' '}
            </button>
        </div>
    );
};
