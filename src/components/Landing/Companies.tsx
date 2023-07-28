import React from 'react'
import type { StaticImageData } from 'next/image';
import Image from 'next/image'
import asset5 from '../../../public/assets/new/asset5.png'
import asset3 from '../../../public/assets/new/asset3.png'
import asset4 from '../../../public/assets/new/asset4.png'
import asset6 from '../../../public/assets/new/asset6.png'
import asset7 from '../../../public/assets/new/asset7.png'
import asset8 from '../../../public/assets/new/asset8.svg'
import asset9 from '../../../public/assets/new/asset9.png'
const Companies = () => {
    return (
        <section className="companies-section">
            <div className="container">
                <div className="text-lg font-bold companies-header text-center">The world’s best companies rely on UsabilityHub to make better design decisions.</div>
                <div className="logos flex items-center justify-between flex-wrap">
                    <Image src={asset3} alt='company' quality={100} height={46} />
                    <Image src={asset4} alt='company' quality={100} height={46} />
                    <Image src={asset5} alt='company' quality={100} height={46} />
                    <Image src={asset6} alt='company' quality={100} height={46} />
                    <Image src={asset7} alt='company' quality={100} height={46} />
                    <Image src={asset8 as StaticImageData} alt='company' quality={100} height={46} />
                    <Image src={asset9} alt='company' quality={100} height={46} />
                </div>
            </div>
        </section>
    )
}

export default Companies