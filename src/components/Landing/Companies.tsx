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
        <section className="companies-section py-10">
            <div className="container mx-auto px-4">
                <div className="text-xl font-bold text-center mb-8">Find the best freelancers for your projects on WorkUp.</div>
                <div className="logos grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset3} alt='company' quality={100} height={46} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset4} alt='company' quality={100} height={46} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset5} alt='company' quality={100} height={46} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset6} alt='company' quality={100} height={46} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset7} alt='company' quality={100} height={46} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset8 as StaticImageData} alt='company' quality={100} height={32} />
                    </div>
                    <div className="flex justify-center items-center bg-white p-4 rounded-lg shadow-md">
                        <Image src={asset9} alt='company' quality={100} height={46} />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Companies