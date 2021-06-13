// 4-6. ページを描画する関数
// @see https://qiita.com/uhyo/items/e4f54ef3b87afdd65546#4-6-%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%92%E6%8F%8F%E7%94%BB%E3%81%99%E3%82%8B%E9%96%A2%E6%95%B0

type Page =
  | {
      page: 'top';
    }
  | {
      page: 'mypage';
      userName: string;
    }
  | {
      page: 'ranking';
      articles: string[];
    };

type PageGenerators = {
  [P in Page['page']]: (page: Extract<Page, { page: P }>) => string;
};
const pageGenerators: PageGenerators = {
  top: () => '<p>top page</p>',
  mypage: ({ userName }) => `<p>Hello, ${userName}!</p>`,
  ranking: ({ articles }) =>
    `<h1>ranking</h1>
         <ul>
        ${articles.map((name) => `<li>${name}</li>`).join('')}</ul>`,
};
const renderPage = (page: Page) => pageGenerators[page.page](page as any);

export {};
