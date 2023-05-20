import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import styles from '../styles/Sidebar.module.css';

const sidebar_items = ['Edit profile', 'Medical', 'Next of kin', 'Dependents', 'Education History', 'Employment History', 'Documents'];

export default function Sidebar({ active }: { active: string }) {
  return (
    <div className={styles.sidebar_container}>
      <h2 className={styles.sidebar_heading}>Menu</h2>
      <ul>
        {sidebar_items.map((item, index) => (
          <li key={item+index} className={`${styles.sidebar_item} ${active === item.toLowerCase() ? styles.active : ''}`}>
            <span>{item}</span>
            <AdjustmentsHorizontalIcon className={styles.sidebar_icon} />
          </li>
        ))}
      </ul>
    </div>
  )
}
