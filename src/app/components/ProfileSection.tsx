import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1765278498369-e4c9033125c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljYWwlMjBtdXNpY2lhbiUyMHBlcmZvcm1lcnxlbnwxfHx8fDE3NjY4MDIyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div　className="flex items-center gap-4 mb-6">
              <p className="text-neutral-500 mb-2">講師</p>
              <h2 className="font-serif font-bold">蔵川 瑠美</h2>
                {/* <div className="w-[25vh] h-[25vh] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2NzM5MTY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="蔵川 瑠美"
                    className="w-full h-full object-cover"
                  />
                </div> */}
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <p>
                東京芸術大学音楽学部卒業。在学中より演奏活動を開始し、国内外のコンクールで数々の受賞歴を持つ。
              </p>
              <p>
                現在はソロリサイタル、室内楽、オーケストラとの共演など幅広く活動。繊細かつ情熱的な演奏で高い評価を得ている。
              </p>
              <p>
                後進の指導にも力を入れており、初心者から音楽大学受験生まで幅広く指導を行っている。
              </p>
            </div>

            <div className="pt-4">
              <h3 className="mb-4">主な受賞歴</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• 第〇〇回国際音楽コンクール 第1位</li>
                <li>• 全日本学生音楽コンクール 第1位</li>
                <li>• 〇〇音楽賞 受賞</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
