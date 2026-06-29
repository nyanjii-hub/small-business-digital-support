import Image from "next/image";

const concerns = [
  "ホームページを見直したい",
  "SNSを活用したい",
  "ExcelやAccessで管理していて担当者しか分からない",
  "顧客管理を効率化したい",
  "AIを活用したいが何から始めればよいか分からない",
  "書類作成を効率化したい"
];

const services = [
  {
    title: "ホームページ・LP制作",
    description:
      "既存サイトの見直しから、事業内容が伝わる1ページLPまで。公開後の更新しやすさも重視します。"
  },
  {
    title: "小規模事業者向け業務改善ツール",
    description:
      "Excel・Access・紙の台帳で属人化している管理を、扱いやすい小さなWebツールに整理します。"
  },
  {
    title: "AI活用支援",
    description:
      "文章作成、問い合わせ対応、資料作成など、日々の業務に合わせて無理なく使える始め方を支援します。"
  },
  {
    title: "業務改善相談",
    description:
      "現状の業務を一緒に確認し、費用対効果の高い順に改善案を整理します。"
  }
];

const works = [
  {
    title: "会計事務所LP",
    image: "/images/accounting-lp.svg",
    note: "専門性と相談しやすさを伝える構成"
  },
  {
    title: "古民家カフェLP",
    image: "/images/cafe-lp.svg",
    note: "雰囲気、メニュー、来店導線を整理"
  },
  {
    title: "AIスクールLP",
    image: "/images/ai-school-lp.svg",
    note: "講座内容と申込導線を明確化"
  },
  {
    title: "整体院LP",
    image: "/images/bodywork-lp.svg",
    note: "症状別の訴求と予約導線を配置"
  },
  {
    title: "MiniCRM",
    image: "/images/minicrm.svg",
    note: "顧客・対応履歴を小さく管理"
  }
];

const steps = ["相談", "課題整理", "提案", "制作・導入", "サポート"];

export default function Home() {
  return (
    <main className="print-page mx-auto max-w-6xl overflow-x-hidden px-4 py-5 text-ink sm:px-6 lg:px-8">
      <section className="print-compact grid grid-cols-1 gap-8 border-b border-slate-200 py-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="min-w-0">
          <p className="mb-3 inline-flex rounded-full border border-primary-100 bg-primary-50 px-3 py-1 text-sm font-semibold text-primary-700">
            商工会・支援機関向け 提案資料
          </p>
          <h1 className="text-3xl font-bold leading-tight tracking-normal text-slate-950 sm:text-4xl lg:text-5xl">
            <span className="block">小規模事業者向け</span>
            <span className="block">デジタル活用・</span>
            <span className="block">業務改善支援</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            ホームページ制作、業務改善ツール、AI活用支援を小さく始められる形で支援します。
            まずは現場の困りごとを整理し、無理なく続けられる改善につなげます。
          </p>
          <div className="print-hidden mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-900"
            >
              相談について確認する
            </a>
            <a
              href="#works"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-600 hover:text-primary-700"
            >
              制作実績を見る
            </a>
          </div>
        </div>
        <div className="min-w-0 rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-soft print-card">
          <div className="grid gap-3 text-sm text-slate-700">
            <div className="rounded-md bg-white p-4">
              <p className="font-semibold text-slate-950">支援の考え方</p>
              <p className="mt-2 leading-6">
                大きな投資より、日々の業務で効果が見えやすい小さな改善から始めます。
              </p>
            </div>
            <div className="rounded-md bg-white p-4">
              <p className="font-semibold text-slate-950">対象</p>
              <p className="mt-2 leading-6">
                小規模事業者、個人事業主、地域事業者を支援する団体・窓口
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="print-compact py-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-950">よくあるお悩み</h2>
        <div className="print-grid-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((concern) => (
            <div
              key={concern}
              className="print-card rounded-md border border-slate-200 bg-white p-4 shadow-soft"
            >
              <p className="text-sm font-semibold leading-6 text-slate-800">{concern}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="print-compact border-t border-slate-200 py-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-950">提供サービス</h2>
        <div className="print-grid-2 grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="print-card rounded-md border border-slate-200 bg-white p-5 shadow-soft"
            >
              <h3 className="text-base font-bold text-primary-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="works" className="print-compact border-t border-slate-200 py-8">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-950">制作実績</h2>
            <p className="mt-2 text-sm text-slate-600">
              画像は public/images 内の同名ファイルを差し替えるだけで更新できます。
            </p>
          </div>
        </div>
        <div className="print-works-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {works.map((work) => (
            <article
              key={work.title}
              className="print-card overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft"
            >
              <div className="print-work-image relative aspect-[4/3] bg-slate-100">
                <Image
                  src={work.image}
                  alt={`${work.title}のスクリーンショット`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-slate-950">{work.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">{work.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="print-compact border-t border-slate-200 py-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-950">相談から導入までの流れ</h2>
        <ol className="print-grid-3 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step}
              className="print-card rounded-md border border-slate-200 bg-white p-4 shadow-soft"
            >
              <span className="text-xs font-bold text-primary-700">STEP {index + 1}</span>
              <p className="mt-2 text-sm font-semibold text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="contact"
        className="print-compact rounded-lg border border-primary-100 bg-primary-50 p-6 print-card"
      >
        <h2 className="text-2xl font-bold text-slate-950">お問い合わせ</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">
          まずは小さな相談から可能です。メールまたは問い合わせフォームで、現在のお悩みや
          「どこから始めればよいか分からない」という段階からご相談いただけます。
        </p>
        <div className="print-hidden mt-5 flex flex-wrap gap-3">
          <a
            href="mailto:info@example.com?subject=デジタル活用・業務改善支援の相談"
            className="rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-900"
          >
            メールで相談する
          </a>
          <a
            href="#"
            className="rounded-md border border-primary-200 bg-white px-5 py-3 text-sm font-semibold text-primary-700 transition hover:border-primary-600"
          >
            問い合わせフォーム想定
          </a>
        </div>
      </section>
    </main>
  );
}
