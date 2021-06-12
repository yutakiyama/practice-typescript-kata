// 1-2. オブジェクトの型
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546

interface User{
  name: string,
  age: number,
  private: boolean
}

function showUserInfo(user: User) {
    // 省略
}

// 使用例
showUserInfo({
    name: 'John Smith',
    age: 16,
    private: false,
});

// エラー例
showUserInfo({
    name: 'Mary Sue',
    private: false,
});
const usr: User = {
    name: 'Gombe Nanashino',
    age: 100,
};

export {};
