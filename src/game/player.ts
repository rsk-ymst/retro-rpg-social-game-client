import { ActionCharacter, ActionCharacterDrawState } from '../models/ActionCharacter'
import { CharacterType, FieldPlayer } from './context'
import { SkillType } from '@/models/Skill'

export const testPlayerData: ActionCharacter[] = [
  {
    name: 'フェリス',
    type: 'FieldPlayer',
    drawState: ActionCharacterDrawState.Normal,
    status: {
      currentHitPoint: 865,
      currentSpecialPoint: 300,
      condition: '通常',
      command: 'たたかう',
      onDamage: false,
      onDamagePoint: 0,
    },
    parameter: {
      attack: 80,
      defense: 100,
      hitPoint: 865,
      specialPoint: 500,
      speed: 50,
      level: 0,
      specialAttack: 0,
      specialDefense: 0,
      experiencePoint: 0,
    },
    skills: [
      {
        name: 'ライフタイム',
        type: SkillType.PhysicalAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '味方のHPを100回復',
      },
      {
        name: '並列攻撃',
        type: SkillType.PhysicalAllAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '敵全体にダメージ',
      },
      {
        name: 'Box<T>',
        type: SkillType.SpecialAllAttack,
        power: 450,
        specialPointConsumption: 150,
        description: '敵１体に大ダメージ',
      },
    ],
    commandOptions: [],
  },

  {
    name: 'ゴーファー',
    type: 'FieldPlayer',
    drawState: ActionCharacterDrawState.Normal,
    status: {
      currentHitPoint: 512,
      currentSpecialPoint: 300,
      condition: '通常',
      command: 'たたかう',
      onDamage: false,
      onDamagePoint: 0,
    },
    parameter: {
      attack: 20,
      defense: 100,
      hitPoint: 512,
      specialPoint: 500,
      speed: 60,
      level: 0,
      specialAttack: 0,
      specialDefense: 0,
      experiencePoint: 0,
    },
    skills: [
      {
        name: 'ゴルーチン',
        type: SkillType.PhysicalAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '敵全体にダメージを与える',
      },
      {
        name: 'ガベージコレクション',
        type: SkillType.PhysicalAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '敵全体にダメージを与える。経過ターンが多いほどダメージが増える',
      },
    ],
    commandOptions: [],
  },
  {
    name: 'タックス',
    type: 'FieldPlayer',
    drawState: ActionCharacterDrawState.Normal,
    status: {
      currentHitPoint: 640,
      currentSpecialPoint: 300,
      condition: '通常',
      command: 'たたかう',
      onDamage: false,
      onDamagePoint: 0,
    },
    parameter: {
      attack: 30,
      defense: 100,
      hitPoint: 640,
      specialPoint: 500,
      speed: 70,
      level: 0,
      specialAttack: 0,
      specialDefense: 0,
      experiencePoint: 0,
    },
    skills: [
      {
        name: 'grep',
        type: SkillType.PhysicalAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '特定の',
      },
    ],
    commandOptions: [],
  },
  {
    name: 'ドロイド',
    type: 'FieldPlayer',
    drawState: ActionCharacterDrawState.Normal,
    status: {
      currentHitPoint: 720,
      currentSpecialPoint: 300,
      condition: '通常',
      command: 'たたかう',
      onDamage: false,
      onDamagePoint: 0,
    },
    parameter: {
      attack: 50,
      defense: 100,
      hitPoint: 720,
      specialPoint: 500,
      speed: 90,
      level: 0,
      specialAttack: 0,
      specialDefense: 0,
      experiencePoint: 0,
    },
    skills: [
      {
        name: 'ライフタイム',
        type: SkillType.PhysicalAttack,
        power: 450,
        specialPointConsumption: 100,
        description: '相手の時間を止める',
      },
    ],
    commandOptions: [],
  },
]
