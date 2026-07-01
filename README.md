# small-business-digital-support

商工会や小規模事業者支援機関に提示するための「小規模事業者向けデジタル活用・業務改善支援」紹介サイトです。

商工会担当者が小規模事業者へ紹介しやすいように、ホームページ・LP制作だけでなく、Excel・紙管理の整理、業務改善ツール、AI活用支援まで相談できることを1ページで伝える構成にしています。

## プロジェクト目的

- 小規模事業者が抱えやすいWeb活用・業務改善の悩みを分かりやすく整理する
- 商工会や支援機関が「紹介しやすい」信頼感のある資料として使える状態にする
- A4印刷やPDF化にも対応し、相談・提案の場で使いやすくする

## 使用技術

- Next.js
- TypeScript
- Tailwind CSS

## 実績画像の差し替え方法

制作実績の画像は `public/images` に以下のファイル名で配置してください。

- `minicrm.png`：MiniCRM
- `accounting-lp.png`：会計事務所LP
- `cafe-lp.png`：古民家カフェLP
- `ai-school-lp.png`：AIスクールLP
- `bodywork-lp.png`：整体院LP

画像はカード内で見切れにくいように `object-contain` で表示しています。スクリーンショットを差し替える場合は、同じファイル名で上書きしてください。

## 実績リンクURLの変更方法

実績カードのリンク先は `app/page.tsx` の `WORK_LINKS` で管理しています。

```ts
const WORK_LINKS = {
  minicrm: "https://mini-crm-for-small-business-ads8.vercel.app/dashboard",
  accountingLp: "https://accounting-firm-lp.vercel.app/",
  cafeLp: "https://komorebi-cafe-lp.vercel.app/",
  aiSchoolLp: "https://ai-school-lp-theta.vercel.app/",
  bodyworkLp: "https://local-business-lp-template-seitai.vercel.app/"
} as const;
```

公開URLやデモURLが変わったら、該当するURLだけ差し替えてください。外部URLの場合は別タブで開くようにしています。

## 画像最適化

PNG画像を配置した後、Web用に最適化する場合は次を実行してください。

```bash
npm run optimize:images
```

このコマンドは対象画像を横1200px以内に縮小し、PNG圧縮と必要に応じた色数調整で1枚200KB以下を目標にします。初回実行時は `public/images/_originals` に元画像をバックアップします。

## ローカル起動方法

```bash
npm install
npm run dev
```

PowerShell で `npm` が止まる場合は、以下のように `npm.cmd` を使ってください。

```powershell
npm.cmd install
npm.cmd run dev
```

ブラウザで `http://localhost:3000` を開いて確認します。

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
2. 印刷画面を開きます。
   - Windows: `Ctrl + P`
   - macOS: `Command + P`
3. 送信先で `PDFに保存` または `Save as PDF` を選択します。
4. 用紙サイズを `A4` にします。
5. 必要に応じて倍率を調整し、1〜2ページに収まるか確認して保存します。

## 商工会向け紹介資料としての使い方

商工会や支援機関の相談窓口で、小規模事業者に向けたデジタル活用・業務改善支援の説明資料として使う想定です。画面表示だけでなく、A4印刷やPDF配布でも読めるようにしています。
