import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { motion } from "motion/react"
import Head from 'next/head'

const About = ({isDarkMode}) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div id='about' className='w-full px-[13%] py-10 scroll-mt-28'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        À propos</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'
        style={{marginTop: '24px'}}
        >
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                <p className='mb-10 max-w-2xl font-Ovo' 
                    style={{ marginBottom: '16px' }}
                    >Je m'appelle Mohamed KHOUI, consultant indépendant spécialisé en gestion de projet, MOA et conduite du changement.
Rigoureux, adaptable et bilingue (français/anglais), je mets mon expertise au service des entreprises pour sécuriser et réussir leurs projets stratégiques.                </p>
<motion.ul
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8, delay: 1}}
    style={{maxWidth: 'none'}}
    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
    {infoList.map(({icon, iconDark, title, description}, index)=>(
        <motion.li 
        whileHover={{scale: 1.05}}
        className='border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
         key={index}>
            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
            <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
            <ul className='text-gray-600 text-sm dark:text-white/80 space-y-2'>
                {description.map((point, i) => (
                    <li key={i} className='flex items-start gap-2'>
                        <span className='text-blue-500 dark:text-blue-400'>•</span>
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </motion.li>
    ))}
</motion.ul>

                <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{ scale: 1.1 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                        key={index}>
                            <Image src={tool.img} alt='Tool' className='w-5 sm:w-7'/>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                y: hoveredIndex === index ? -40 : 10, 
                                }}
                                transition={{ duration: 0.25 }}
                                className="absolute text-sm font-medium px-2 py-1 rounded-md 
                                        bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-100 
                                        shadow-md pointer-events-none"
                            >
                                {tool.name}
                            </motion.span>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
