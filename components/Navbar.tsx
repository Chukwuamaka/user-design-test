import { Cog6ToothIcon, PowerIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

const pry_nav_items = ['Home', 'Payroll', 'Leave', 'Loan', 'Appraisal', 'Subscriptions'];
const sec_nav_items = [
  { text: 'Profile', icon: UserCircleIcon },
  { text: 'Settings', icon: Cog6ToothIcon },
  { text: 'Logout', icon: PowerIcon },
]

export default function Navbar({ active }: { active: string }) {
  return (
    <nav className={styles.nav_container}>
      <ul>
        {pry_nav_items.map((item, index) => (
          <li className={`${styles.pry_nav_item} ${active === item.toLowerCase() ? styles.active : ''}`} key={item+index}>
            <Link href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        {sec_nav_items.map(({ text, icon: Icon }, index) => (
          <li className={styles.sec_nav_item} key={text+index}>
            <Link href={`/${text.toLowerCase()}`}>
              <Icon className={styles.nav_icon} />
              <p>{text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
