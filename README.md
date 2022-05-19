## NextJSプロジェクト作成
npmでNextJSプロジェクトを構築。

* create-next-app
  ```
  $ npx create-next-app . --use-npm
  ```

## Tailwind CSS
Tailwind CSS 3.0を導入

* TailwindCSSインストール
  ```
  $ npm install -D tailwindcss postcss autoprefixer
  ```

* TailwindCSS初期化
  ```
  $ npx tailwindcss init -p
  ```

* tailwnd.config.jsを更新
  ```js
  module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```

* styles/globals.css
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

* 開発サーバー起動 
  ```
  $ npm run dev
  ```

### ディレクトリ構成
* components
  * Layout.js
  * Auth.js
* lib
* pages
  * index.js
* styles
  * globals.css
* tailwind.config.js

<!-- ## ライブラリ追加
* node-fetch
  ｻｰﾊﾞｰｻｲﾄﾞのnode-fetchを利用するためﾗｲﾌﾞﾗﾘｲﾝｽﾄｰﾙ
  ```
  $ npm install node-fetch
  ``` -->

## 参考文献
* [Tailwind CSS｜Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
