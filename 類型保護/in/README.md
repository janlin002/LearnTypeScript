# In

- 透過查看是否有指定 function，來決定要呼叫哪一個 function

```typescript
interface Demo01 {
  have: boolean;
  isHave(): void;
}

interface Demo02 {
  have: boolean;
  UnHave(): void;
}

function showDemo(DemoType: Demo01 | Demo02) {
  if ('isHave' in DemoType) {
    DemoType.isHave();
  } else {
    DemoType.UnHave();
  }
}
```
