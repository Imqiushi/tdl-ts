/*
 * @Description: keyof
 * @Autor: jind
 * @Date: 2022-04-08 12:39:30
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 12:43:15
 */

type PointY = {
  x: number
  y: number
}

type PY = keyof PointY // union 'x' | 'y'

type ArrayishDemo = {
  [n: number]: unknown // 1:unknown
}

type ad = keyof ArrayishDemo // number

type MapishDemo = {
  [n: string]: boolean
}

type md = keyof MapishDemo // string | number javascript的机制问题 obj[0] as obh['0']
