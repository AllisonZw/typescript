// ts 类型
// ts 中的类型分类：内置类型（DOM、Promise 原始方法）基础类型、高级类型、自定义类型
// ts中 ：后面的都是类型  =  后面的都是值（在js语法中）
// ts 一切从安全的角度来触发，所以ts的类型系统是严格的，不允许隐式的类型转换，比如不能将一个数字类型赋值给一个字符串类型。
// ts 在编写的时候代码是没有执行的
// ts还有自动的类型推导，不需要写类型注解，但是可以用类型断言来指定类型。

let name: string = 'jiangwen'
let age: number = 25
let isMarried: boolean = true

// 大写的类型都是装箱类型，包装类
// let s1: string = 'abc'
// let s2: string = new String()
// let s3: String = new String('abc')
// let s4: String = 'abc'

let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['a', 'b', 'c']
let arr3: (string | number)[] = ['a', 1, 'b', 2, 'c']
let arr4: Array<string | number> = ['a', 1, 'b', 2, 'c']

// 元组 规定长度和存储的类型
let tuple1: [string, number, boolean] = ['a', 1, true]

// 添加只能添加元组中已经存在的类型
// tuple1.push('abc') // 为了安全，因为不能确定这个值是否存在
// tuple1[3]

// 枚举类型，自带类型的对象，自动增长，数字类型的枚举 可以反举
// enum USER_ROLE {
// 	USER,
// 	ADMIN = 6,
// 	MANAGER,
// 	OTHER = 'ABC' // 异构枚举（枚举中多种类型）
// }
// console.log('🚀 ~ file: index.ts:32 ~ USER_ROLE:', USER_ROLE)

const enum USER_ROLE {
	USER,
	ADMIN = 6,
	MANAGER,
	OTHER = 'ABC' // 异构枚举（枚举中多种类型）
}
// "const" 枚举仅可在属性、索引访问表达式、导入声明的右侧、导出分配或类型查询中使用。
// 如果不需要对象，如果只是使用值，可以直接采用常量枚举，否则用普通枚举
console.log(USER_ROLE.USER)

// null 和 undefined 类型
// 任何类型的子类型，一般情况下 都是严格模式，null和undefined 不能赋值给其他类型，除非使用类型断言
// let str: string = null

// void 代表函数的返回值为空，一般用于声明没有返回值的函数
function fn(): void {}

// never 类型
// 任何类型的子类型，一般情况下 都是严格模式，never类型只能赋值给never类型，一般用于函数抛出异常的情况
function fn1(): never {
	// throw new Error('error')
	while (true) {}
}
let a: string = fn1()
// 类型保护，保障程序的类型安全，类型保护是一种类型系统的重要特性，可以帮助我们更好的编写代码，提高代码的可维护性。

// 针对不同的类型做不同处理
function validate(val: never) {}
function getResult(strgOrNumOrBool: string | number | boolean) {
	// typeod 可以判断类型 js
	if (typeof strgOrNumOrBool === 'number') {
		return strgOrNumOrBool.toFixed(2)
	}
	if (typeof strgOrNumOrBool === 'boolean') {
		return strgOrNumOrBool.valueOf()
	}
	if (typeof strgOrNumOrBool === 'string') {
		return strgOrNumOrBool.toUpperCase()
	}
	validate(strgOrNumOrBool) // 类型保护，避免运行时错误
}
let union: string | number | boolean | never // never 和其他类型做联合类型最终是不显示的

// object 对象类型
// object, {} , Object
// 任何类型的子类型，一般情况下 都是严格模式，object类型可以赋值给其他类型，但是不能调用其方法和属性
// object 非基础类型
const create = (target: object) => {}
create(() => {})
create({})
create([])

// Symbol BigInt es6 新增的
let s1: symbol = Symbol.for('1')
let s2: symbol = Symbol.for('1')
console.log(s1, s2)
console.log(s1 === s2)

let b1: bigint = BigInt(Number.MAX_SAFE_INTEGER + 100)

// any 任何类型 anyScript 有时候要对类型做转换，无法直接转化，any 类型可以做任何类型，包括 anyScript 类型
let name2 // any 类型

// string number boolean null undefined array tuple void never object symbol bigint any 类型

// 模块之间的隔离
export {}
