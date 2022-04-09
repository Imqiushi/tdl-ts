/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-09 22:18:44
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 22:24:49
 */

interface PointTest {
  x: number
  y: number
}

type An = {
  a: string
}

type Bn = {
  b: number
}

type Cn = An & Bn

const a: Cn = {
  a: 'ws',
  b: 12,
}

// type 不能重名

// interface 可以重名

interface Name {
  name: string
}

interface AgeTest {
  age: number
}
