# Type vs Interface

[鐵人賽](https://ithelp.ithome.com.tw/articles/10224646)

### 相同點

> 型別註記/型別檢測行為

> 介面和型別別名都可以表示物件格式，也都可以使用可選屬性(Optional Properties)、唯獨屬性(Read-only Properties)、任意屬性

### 相異點

> Interface 只能表示物件格式，無法表現原始型別、列舉、元組和複合型別; Type 可以表現任何型別

> Interface 可以有多個相同名稱，Type 無法

> 擴展的作法有兩種：一種是 extends，只有 Interface 可以使用 ; 另一種作法是 union 或 intersection ， Type 和 Interface 都可以使用。
