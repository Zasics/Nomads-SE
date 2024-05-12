import classNames from 'classnames';
import styles from './organization.module.scss';
import CreatePost_module from './create-post.module.scss';

export interface CreatePostProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CreatePost = ({ className }: CreatePostProps) => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (formData.get('title') === '') {
            alert('Please enter a post title!');
            //window.location.href = '/admin';
        } else if (formData.get('desc') === '') {
            alert('Please enter post description!');
        } else {
            alert('Thank you! Your post is under review.');
            window.location.href = '/organization';
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>Create New Post</div>
            <div className={CreatePost_module.formFrame}>
                <form onSubmit={handleSubmit} className={CreatePost_module.form}>
                    <label className={styles.formLabel}>Post Title:</label>
                    <input name="title" type="text" className={CreatePost_module.input} />
                    <label className={styles.formLabel}>Post Description:</label>
                    <textarea name="desc" className={CreatePost_module.input} />
                    <label className={styles.formLabel}>Image(s):</label>
                    <input name="file" type="file" className={CreatePost_module.input} />
                    <button type="submit" className={CreatePost_module.btn}>
                        Post for Review
                    </button>
                </form>
            </div>
        </div>
    );
};
