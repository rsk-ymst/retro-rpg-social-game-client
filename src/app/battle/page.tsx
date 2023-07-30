'use client'

import Image from 'next/image'
import { createContext, useContext, useEffect, useState } from 'react'
import BattleBar from '../components/organisms/BattleBar'
import BattleField from '../components/organisms/BattleField'
import CommandMenu from '../components/organisms/CommandMenu'
import {
  ActionCommand,
  ActionCommandQueue,
  BattleState,
  Context,
  FieldPlayer,
  FocusPlayer,
  GameContext,
  UIFocusStatus,
} from './context'

const CHARACTER_NUMBER = 4

const GameWindow = () => {
  // データ受信し、ここで初期値設定

  const [currentFieldPlayerIndex, setCurrentFieldPlayerIndex] = useState<number>(0)
  const [currentFieldPlayers, setCurrentFieldPlayers] = useState<FieldPlayer[]>([])

  const [actionCommandQueue, setActionCommandQueue] = useState<ActionCommandQueue>([])
  const [actionCommand, setActionCommand] = useState<ActionCommand>(null)

  const [battleState, setBattleState] = useState<BattleState>(BattleState.PlayerSelect)
  const [focusPlayer, setFocusPlayer] = useState<FocusPlayer>(FocusPlayer.A)
  const [UIFocus, setUIFocus] = useState<UIFocusStatus>(UIFocusStatus.BASIC_OPTIONS)

  console.log('window reloaded -----------------------------------------')

  const updateBattleState = (value: BattleState) => setBattleState(value)
  const updateUIFocusStatus = (value: UIFocusStatus) => setUIFocus(value)
  const updateActionCommand = (value: ActionCommand) => setActionCommand(value)

  // ここでbattleStateを変更する
  useEffect(() => {
    console.log('update battleState', battleState)

    if (battleState == BattleState.ActionTransaction) {
      // コマンドプッシュ & 待機を繰り返す
      // // await wait
      // Promise.resolve()
      //   .then(() => {})
      //   .then(() => {})
    }

    setCurrentFieldPlayerIndex(0)
    setActionCommandQueue([])
  }, [battleState])

  useEffect(() => {
    console.log('update UIFocus', UIFocus)
  }, [UIFocus])

  useEffect(() => {
    console.log('update currentFieldPlayerIndex', currentFieldPlayerIndex)

    // if (currentFieldPlayerIndex > 4 || actionCommandQueue.length == 4) {
    //   setBattleState(BattleState.ActionTransaction)
    // }
  }, [currentFieldPlayerIndex])

  useEffect(() => {
    if (actionCommand == null) return

    console.log('update actionCommand', actionCommand)

    // ターゲット決定 => コマンド確定
    if (actionCommand?.target !== undefined) {
      actionCommandQueue.push(actionCommand)
      console.log('pushed actionCommand', actionCommandQueue)

      // キャラクタ全員のコマンドが決定したら、stateを切り替える
      if (actionCommandQueue.length >= 4) {
        setBattleState(BattleState.ActionTransaction)
        return
      }

      setCurrentFieldPlayerIndex(currentFieldPlayerIndex + 1)
      setActionCommand(null) // コマンド内容を
    }
  }, [actionCommand])

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCount((prevCount: number) => prevCount + 1)
  //   }, 1000) // 1000ミリ秒（1秒）ごとにコールバックが実行される

  //   // コンポーネントがアンマウントされた際にクリーンアップ
  //   return () => {
  //     clearInterval(intervalId)
  //   }
  // }, [])

  const initialContext: GameContext = {
    currentFieldPlayerIndex: 0,
    fieldPlayers: [],
    actionCommand,
    battleState,
    UIFocus,
    actionCommandQueue: [],
    updateBattleState,
    updateUIFocusStatus,
    updateActionCommand,
  }

  return (
    <Context.Provider value={initialContext}>
      <div className='flex justify-center m-4'>
        <div className='bg-black w-[960px] h-[540px]'>
          <div className=' flex justify-center flex-col items-center'>
            {/* メニュー */}
            <BattleBar className={'w-[920px] h-[50px] mt-2'} />
            {/* <div className='bg-blue-600 w-[920px] h-[50px] mt-2 rounded-lg border-2 border-t-red-50'> */}

            {/* </div> */}
            {/* </div> */}

            {/* バトルフィールド */}
            {/* <div className='flex justify-center'> */}
            <BattleField className={'w-[920px] h-[350px]'} />
            {/* <div className='bg-gray-700 w-[920px] h-[320px]'>
        {/* enemy filed */}
            {/* nakama filed */}
            {/* </div> */}
            {/* </div> */}

            {/* コマンドメニュー */}
            <CommandMenu className={'w-[920px] h-[120px] mb-2'} />
            {/* <div className='flex justify-center m-8'> */}
            {/* <div className='flex bg-blue-600 w-[920px] h-[150px] mb-2 rounded-lg border-2 border-t-red-50'> */}
            {/* <div className='flex'> */}
            {/* <div className='flex-[0.8] h-full border-2 border-t-red-50'>
            {/* <div>たたかう</div>
            <div>にげる</div>
            <div>どうぐ</div>
            <div>助ける</div> */}
            {/* </div> */}

            {/* <div className='flex-1 h-full border-2 border-t-red-50'> */}
            {/* <div>たたかう</div>
            <div>にげる</div>
            <div>どうぐ</div>
            <div>助ける</div> */}
            {/* </div> */}

            {/* <div className='flex-[2] h-full border-2 border-t-red-50'> */}
            {/* <div>たたかう</div>
            <div>にげる</div>
            <div>どうぐ</div>
            <div>助ける</div> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </Context.Provider>
  )
}

export default GameWindow