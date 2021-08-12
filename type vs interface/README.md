# Type vs Interface

[鐵人賽](https://ithelp.ithome.com.tw/articles/10224646)

### 相同點

> 型別註記/型別檢測行為

> 介面和型別別名都可以表示物件格式，也都可以使用可選屬性(Optional Properties)、唯獨屬性(Read-only Properties)、任意屬性

```javascript
interface Demo1 {
  name: string;
  age: number;
}
type PersonInfo {
  name: string;
  age: number;
}

const Una: Demo1 = {
  name: "Una",
  age: '31',  // 對應型別錯誤，報錯
  gender: girl // 多了屬性，報錯
};

const Una: PersonInfo = {
  name: "Una",
  age: '31',  // 對應型別錯誤，報錯
  gender: girl // 多了屬性，報錯
};
```

### 相異點

> Interface 只能表示物件格式，無法表現原始型別、列舉、元組和複合型別; Type 可以表現任何型別

> Interface 可以有多個相同名稱，Type 無法

```js
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 }; // 會自動組合
```

> 擴展的作法有兩種：一種是 extends，只有 Interface 可以使用 ; 另一種作法是 union 或 intersection ， Type 和 Interface 都可以使用。

```bash
只有 Interface 可以使用extends
```
