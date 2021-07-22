# void

### 若回傳值註記為 void 時，沒有回傳值或是回傳值為 undefined 都是可以被 TS 接受的。

```typescript
const test1 = (): void => {
  return undefined;
};
test1(); // Pass

const test2 = (): void => {
  return 1 + 2;
};
test2(); // fail
```
