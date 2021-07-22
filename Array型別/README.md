## Array

### 建立方法

## 1

```javascript
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ['1', '2', '3'];
```

## 2

```javascript
let arr3: Array<number> = [1, 2, 3];
let arr4: Array<string> = ['1', '2', '3'];
```

## 3

```javascript
let arr5: number[] = new Array();
let arr5: number[] = new Array(1, 2, 3);
```

## 4 - 元組(不建議使用)

```javascript
let arr6: [string, number];
arr6 = ['hello', 10]; // 多寫少寫都會報錯,且需要對應位置
```
