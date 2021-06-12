// 3-3. イベント
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#3-4-reducer
// reducerは現在の数値とアクションを受け取って、それに応じて多々らしい数値を返す関数。
// あくしょんは3種類ある
// reducerに適切な型をつける

type Action = {
  type: 'increment';
  amount: number;
} | {
    type: 'decrement';
    amount: number;
} | {
    type: 'reset';
    value: number;
};


const reducer = (state: number, action: Action) => {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    case "reset":
      return action.value;
  }
};

// 使用例
reducer(100, {
    type: 'increment',
    amount: 10,
}) === 110;
reducer(100, {
    type: 'decrement',
    amount: 55,
}) === 45;
reducer(500, {
    type: 'reset',
    value: 0,
}) === 0;

// エラー例
reducer(0,{
    type: 'increment',
    value: 100,
});

export {};
