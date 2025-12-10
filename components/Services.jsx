import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
 <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 scroll-mt-28'>

    <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-5xl font-Ovo'>
        Mes Services
    </motion.h2>

    <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        J'accompagne les entreprises dans leurs projets de transformation digitale et organisationnelle avec une expertise technique et humaine adaptée à leurs besoins réels.
    </motion.p>

<motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 0.6 }}
    className='grid grid-cols-auto gap-6 my-10'>
    {serviceData.map(({icon, title, description, link}, index)=>(
        <motion.div 
            whileHover={{scale: 1.05}}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
            <Image src={icon} alt='' className='w-10'/>
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <ul className='text-sm text-gray-600 leading-5 dark:text-white/80 space-y-2'>
                {description.map((point, i) => (
                    <li key={i} className='flex items-start gap-2'>
                        <span className='text-blue-500 dark:text-blue-400 flex-shrink-0'>•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
            {link && (
                <a href={link} className='inline-flex items-center gap-2 text-sm mt-5 text-blue-600 dark:text-blue-400 hover:underline'>
                    En savoir plus
                    <Image src={assets.right_arrow} alt='' className='w-4'/>
                </a>
            )}
        </motion.div>
    ))}
</motion.div>
</motion.div>
  )
}

export default Services
