import { Clock, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import LessonImage from "../../assets/images/lesson-gpt.png";
import Otonowa1Image from "../../assets/images/otonowa1.png";
import Otonowa2Image from "../../assets/images/otonowa2.jpg";
import Otonowa3Image from "../../assets/images/otonowa3.png";

const lessonPlans = [
  {
    id: 1,
    title: '個人レッスン(オンラインも可)',
    description: "弾きたい曲をていねいに仕上げていきます。年齢問いません。",
    price: '5,000円 / 1時間',
  },
  {
    id: 2,
    title: 'アマチュアオーケストラで活動されている方向け',
    description: 'オーケストラの弓づけ、指づかい相談レッスン。',
    price: '5,000円 / 1時間',
  },
  {
    id: 3,
    title: '専門を目指す方の音楽高校・音大コース',
    description: '音楽大学受験を目指す方向けの専門的な指導を行います。',
    price: '応相談',
  },
];

export function LessonsSection() {
  return (
    <section id="lessons" className="min-h-screen py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-neutral-500 mb-2">Lessons</p>
          <h2 className="font-serif">レッスン案内</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
            <ImageWithFallback
              src={LessonImage}
              alt="Lesson"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-neutral-700">
              初心者の方から音楽大学受験生まで、幅広くレッスンを承っております。一人ひとりの目標やペースに合わせて、楽しく上達できるよう丁寧にサポートいたします。
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-neutral-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="mb-1">レッスン会場</p>
                  <p className="text-neutral-700">大阪府茨木市</p>
                  <p className="text-neutral-700">モノレール阪大病院前駅から徒歩5分</p>
                  <p className="text-neutral-700">JR茨木駅よりバス15分、阪大東口バス停から徒歩5分</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="text-neutral-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="mb-1">レッスン時間</p>
                  <p className="text-neutral-700">ご都合に合わせてご相談いただき、ご予約いただけます</p>
                  <p className="text-neutral-700">月曜日〜日曜日 9:00〜20:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="text-neutral-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="mb-1">対象</p>
                  <p className="text-neutral-700">初心者からプロフェッショナルを目指す方まで</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {lessonPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-neutral-50 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="mb-4">{plan.title}</h3>
              <p className="text-neutral-700 mb-6">{plan.description}</p>
              <div className="space-y-2 text-neutral-600">
                <p><span className="text-neutral-900">料金:</span> {plan.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-amber-50 rounded-lg">
          <p className="text-neutral-700">
            ※ 体験レッスン（約60分 ¥1,000）も受け付けております。お気軽にお問い合わせください。
          </p>
        </div>
        <div className="mt-12 p-6 bg-neutral-50 rounded-lg">
          <h3 className="mb-4">発表コンサート</h3>
          <p className="text-neutral-700">
            毎年夏にピアニスト 長尾洋史先生を講師にお迎えして室内楽セミナー(Otonowaコンサート)を実施しています。
          </p>
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={Otonowa1Image}
                alt="Seminar1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={Otonowa2Image}
                alt="Seminar2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <ImageWithFallback
                src={Otonowa3Image}
                alt="Seminar3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
