# 型演習 memo

## 2-1. ジェネリクス

- ジェネリクスを用いると、型安全とコードの共通化を両立することができる。
  - ジェネリクスは型も引数のように扱う。

https://qiita.com/uhyo/items/e2fdef2d3236b9bfe74a#%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AA%E3%82%AF%E3%82%B9

## 2-3. 省略可能なプロパティ

declare とは、下記のように関数や変数の型を中身なしに宣言できる構文.

```ts
declare function foo(arg: number): number;
```

## 2-5. useState

React の useState はステートを宣言するために使用される。
引数は一つで宣言されるステートの初期値である。
