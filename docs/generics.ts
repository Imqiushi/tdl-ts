/*
 * @Description: 类型约束
 * @Autor: jind
 * @Date: 2022-04-08 23:36:28
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 23:36:28
 */

interface Lengthwise {
  length: number
  name: string
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length) // Now we know it has a .length property, so no more error
  return arg
}
