/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-09 23:05:08
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 23:07:02
 */
import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>
]
