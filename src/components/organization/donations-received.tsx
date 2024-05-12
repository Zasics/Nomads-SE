import classNames from 'classnames';
import styles from './organization.module.scss';
import DonationsReceived_module from './donations-received.module.scss';
import BulletWebp from '../../assets/bullet.webp';

export interface DonationsReceivedProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const DonationsReceived = ({ className }: DonationsReceivedProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.title}>Donations Received</div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 2 Jackets from &apos;Jason Smith&apos; for &apos;Warm Winter Coats
                    Needed for Local Shelter Residents&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 3 Boxes of School Supplies from &apos;Emily Johnson&apos; for
                    &apos;Help Equip Our Community Classroom: Seeking School Supplies&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 5 Teddy Bears from &apos;Mark Lee&apos; for &apos;Donate Toys for
                    Children in Hospital Over the Holidays&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 10 Canned Goods from &apos;Sarah Connor&apos; for &apos;Urgent Call for
                    Non-Perishable Food Items to Stock Food Pantry&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 4 Wheelchairs from &apos;Robert Frost&apos; for &apos;Support Seniors:
                    Mobility Aids and Medical Supplies Needed&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 20 Blankets from &apos;Alice Wonderland&apos; for &apos;Warm Winter
                    Coats Needed for Local Shelter Residents&apos;
                </h3>
            </div>
            <div className={DonationsReceived_module['donations-frame']}>
                <img src={BulletWebp} alt="" className={DonationsReceived_module.image} />
                <h3 className={DonationsReceived_module['donation-text']}>
                    Received 15 Packs of Notebooks from &apos;John Doe&apos; for &apos;Help Equip
                    Our Community Classroom: Seeking School Supplies&apos;
                </h3>
            </div>
        </div>
    );
};
