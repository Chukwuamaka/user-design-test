import Image from 'next/image';
import styles from '../../styles/TabInfo.module.css';
import { CloudArrowUpIcon, FingerPrintIcon, PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import InfoSection from './InfoSection';
import next from '../../public/next.svg';

const biodata_info = [
  { name: 'Title', value: 'Mr.' },
  { name: 'First Name', value: 'Ebenezer' },
  { name: 'Other Names', value: 'Taiwo' },
  { name: 'Last Name', value: 'Babalola' },
  { name: 'LGA', value: 'Ilesha-West' },
  { name: 'State of Origin', value: 'Osun State' },
  { name: 'Country', value: 'Nigeria' },
]

const employment_info = [
  { name: 'Employee Number', value: 'SSL-002' },
  { name: 'Employee Type', value: 'Full-time' },
  { name: 'Employee Resumption Date', value: '2023-01-31' },
  { name: 'Designation', value: 'Software Developer I' },
  { name: 'Department', value: 'Enterprise Unit' },
]

const contact_info = [
  { name: 'Mobile No.', value: '07017000000' },
  { name: 'Phone No.', value: '07017000000' },
  { name: 'Primary Email', value: 'ebenezertaiwo@gmail.com' },
  { name: 'Secondary Email', value: 'taiwo@gmail.com' },
]

const other_info = [
  { name: 'Signature', value: <Image src={next} width={60} height={60} alt='NextJS logo' /> },
  { name: 'Fingerprint', value: <FingerPrintIcon className={styles.fingerprint} /> },
]

export default function TabInfo() {
  return (
    <div className={styles.info_container}>
      <div className={styles.info_heading_container}>
        <h2 className={styles.info_heading}>Edit profile</h2>
        <p className={styles.info_intro}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
          Richard McClintock, a Latin professor at Hampden-Sydney College.
        </p>
      </div>
      
      <div className={styles.main_info_content}>
        <div className={`d-flex justify-sb align-center ${styles.update_profile_container}`}>
          <div className={styles.profile_image_container}>
            <Image src='https://bit.ly/sage-adebayo' width={110} height={110} alt='Segun Adebayo' />
            <button className={styles.view_photo_btn}>
              <span className={styles.btn_text}>View photo</span>
              <PhotoIcon className={styles.btn_icon} />
            </button>
            <button className={styles.upload_photo_btn}>
              <span className={styles.btn_text}>Upload photo</span>
              <CloudArrowUpIcon className={styles.btn_icon} />
            </button>
          </div>
          <button className={styles.update_profile_btn}>
            <span className={styles.btn_text}>Update profile</span>
            <UserCircleIcon className={styles.btn_icon} />
          </button>
        </div>
        <div className='d-flex justify-sb'>
          <InfoSection heading='Bio Data Information' info={biodata_info} className={styles.bio_data} />
          <InfoSection heading='Employment Information' info={employment_info} className={styles.employment_info} />
        </div>
        <InfoSection heading='Contact Information' info={contact_info} className={styles.contact_info} />
        <InfoSection heading='Other Information' info={other_info} className={styles.other_info} />
      </div>
    </div>
  )
}
