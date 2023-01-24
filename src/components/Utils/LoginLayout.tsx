import styles from '../../styles/Form.module.css';
import Image from 'next/image';
import img1 from '../../../public/assets/img1.png'
export default function LoginLayout({ children }: any) {
    return (
        <div className="flex h-75% w-screen bg-violet-100">
            <div className="mx-auto my-auto relative bg-slate-50 rounded-md  grid lg:grid-cols-2 w-4/5">
                <div className={styles.imgStyle}>
                    <div className={styles.cloud_one}></div>
                    <div className={styles.cloud_two}></div>
                    <div className='hidden md:flex md:flex-grow-1 h-4/5 w-[1000] absolute bottom-0'><Image src={img1} alt='login'  /></div>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}