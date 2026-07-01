import Image from "next/image";

const CONTACT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScpWDnn3GrstHW26EDTSOsmnmiqMWR-mwvv2MZKskxiwrcvIQ/viewform";

const WORK_LINKS = {
  minicrm: "https://mini-crm-for-small-business-ads8.vercel.app/dashboard",
  accountingLp: "https://accounting-firm-lp.vercel.app/",
  cafeLp: "https://komorebi-cafe-lp.vercel.app/",
  aiSchoolLp: "https://ai-school-lp-theta.vercel.app/",
  bodyworkLp: "https://local-business-lp-template-seitai.vercel.app/"
} as const;

const concerns = [
  "ホームページを見直したい",
  "SNSやWeb販促を始めたい",
  "ExcelやAccess管理が属人化している",
  "顧客管理を整理したい",
  "問い合わせ管理を整理したい",
  "AIを使いたいが何から始めればよいか分からない",
  "書類作成を効率化したい",
  "担当者が辞めても困らない仕組みにしたい"
];

const services = [
  {
    title: "ホームページ・LP制作",
    description:
      "事業内容や強み、問い合わせまでの流れが伝わるページを制作します。公開後の更新についても相談できます。"
  },
  {
    title: "小規模事業者向け業務改善ツール",
    description:
      "Excel、Access、紙で分かれている情報を整理し、顧客管理や問い合わせ管理を使いやすくします。"
  },
  {
    title: "AI活用支援",
    description:
      "文章作成、資料作成、問い合わせ対応など、日々の仕事で使いやすいAIの始め方を一緒に整理します。"
  },
  {
    title: "業務改善相談",
    description:
      "今の業務を確認し、どこから改善するとよいかを整理します。小さく試せる進め方を提案します。"
  }
];

const works = [
  {
    title: "MiniCRM",
    image: "/images/minicrm.png",
    href: WORK_LINKS.minicrm,
    note: "顧客・問い合わせ・請求・予約をまとめて管理できる小規模事業者向けCRM"
  },
  {
    title: "会計事務所LP",
    image: "/images/accounting-lp.png",
    href: WORK_LINKS.accountingLp,
    note: "専門性と相談しやすさを伝え、問い合わせにつなげるLP"
  },
  {
    title: "古民家カフェLP",
    image: "/images/cafe-lp.png",
    href: WORK_LINKS.cafeLp,
    note: "店舗の雰囲気・メニュー・来店導線を整理したLP"
  },
  {
    title: "AIスクールLP",
    image: "/images/ai-school-lp.png",
    href: WORK_LINKS.aiSchoolLp,
    note: "講座内容と申込導線を分かりやすく整理したLP"
  },
  {
    title: "整体院LP",
    image: "/images/bodywork-lp.png",
    href: WORK_LINKS.bodyworkLp,
    note: "症状別の悩みと予約導線を整理したLP"
  }
];

const steps = [
  {
    title: "相談",
    description: "現在のお困りごとを確認します。"
  },
  {
    title: "課題整理",
    description: "優先順位を整理します。"
  },
  {
    title: "デモ・改善案作成",
    description: "画面イメージや改善案を用意します。"
  },
  {
    title: "制作・導入",
    description: "必要な部分だけ制作・導入します。"
  },
  {
    title: "運用サポート",
    description: "使いながら改善できるよう支援します。"
  }
];

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

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
            Excelや紙管理で分かれた業務を整理しながら、ホームページ制作、業務改善、AI活用まで、
            小さく始められる形で支援します。まずは今の困りごとを確認し、無理なく続けられる改善につなげます。
          </p>
          <div className="print-hidden mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-md bg-primary-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              相談について確認する
            </a>
            <a
              href="#works"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary-600 hover:text-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
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
                大きな投資や難しい仕組みからではなく、現場で使える小さな改善から始めます。
              </p>
            </div>
            <div className="rounded-md bg-white p-4">
              <p className="font-semibold text-slate-950">対象</p>
              <p className="mt-2 leading-6">
                小規模事業者、個人事業主、地域事業者を支援する商工会・支援機関
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="concerns" className="print-compact py-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-950">よくあるお悩み</h2>
        <div className="print-grid-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
        <h2 className="mb-4 text-2xl font-bold text-slate-950">制作実績</h2>
        <div className="print-works-grid grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {works.map((work) => {
            const external = isExternalLink(work.href);

            return (
              <a
                key={work.title}
                href={work.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="print-card group flex h-full flex-col overflow-hidden rounded-md border border-slate-200 bg-white text-slate-900 no-underline shadow-soft transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
              >
                <div className="print-work-image relative aspect-[4/3] bg-slate-100 p-2">
                  <Image
                    src={work.image}
                    alt={`${work.title}のスクリーンショット`}
                    fill
                    className="object-contain p-2"
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-sm font-bold text-slate-950">{work.title}</h3>
                  <p className="mt-2 flex-1 text-xs leading-5 text-slate-600">{work.note}</p>
                  <span className="print-hidden mt-3 text-xs font-semibold text-primary-700 group-hover:text-primary-900">
                    {work.title === "MiniCRM" ? "デモを見る" : "詳しく見る"}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="print-compact border-t border-slate-200 py-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-950">相談から導入までの流れ</h2>
        <ol className="print-grid-3 grid grid-cols-1 gap-3 sm:grid-cols-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="print-card rounded-md border border-slate-200 bg-white p-4 shadow-soft"
            >
              <span className="text-xs font-bold text-primary-700">STEP {index + 1}</span>
              <p className="mt-2 text-sm font-semibold text-slate-900">{step.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{step.description}</p>
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
          まずは小さな相談から可能です。事業者の状況や困りごとを伺い、ホームページ、
          業務改善、AI活用のどこから始めるとよいかを一緒に整理します。
        </p>
        <div className="print-hidden mt-5 flex flex-col items-start gap-3">
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="無料相談フォームを新しいタブで開く"
            className="inline-flex items-center justify-center rounded-md bg-primary-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
          >
            <span>無料相談フォーム</span>
            <span aria-hidden="true" className="ml-2 text-xs leading-none">↗</span>
          </a>
          <p className="max-w-2xl text-xs leading-6 text-slate-600 sm:text-sm">
            ご相談内容がまだまとまっていなくても大丈夫です。
            「何から始めればいいか分からない」という段階でもお気軽にご相談ください。
          </p>
        </div>
      </section>
    </main>
  );
}