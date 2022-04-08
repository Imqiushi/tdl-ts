/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 12:51:06
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 13:06:12
 */

type MappedDemo = {
  [key: string]: boolean | string
}

const confirmDemo: MappedDemo = {
  a: true,
  b: 'dd',
  // c: 3, //索引签名不能为其他类型
}

type OptionsFlags<T> = {
  [P in keyof T]: boolean
}

type FeatureFlags = {
  darkMode: () => void
  newProfile: () => void
}

type NewFlags = {
  a: number
  b: string
}

//读取key 值 重新赋值 darkMode 遍历类型 取出 key 然后重复key
type optionsDemo = OptionsFlags<FeatureFlags> // {darkMode:boolean}

type FLag = OptionsFlags<NewFlags> // {a:boolean b:boolean}

// 增加readonly 属性
type MyReadonlyBase<T> = {
  readonly [P in keyof T]: T[P]
}
// add readonly
type NewReadonly = MyReadonlyBase<NewFlags>

// remove readonly
type RemoveReadonly<T> = {
  -readonly [P in keyof T]: T[P]
}

type AReadonly = {
  readonly name: string
  readonly age: number
}

type RemoveNewReadonly = RemoveReadonly<AReadonly>
