# small-business-digital-support

商工会や小規模事業者支援機関に提示するための「小規模事業者向けデジタル活用・業務改善支援」1ページサービス紹介サイトです。

白ベースに青系アクセントを使い、営業色を強くしすぎず、信頼感と相談しやすさが伝わる構成にしています。スマートフォン表示とA4印刷・PDF化を想定したレイアウトです。

## 使用技術

- Next.js
- TypeScript
- Tailwind CSS
- React

## 画像差し替え方法

制作実績の画像は `public/images` に配置しています。

差し替える場合は、同じファイル名で画像を置き換えてください。

- `public/images/accounting-lp.svg`：会計事務所LP
- `public/images/cafe-lp.svg`：古民家カフェLP
- `public/images/ai-school-lp.svg`：AIスクールLP
- `public/images/bodywork-lp.svg`：整体院LP
- `public/images/minicrm.svg`：MiniCRM

PNGやJPGに変更したい場合は、`app/page.tsx` の `works` 配列にある `image` のパスも変更してください。

## ローカル起動方法

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

ブラウザで `http://localhost:3000` を開いて確認してください。

PowerShell の実行ポリシーで `npm` が止まる場合は、`npm.cmd install`、`npm.cmd run dev` のように `npm.cmd` を使ってください。

## Vercelデプロイ方法

1. GitHubなどのリポジトリにこのプロジェクトを push します。
2. Vercel にログインします。
3. `Add New...` から `Project` を選択します。
4. 対象リポジトリを import します。
5. Framework Preset が `Next.js` になっていることを確認します。
6. `Deploy` を実行します。

通常は追加設定なしでデプロイできます。

## PDF化方法

1. ローカルまたはデプロイ済みURLをブラウザで開きます。
2. ブラウザの印刷画面を開きます。
   - Windows: `Ctrl + P`
   - macOS: `Command + P`
3. 送信先で `PDFに保存` または `Save as PDF` を選択します。
4. 用紙サイズを `A4` にします。
5. 余白は `既定` または `最小` を選択します。
6. 必要に応じて倍率を調整し、1ページに収まるか確認して保存します。

印刷時はボタンなどの画面操作用要素が非表示になるよう、`app/globals.css` に print 用CSSを用意しています。
