# typeof

- 透過型別來決定

### 正確

```typescript
function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}
```

### 錯誤

```typescript
function add(first: string | number, second: string | number) {
  return first + second;
}
```
