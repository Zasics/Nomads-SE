import classNames from 'classnames';
import styles from './header.module.scss';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LogoPng from '../../assets/logo.png';

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    let location = useLocation();
    if (location.pathname.startsWith('/admin')) {
        // Admin header
        return (
            <div className={classNames(styles.root, className)}>
                <a href="/" className={styles.navlogo}>
                    <img src={LogoPng} alt="" height="70 " />
                    <h1 className={styles.navtitle}>HelpingHands - Admin</h1>
                </a>
                <div className={styles.menu}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Login/Register
                    </NavLink>
                </div>
            </div>
        );
    } else if (location.pathname.startsWith('/organization')) {
        // Organization header
        return (
            <div className={classNames(styles.root, className)}>
                <a href="/" className={styles.navlogo}>
                    <img src={LogoPng} alt="" height="70 " />
                    <h1 className={styles.navtitle}>HelpingHands - Organization</h1>
                </a>
                <div className={styles.menu}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Login/Register
                    </NavLink>
                </div>
            </div>
        );
    } else if (location.pathname.startsWith('/donor')) {
        // Donor header
        return (
            <div className={classNames(styles.root, className)}>
                <a href="/" className={styles.navlogo}>
                    <img src={LogoPng} alt="" height="70 " />
                    <h1 className={styles.navtitle}>HelpingHands - Donor</h1>
                </a>
                <div className={styles.menu}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Login/Register
                    </NavLink>
                </div>
            </div>
        );
    } else {
        // Default header
        return (
            <div className={classNames(styles.root, className)}>
                <a href="/" className={styles.navlogo}>
                    <img src={LogoPng} alt="" height="70 " />
                    <h1 className={styles.navtitle}>HelpingHands</h1>
                </a>
                <div className={styles.menu}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/login"
                        className={({ isActive }) => classNames({ [styles.active]: isActive })}
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        );
    }
};
