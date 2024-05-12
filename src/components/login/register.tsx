import classNames from 'classnames';
import styles from './login.module.scss';
import LogoWithTextPng from '../../assets/logo-with-text.png';

export interface RegisterProps {
    className?: string;
}

export const Register = ({ className }: RegisterProps) => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (formData.get('email') === '') {
            alert('Please enter your email!');
            //window.location.href = '/admin';
        } else if (formData.get('fName') === '') {
            alert('Please enter your first name!');
        } else if (formData.get('lName') === '') {
            alert('Please enter your last name!');
        } else if (formData.get('file') === '') {
            alert('Please upload your proof of identity!');
        } else if (formData.get('password') === '') {
            alert('Please enter your password!');
        } else if (formData.get('confirmPassword') === '') {
            alert('Please confirm your password!');
        } else if (formData.get('password') !== formData.get('confirmPassword')) {
            alert('Passwords do not match!');
        } else {
            alert('Registration successful!');
            window.location.href = '/login';
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            <img alt="" className={styles.image} src={LogoWithTextPng} />
            <div className={styles.formFrame}>
                <div className={styles.title}>Register Now!</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Email:</label>
                    <input name="email" type="text" className={styles.input} />
                    <label className={styles.formLabel}>First Name:</label>
                    <input name="fName" type="text" className={styles.input} />
                    <label className={styles.formLabel}>Last Name:</label>
                    <input name="lName" type="text" className={styles.input} />
                    <label className={styles.formLabel}>Proof of Identity:</label>
                    <input name="file" type="file" className={styles.input} />
                    <label className={styles.formLabel}>Password:</label>
                    <input name="password" type="password" className={styles.input} />
                    <label className={styles.formLabel}>Confirm Password:</label>
                    <input name="confirmPassword" type="password" className={styles.input} />
                    <button className={styles.btn} type="submit">
                        Register Now
                    </button>
                </form>
                <a href="/login" className={styles.link}>
                    Already have an account? Login now!
                </a>
            </div>
        </div>
    );
};
