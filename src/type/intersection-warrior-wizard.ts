type Warrior = {
  hp: number
  skills: string[]
}

type Magician = {
  hp: number
  mp: number
  magics: string[]
}

// 交差型 => 2つの型の両方の特徴を備えた型
const magicWarrior: Warrior & Magician = {
  hp: 85,
  mp: 34,
  skills: ["たたかう"],
  magics: ["かいふく"],
}
console.log(magicWarrior.hp)
