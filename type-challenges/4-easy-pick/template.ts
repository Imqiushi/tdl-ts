/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-03-26 17:29:24
 * @LastEditors: jind
 * @LastEditTime: 2022-04-05 20:10:51
 */

type MyPick<T, K> = any

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
