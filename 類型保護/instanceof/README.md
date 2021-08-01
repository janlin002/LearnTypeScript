# instanceof

- 比如現在要作類型保護的是一个對象

```typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
// instanceof 在...的情況下
```
