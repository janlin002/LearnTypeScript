# class

[神 Q 超人](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-class-%E7%94%A8%E6%B3%95-20ade3ce26b8)

### public(公開) - 預設

- public 是指讓該 Property 公開存取

### protected(保護)

- 只能父子傳遞，但 Instance 任然看不到

### private(私有)

- 可以付值，但 Instance 無法顯示

### readonly(只讀)

## 使用方法

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
