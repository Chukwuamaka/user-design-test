import { HtmlHTMLAttributes } from 'react';
import styles from '../../styles/TabInfo.module.css';

interface Info {
  name: string;
  value: any;
}

interface InfoSectionProps extends HtmlHTMLAttributes<HTMLDivElement> {
  info: Info[],
  heading: string;
}

export default function InfoSection({ info, heading, ...props }: InfoSectionProps) {
  return (
    <div {...props}>
      <h2 className={styles.info_section_heading}>{heading}</h2>
      <div className={styles.info_section_content}>
        {info.map(({ name, value }, index) => (
          <div key={name+index}>
            <h3 className={styles.info_name}>{name}</h3>
            <p className={styles.info}>{value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}