# Enum

[神 Q 超人](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%96%84%E7%94%A8-enum-%E6%8F%90%E9%AB%98%E7%A8%8B%E5%BC%8F%E7%9A%84%E5%8F%AF%E8%AE%80%E6%80%A7-%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95-feat-javascript-b20d6bbbfe00)

- 它來管理多個同系列的常數（不可修改的變數），做為狀態的判斷所使用。

## 好處

- 優化程式碼，提高可讀性

_JavaScript 沒有 Enum 但可以透過[其他方法](https://dotblogs.com.tw/initials/2020/07/14/183115)達到相同效果_

```typescript
// 預設為0
enum requestStatusCodes {
  error
  success
}

// 透過手動方式更改順序值
enum requestStatusCodes {
  error = 1,
  success = 2
}

//英文也是可以
enum requestStatusCodes {
  error = 'A',
  success = 'B'
}

// 隨便定義也是可以，但沒有意義
enum requestStatusCodes {
  error = 1,
  success = 'ok'
}
```
