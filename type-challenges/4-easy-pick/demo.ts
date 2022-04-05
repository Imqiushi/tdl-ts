/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-05 20:10:16
 * @LastEditors: jind
 * @LastEditTime: 2022-04-05 23:45:42
 */

const id = <HTMLCanvasElement>document.getElementById('dd')

type Person = { age: number; name: string; alive: boolean }

type Age = Person['age']
