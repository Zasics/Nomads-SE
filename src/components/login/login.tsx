import classNames from 'classnames';
import styles from './login.module.scss';
import LogoWithTextPng from '../../assets/logo-with-text.png';

export interface LoginProps {
    className?: string;
}

export const Login = ({ className }: LoginProps) => {
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        if (formData.get('email') === 'admin' && formData.get('password') === 'admin') {
            //alert('Login successful! Welcome Admin!');
            window.location.href = '/admin';
        } else if (formData.get('email') === 'donor' && formData.get('password') === 'donor') {
            //alert('Login successful! Welcome Donor!');
            window.location.href = '/donor';
        } else if (
            formData.get('email') === 'organization' &&
            formData.get('password') === 'organization'
        ) {
            //alert('Login successful! Welcome Organization!');
            window.location.href = '/organization';
        } else {
            alert('Incorrect Email or Password!');
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            <img alt="" className={styles.image} src={LogoWithTextPng} />
            <div className={styles.formFrame}>
                <div className={styles.title}>Welcome Back!</div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.formLabel}>Email:</label>
                    <input name="email" type="text" className={styles.input} />
                    <label className={styles.formLabel}>Password:</label>
                    <input name="password" type="password" className={styles.input} />
                    <button className={styles.btn} type="submit">
                        Log in
                    </button>
                </form>
                <a href="/register" className={styles.link}>
                    Don&apos;t have an account? Register now!
                </a>
            </div>
        </div>
    );
};
