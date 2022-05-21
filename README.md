## NextJS プロジェクト作成

### NextJS

npm で NextJS プロジェクトを構築。

- create-next-app
  ```
  $ npx create-next-app . --use-npm
  ```

### Tailwind CSS

Tailwind CSS 3.0 を導入

- TailwindCSS インストール

  ```
  $ npm install -D tailwindcss postcss autoprefixer
  ```

- TailwindCSS 初期化

  ```
  $ npx tailwindcss init -p
  ```

- tailwnd.config.js を更新

  ```js
  module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- styles/globals.css

  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

- 開発サーバー起動
  ```
  $ npm run dev
  ```

## ディレクトリ構成

- components
  - Layout.js
  - Auth.js
- pages
  - index.js
- styles
  - globals.css
- tailwind.config.js

### Prettier

- package.json
  ```
  "prettier": {
    "trailingComma": "all",// 末尾のカンマあり
    "tabWidth": 2,// tab の長さは半角スペース 2 つ
    "semi": true,// セミコロンあり
    "singleQuote": true,// シングルクォーテーションに統一
    "jsxSingleQuote": true,//jsx もシングルクォーテーションに統一
    "printWidth": 100 // １ 行の最大文字数 100
  },
  ```

### GitHub

- initial commit
  ```
  $ git remote add origin git@github.com:hfujiyos/nextjs-blog-demo.git
  $ git push -u origin main
  ```

## ライブラリ追加

- Tailwindcss UI & Heroicons

  ```
  $ npm i @tailwindcss/forms
  $ npm install @heroicons/react
  ```

- Cookie & useSWR

  ```
  クッキー
  $ npm i universal-cookie

  クライアント側のデータフェッチ
  $ npm i swr
  ```

## 参考文献

- [Tailwind CSS ｜ Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [Tailwindcss UI](https://tailwindui.com/)
- [Tailwindcss UI ｜(Sign-in and Registration](https://tailwindui.com/components/application-ui/forms/sign-in-forms)
- [npm ｜@tailwindcss/forms](https://www.npmjs.com/package/@tailwindcss/forms)
- [Heroicons](https://heroicons.com/)
