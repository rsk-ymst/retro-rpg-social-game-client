'use client'

import React from 'react'
import Button from '../atoms/Button'

export type Props = {
  className?: string
  options: Option[]
}

export type Option = {
  display_name: string
  onClick: () => void
}

const BasicOptions = ({ options, className }: Props) => {
  return (
    <div className={`${className}`}>
      <div className='flex flex-col mt-2 ml-4 text-white font-bold'>
        {options.map((option, key) => (
          // <div key={key}>
          <Button key={key} className={'text-start'} display={option.display_name} onClick={option.onClick} />
          // </div>
        ))}
      </div>
    </div>
  )
}

export default BasicOptions