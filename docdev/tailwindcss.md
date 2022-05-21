## [Tailwindcss UI](https://tailwindui.com/)
* HTML版を利用するにはJSX記法に書き換える
  * classからclassNameへ置換
  * img / inputタグは終了タグを追加
  * Lower camelCaseへ置換
* REACT版はJSX記法であるためそのまま使用できる
  * Nextjs ver11.0以降で、<img>タグを使用する際、コメント文を追加してES Lint無効化
  {/* eslint-disable-next-line @next/next/no-img-element */}
  
## CSS
### 単位
* px：ピクセル。画素数
* rm：1rem=16px
* %：親要素に対する割合
* vh：ビューポート（画面サイズ）の高さに対する割合。100vhは画面の高さと同じ（100%）を表す
* vw：ビューポートの幅に対する割合
* vmin：画面の高さか幅の小さい方に対する割合
* vmax：画面の高さか幅の大きい方に対する割合

## Tailwind CSS
### Sizing
* min-h-screen（画面最小高｜100%）
min-height: 100vh;
* w-screen（画面幅｜100%）
width: 100vw;
* h-14（要素高さ｜56px）
height: 3.5rem;	56px
* w-full（要素幅｜100%）
width: 100%;

### Spacing
* py-0（上下0pxﾊﾟﾃﾞｨﾝｸﾞ）
padding-top: 0px;
padding-bottom: 0px;
* px-2（上下8pxﾊﾟﾃﾞｨﾝｸﾞ）
padding-left: 0.5rem;
padding-right: 0.5rem;
8px
* pl-8（左32pxﾊﾟﾃﾞｨﾝｸﾞ）
padding-left: 2rem;	32px
* space-x-4（要素間ｽﾍﾟｰｽ）
--tw-space-x-reverse: 0;
margin-right: calc(1rem * var(--tw-space-x-reverse));
margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));

### Flexbox
* flex（ﾌﾚｯｸｽ使用）
display: flex;
* flex-col（ﾌﾚｯｸｽを横方向から縦方向に変更）
flex-direction: column;

### Box Alignment
* justify-center（ﾌﾚｯｸｽ方向に対してｾﾝﾀﾘﾝｸﾞ）
justify-content: center;
* items-center（ｱﾗｲﾒﾝﾄ方向に対してｾﾝﾀﾘﾝｸﾞ）
align-items: center;
* justify-around（ﾌﾚｯｸｽ方向に対して等間隔配置）
justify-content: space-around;

### Typography
* text-gray-600（ﾃｷｽﾄ｜ｸﾞﾚｲ｜濃い目600）
--tw-text-opacity: 1;
color: rgba(75, 85, 99, var(--tw-text-opacity));
* text-sm（ﾃｷｽﾄ｜ｽﾓｰﾙ｜14px）
font-size: 0.875rem;
line-height: 1.25rem;	14px
* font-mono（ﾌｫﾝﾄ｜ﾓﾉ）
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
* text-4xl（ﾃｷｽﾄ｜36px）
font-size: 2.25rem;
line-height: 2.5rem;	36px

### Backgrounds
* bg-gray-800（ﾊﾞｯｸｸﾞﾗﾝﾄﾞ｜ｸﾞﾚｲ｜濃い目800）
--tw-bg-opacity: 1;
background-color: rgba(31, 41, 55, var(--tw-bg-opacity));

### Borders
* border-t（ﾎﾞｰﾀﾞｰ｜ﾄｯﾌﾟ）
border-top-width: 1px;
* rounded-full（ﾎﾞｰﾀﾞｰ｜要素境界外側の角丸め｜真円9999px）
border-radius: 9999px;

## 参考文献
* [Tailwind CSS｜Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
* [Tailwindcss UI](https://tailwindui.com/)
* [Tailwind CHEET SHEET](https://nerdcave.com/tailwind-cheat-sheet)
* [TechAcademy｜CSSで要素の高さを指定する100vhと100%の違い](https://techacademy.jp/magazine/38188)
