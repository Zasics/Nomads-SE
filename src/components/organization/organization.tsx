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
    const activePosts = 5;
    const pendingPosts = 2;
    const fulfilledPosts = 3;

    function managePosts() {
        // go to manage posts page
        window.location.href = '/organization/manage-posts';
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>My Dashboard</div>
            <div className={styles.dashboard}>
                <p>Active Posts: {activePosts}</p>
                <p>Pending Posts: {pendingPosts}</p>
                <p>Fulfilled Posts: {fulfilledPosts}</p>
            </div>
            <button className={styles.button} onClick={managePosts}>
                Manage Posts
            </button>
            <img
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2606&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className={styles.image}
            />
        </div>
    );
};
