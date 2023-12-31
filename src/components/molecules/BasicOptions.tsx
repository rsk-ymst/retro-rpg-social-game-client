'use client'

import React, { useContext } from 'react'
import Button from '../atoms/Button'
import { Context, UIFocusStatus, BattleState } from '@/game/context'

export type Props = {
  className?: string
}

export type characterOption = {
  commandName: string
  onClick: () => void
}

const BasicOptions = ({ className }: Props) => {
  const context = useContext(Context)
  if (!context) throw new Error('BasicOptions context error')

  const characterOptions: characterOption[] = [
    {
      commandName: 'たたかう',
      onClick: () => {
        context.updateBattleBarContent(undefined)
        context.updateUIFocusStatus(UIFocusStatus.ENEMY_INFO)
        context.updateActionCommand({ ...context.actionCommand, name: 'たたかう' })
      },
    },
    {
      commandName: 'スキル',
      onClick: () => {
        context.updateBattleBarContent(undefined)
        context.updateUIFocusStatus(UIFocusStatus.SKILLS)
        context.updateActionCommand({ ...context.actionCommand, name: 'スキル' })
      },
    },
    {
      commandName: 'どうぐ',
      onClick: () => {
        context.updateBattleBarContent(undefined)
        context.updateUIFocusStatus(UIFocusStatus.ITEM_LIST)
        context.updateActionCommand({ ...context.actionCommand, name: 'どうぐ' })
      },
    },
    {
      commandName: 'にげる',
      onClick: () => {
        context.updateBattleBarContent("にげられない！")
      },
    },
  ]

  const isFocus =
    context.UIFocus === UIFocusStatus.BASIC_OPTIONS &&
    context.battleState === BattleState.PlayerSelect

  return (
    <div className={`${className}`}>
      <div
        className={`flex flex-col mt-2 isFocus ${
          isFocus ? 'text-white' : 'text-gray-500'
        } font-bold`}
      >
        {characterOptions.map((option, key) => {
          return (
            <Button
              key={key}
              className={'text-start'}
              display={option.commandName}
              onClick={option.onClick}
              selectable={isFocus}
            />
          )
        })}
      </div>
    </div>
  )
}

export default BasicOptions
