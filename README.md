## NextJSプロジェクト作成
### NextJS
npmでNextJSプロジェクトを構築。

* create-next-app
  ```
  $ npx create-next-app . --use-npm
  ```

### Tailwind CSS
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

## ディレクトリ構成
* components
  * Layout.js
  * Auth.js
* lib
* pages
  * index.js
* styles
  * globals.css
* tailwind.config.js

### git push
* initial commit
  ```
  $ git remote add origin git@github.com:hfujiyos/nextjs-blog-demo.git
  $ git push -u origin main
  ```

## ライブラリ追加
* Tailwindcss UI
  ```
  $ npm i @tailwindcss/forms
  $ npm install @heroicons/react
  ```

## 参考文献
* [Tailwind CSS｜Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
* [Tailwindcss UI](https://tailwindui.com/)
* [Tailwindcss UI｜(Sign-in and Registration](https://tailwindui.com/components/application-ui/forms/sign-in-forms)
* [npm｜@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms)

