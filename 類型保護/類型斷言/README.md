# 類型斷言

### 正確

```typescript
interface Fire {
  killPeople: boolean;
  say(): void;
}
interface Water {
  killPeople: boolean;
  skill(): void;
}

function superWoman(aniaml: Fire | Water) {
  if (aniaml.killPeople) {
    (aniaml as Fire).say();
  } else {
    (aniaml as Water).skill();
  }
}
```

### 錯誤

```typescript
interface Fire {
  killPeople: boolean;
  say(): void;
}
interface Water {
  killPeople: boolean;
  skill(): void;
}

function superman(animal: Fire | Water) {
  animal.say(); // 不能準確的判断聯合類型具體的實例是什么。
}
```
