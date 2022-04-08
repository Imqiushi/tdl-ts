/*
 * @Description: 描述
 * @Autor: jind
 * @Date: 2022-04-08 12:44:34
 * @LastEditors: jind
 * @LastEditTime: 2022-04-08 12:49:49
 */

type PersonDemo = { age: number; name: string; sex: 'male' | 'female' }

// indexed number
type age = PersonDemo['age']

// ‘male’ | 'female' 索引值
type sex = PersonDemo['sex']

type MyArray = [{ name: 'Alice'; age: 15 }, { name: 'Bob'; age: 23 }, { name: 'Eve'; age: 38; sex: 'male' }]

// union { name: 'Alice'; age: 15 } | { name: 'Bob'; age: 23 } | { name: 'Eve'; age: 38 }
type array = MyArray[number]

type akeyof = keyof array
