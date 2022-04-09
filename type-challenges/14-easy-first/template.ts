/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-09 23:05:01
 * @LastEditors: jind
 * @LastEditTime: 2022-04-09 23:21:52
 */
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
