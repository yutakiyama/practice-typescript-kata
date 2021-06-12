// 3-3. イベント
// @see https://qiita.com/uhyo/items/0e7821ce494024c98da5#3-3-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88

// E
interface EventPayloads {
  start: {
    user: string;
  };
  stop: {
    user: string;
    after: number;
  };
  end: {};
}

// emitメソッドが間違ったイベント名やデータに対してはエラーを出すようにしたい
// ただしEventDischargerの汎用性を上げるために、EventPayloadsを型引数Eとして受け取れるようになっている
// emitはEに定義されたイベントを適切に受け付ける必要がある
class EventDischarger<E> {
  emit<EK extends keyof E>(
    eventName: EK,
    payload: E[EK]
  ) {
    // 省略
  }
}

// 使用例
const ed = new EventDischarger<EventPayloads>();
ed.emit("start", {
  user: "user1"
});
ed.emit("stop", {
  user: "user1",
  after: 3
});
ed.emit("end", {});

// エラー例
ed.emit("start", {
  user: "user2",
  after: 0
});
ed.emit("stop", {
  user: "user2"
});
ed.emit("foobar", {
  foo: 123
});

export {};
