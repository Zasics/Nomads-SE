import classNames from 'classnames';
import styles from './list.module.scss';

export interface ListProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const List = ({ className }: ListProps) => {
    return <div className={classNames(styles.root, className)}>List</div>;
};
