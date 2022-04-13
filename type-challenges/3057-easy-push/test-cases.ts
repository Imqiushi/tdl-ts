/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 22:36:16
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 23:30:43
 */
/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 22:36:04
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 22:36:04
 */
import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Push<[], 1>, [1]>>,
  Expect<Equal<Push<[1, 2], '3'>, [1, 2, '3']>>,
  Expect<Equal<Push<['1', 2, '3'], boolean>, ['1', 2, '3', boolean]>>
]
