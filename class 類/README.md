# Class 類

[神 Q 超人](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-class-%E7%94%A8%E6%B3%95-20ade3ce26b8)

### public(公開) - 預設

- public 是指讓該 Property 公開存取

### protected(保護)

- 只能父子傳遞，但 Instance 任然看不到
- 只能繼承跟內部使用

### private(私有)

- 可以付值，但 Instance 無法顯示
- 只允许在 class 的内部被调用，外部不允许调用

### readonly(只讀)

- 只能讀取，不能更改或是需叫

### static

- 為一個 function，只有在呼叫時才能使用

### Get vs Set

- Get 限制 => 因此不能有任何參數，而且一定要有回傳值，否則會報錯。

- Set 限制 => 模擬指派任何值到屬性的方式進行物件的存值，只能有一個參數

```typescript
class Person {
  constructor() {}
  private _name: string;

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }
}

let person = new Person();

// person._name = "apple"; // 无法访问到_name变量

person.name = 'apple';

console.log(person.name); // 输出 apple
```

# 基本使用方法

```typescript
// 定義
class girl {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  say(): void {
    console.log('say function');
  }
}
// 使用

const vianna: girl = new girl('vianna', 23);
vianna.say();

// 父子傳遞
class boy extends girl {
  say(): void {
    return super.say();
  }
}
const david: boy = new boy('david', 23);
david.say();
```

# 關於繼承

- 基礎 class 物件

```typescript
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log('say hello');
  }
}
const david: Person = new Person('jan', 18);
david.say();
```

- 參數繼承

```typescript
class Father extends Person {
  tall: number;
  constructor(tall: number) {
    super('bill', 16); // super需寫在最前面
    this.tall = tall;
  }
}
const bill: Father = new Father(198);
```

- 函式繼承

```typescript
class GeandFa extends Person {
  sayHello() {
    return super.say();
  }
}
const eric: GrandFa = new GrandFa();
eric.sayHello();
```
