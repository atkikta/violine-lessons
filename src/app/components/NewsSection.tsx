import { Calendar } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: '2026.01.01',
    title: '生徒募集',
    content: '一人ひとりのペースに合わせて丁寧に指導します。まずはお気軽にお問い合わせください。',
  },
];

export function NewsSection() {
  return (
    <section id="news" className="min-h-screen py-20 md:py-32 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-neutral-500 mb-2">News</p>
          <h2 className="font-serif">お知らせ</h2>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 text-neutral-500 mb-3">
                <Calendar size={16} />
                <time>{item.date}</time>
              </div>
              <h3 className="mb-3">{item.title}</h3>
              <p className="text-neutral-700">{item.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
