/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-03-26 17:29:24
 * @LastEditors: jind
 * @LastEditTime: 2022-04-05 23:43:04
 */

type MyPick<T, K extends keyof T> = any

function myPick(todos, key) {
  console.log()

  const obj = {}
  let a = 'e'

  console.log(todos)
}

type Horse = 's'
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse
}

const conforms: OnlyBoolsAndHorses = {
  del: true,
  red: 's',
}
