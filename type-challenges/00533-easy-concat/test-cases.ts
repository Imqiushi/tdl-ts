/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-20 07:48:33
 * @LastEditors: jind
 * @LastEditTime: 2022-04-20 07:48:35
 */

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>
]
