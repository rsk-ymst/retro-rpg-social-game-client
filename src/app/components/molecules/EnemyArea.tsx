'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useContext } from 'react'
import Enemy from './Enemy'
import { Context } from '@/app/battle/context'

export type Props = {
  className?: string
}

const EnemyArea = ({ className }: Props) => {
  const context = useContext(Context)
  const enemies = context?.enemies || []
  const currentEnemyIndex = context?.currentEnemyIndex

  return (
    <div className={`${className}`}>
      <div className='flex align-middle h-full items-center'>
        {enemies.map((e, i) => {
          return <Enemy key={i} index={i} enemy={e}  />
        })}
      </div>
    </div>
  )
}

export default EnemyArea
