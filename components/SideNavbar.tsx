import React, { useRef, useState } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '@/hooks/useDimensions'
import { FaBars, FaCaretDown, FaFile } from 'react-icons/fa'

function SideNavbar() {
  const [listVisible, setListVisible] = useState(false)
  const [isOpen, toggleOpen] = useCycle(false, true)
  // TODO: documents will be fetched from server
  const documents = [{ name: 'Document1.md' }, { name: 'Document2.md' }]
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }
  const description = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  )
  const itemIds = [0, 1, 2, 3, 4]

  const ulVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }
  const liVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']

  return (
    <>
      <motion.div
        className={"absolute top-0 left-0 bottom-0 w-1/5"}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          variants={sidebar}
          className={'absolute top-0 left-0 bottom-0 w-2/3 bg-slate-800'}
        />
        <motion.ul variants={ulVariants}>
          <motion.div variants={liVariants}>
            <motion.div className="p-7 text-white">MARKDOWN EDITOR</motion.div>
            <motion.div
              className={
                'flex flex-row justify-between bg-slate-700 p-1 text-sm text-slate-400'
              }
            >
              DOCUMENTS
            </motion.div>
          </motion.div>
          {documents.map((document, index) => {
            return (
              <motion.li
                className={'li'}
                variants={liVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  key={index}
                  className={
                    'flex flex-row justify-between p-5 text-sm text-white'
                  }
                >
                  {document.name}
                  <FaFile onClick={() => setListVisible(!listVisible)} />
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
        <button onClick={toggleOpen} className={'button'}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </svg>
        </button>
      </motion.div>
    </>
  )
}

export default SideNavbar
