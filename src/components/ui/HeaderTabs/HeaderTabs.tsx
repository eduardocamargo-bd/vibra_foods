'use client'

import React from 'react'
import { Globe, ChevronDown } from 'lucide-react'
import styles from './HeaderTabs.module.css'

interface HeaderTabsProps {
  className?: string
}

const HeaderTabs: React.FC<HeaderTabsProps> = ({ className }) => {
  return (
    <div className={`${styles['c_header-tabs-instance1']} ${className || ''}`}>
      <div className={styles['c_header-tabs-frame1']}>
        <div className={styles['c_header-tabs-frame2']}>
          <div className={styles['c_header-tabs-text10']}>
            <span className={styles['c_header-tabs-text11']}>Vibra Foods</span>
          </div>
        </div>
        <div className={styles['c_header-tabs-instance2']}>
          <div className={styles['c_header-tabs-text12']}>
            <span className={styles['c_header-tabs-text13']}>Nat</span>
          </div>
        </div>
        <div className={styles['c_header-tabs-instance3']}>
          <div className={styles['c_header-tabs-text14']}>
            <span className={styles['c_header-tabs-text15']}>Ávia</span>
          </div>
        </div>
        <div className={styles['c_header-tabs-instance4']}>
          <div className={styles['c_header-tabs-text16']}>
            <span className={styles['c_header-tabs-text17']}>Ingredients</span>
          </div>
        </div>
      </div>
      <div className={styles['c_header-tabs-instance5']}>
        <div className={styles['c_header-tabs-instance6']}>
          <Globe 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
        <div className={styles['c_header-tabs-text18']}>
          <span className={styles['c_header-tabs-text19']}>Português</span>
        </div>
        <div className={styles['c_header-tabs-instance7']}>
          <ChevronDown 
            size={18}
            color="var(--vf-primary)"
          />
        </div>
      </div>
    </div>
  )
}

export default HeaderTabs