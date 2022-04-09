/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 22:47:37
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 22:54:23
 */

type World = 'world'

type Greenting = `hello ${World}`

type HH = string[]

type UU = HH extends any[] ? 'a' : 'b'
