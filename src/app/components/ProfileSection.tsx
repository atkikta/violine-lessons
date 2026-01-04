import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileRumiImage from "../../assets/images/profile-rumi.jpg";

export function ProfileSection() {
  return (
    <section id="profile" className="min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <ImageWithFallback
              src={profileRumiImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div　className="flex items-center gap-4 mb-6">
              <p className="text-neutral-500 mb-2">講師</p>
              <h2 className="font-serif font-bold">蔵川 瑠美</h2>
            </div>
            
            <div className="space-y-4 text-neutral-700">
              <p>
                広島交響楽団コンサートマスター<br />
                K-BALLET Theater Orchestra Tokyoゲストコンサートミストレス
              </p>
              <p>
                大阪府大阪市出身。
              </p>
              <p>
                東京藝術大学附属音楽高校、東京藝術大学卒業。<br />
                2009年、22歳で日本センチュリー交響楽団にアシスタントコンサートマスターとして入団。<br />
                2014年広島交響楽団のオーディションに合格し、過去最年少でコンサートマスターに就任。<br />
                2018年ドイツに渡り、ライプツィヒ・ゲヴァントハウス管弦楽団コンサートマスターのヘンリック・ホッホシルト氏の元で研鑽を積む。<br />
                2019年〜2020年広島文化学園大学非常勤講師を務める。<br />
                東京でのリサイタルの他、地元大阪では室内楽を学ぶセミナー「Otonowa Concert」シリーズを積極的に企画開催している。<br />
                広島交響楽団をはじめ各地のオーケストラに出演をする傍ら、後進やアマチュアオーケストラの指導にも力を入れている。<br />
                2021年よりあおによし音楽コンクールの審査員を務める。<br />
                私生活においては一児の母。<br />
                これまでに若林暢、岡山潔、ジェラール・プーレ、松原勝也、田野倉雅秋の各氏に師事。<br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
