# Interface

[神 Q 超人](https://medium.com/enjoy-life-enjoy-coding/typescript-%E5%BE%9E-ts-%E9%96%8B%E5%A7%8B%E5%AD%B8%E7%BF%92%E7%89%A9%E4%BB%B6%E5%B0%8E%E5%90%91-interface-%E7%94%A8%E6%B3%95-77fd0959769f)

介面一般首字母大寫。[有的程式語言中會建議介面的名稱加上 I 字首](<https://docs.microsoft.com/en-us/previous-versions/dotnet/netframework-1.1/8bc1fexb(v=vs.71)?redirectedfrom=MSDN>)。

Interface 只描述有哪些 Method 和 Property ，不包含怎麼執行。

### 可選屬性 - ?

有時候建立一個介面，但不想要每次都有那麼多屬性，希望可以更靈活一點

## 使用方法

```typescript
// 定義
interface girl {
  name: string;
  age: number;
  tall: number;
  boyFriend: boolean;
}

// 調用
const vianna: girl = {
  name: 'vianna',
  age: 18,
  tall: 165,
  boyFriend: false,
};

console.log(vianna.name);
console.log(vianna.age);
console.log(vianna.tall);
console.log(vianna.boyFriend);
```
