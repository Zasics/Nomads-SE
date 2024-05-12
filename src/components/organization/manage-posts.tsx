import classNames from 'classnames';
import styles from './organization.module.scss';
import ManagePosts_module from './manage-posts.module.scss';

export interface ManagePostsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ManagePosts = ({ className }: ManagePostsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>Manage Posts</div>
            <div className={ManagePosts_module.posts}>
                <div className={ManagePosts_module.card}>
                    <img
                        src="https://images.unsplash.com/photo-1514632488-3d65989924b7?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={ManagePosts_module.postimage}
                    />
                    <h2 className={ManagePosts_module.postTitle}>
                        Warm Winter Coats Needed for Local Shelter Residents
                    </h2>
                </div>
                <div className={ManagePosts_module.card}>
                    <img
                        src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={ManagePosts_module.postimage}
                    />
                    <h2 className={ManagePosts_module.postTitle}>
                        Help Equip Our Community Classroom: Seeking School Supplies
                    </h2>
                </div>
                <div className={ManagePosts_module.card}>
                    <img
                        src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={ManagePosts_module.postimage}
                    />
                    <h2 className={ManagePosts_module.postTitle}>
                        Donate Toys for Children in Hospital Over the Holidays
                    </h2>
                </div>
                <div className={ManagePosts_module.card}>
                    <img
                        src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={ManagePosts_module.postimage}
                    />
                    <h2 className={ManagePosts_module.postTitle}>
                        Urgent Call for Non-Perishable Food Items to Stock Food Pantry
                    </h2>
                </div>
                <div className={ManagePosts_module.card}>
                    <img
                        src="https://plus.unsplash.com/premium_photo-1663100677589-0c4f37f66334?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className={ManagePosts_module.postimage}
                    />
                    <h2 className={ManagePosts_module.postTitle}>
                        Support Seniors: Mobility Aids and Medical Supplies Needed
                    </h2>
                </div>
            </div>
        </div>
    );
};
