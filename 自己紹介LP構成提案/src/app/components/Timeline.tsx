import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Sparkles, Globe, Heart, Zap, Rocket, Star } from "lucide-react";

const timelineData = [
  {
    period: "幼少期",
    title: "「言葉で世界が変わる」と知った原体験",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjBwbGF5aW5nJTIwdG9nZXRoZXIlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc3NDYxODk2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "幼稚園で外国籍の男の子との衝突。言葉が通じないことで起きていた「すれ違い」。",
      "スイミングスクールで、その言語を話すお母さんを自分から探し、翻訳を学んだ。",
      "「痛いからやめて。一緒に遊ぼう」と伝えた結果、嫌がらせがなくなり、関係が変わった。",
    ],
    learning: "言語は争いをなくす力がある",
    color: "pink",
  },
  {
    period: "小学生",
    title: "多文化が「当たり前」の世界",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1595504561318-bb044e05d6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZmxhZ3MlMjBsYW5ndWFnZXMlMjBjdWx0dXJlfGVufDF8fHx8MTc3NDYxODk3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "Honda技研のある土地柄、10カ国以上の言語が飛び交う環境。",
      "毎朝、朝の会や帰りの会で10カ国語で挨拶。いろんな言語が普通だった。",
      "「牧田万博」という、世界の文化・食べ物・民族衣装を紹介するイベントが大好きだった。",
      "習い事：スイミング、公文、英会話、そろばん。特に公文は、泣きながら涙でプリントを濡らした日も。",
    ],
    learning: "違いは怖いものじゃない",
    color: "amber",
  },
  {
    period: "中学生",
    title: "初めての挫折",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1734192365828-8d51fe629997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwbW9ybmluZyUyMG1vdGl2YXRpb24lMjBzdHVkeXxlbnwxfHx8fDE3NzQ2MTg5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "セントヨゼフ女子学園に入学。受験組の中に放り込まれ、勉強にもついていけず、友人とも馴染めなかった。",
      "週2でカウンセリングに通うも、不登校にはならず皆勤賞・皆出席を達成。",
      "「自分ってなんなんだろう」初めて壁にぶち当たる。",
      "負けず嫌いが発動。「英語だけは絶対に負けない！」必死で英語の成績上位を死守した。",
    ],
    learning: "自分の軸を持つこと",
    color: "pink",
  },
  {
    period: "高校生",
    title: "「嫌われる勇気」と外の世界",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBjb2xsYWJvcmF0aW9uJTIwdGVhbXdvcmslMjBkaXZlcnNlfGVufDF8fHx8MTc3NDYxMjMyMHww&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "仲の良い友人ができ、部活動で部長に就任。",
      "理不尽なルールには反抗。一部の女子からは毛嫌いされたが、気にしなかった。",
      "「学校で輝けないなら、外で輝けばいい」と決意。",
      "英語スピーチコンテスト、三重県学生大使、環境フォーラム、模擬国連に積極的に参加し、高い評価を得る。",
    ],
    learning: "学校でダメなら、外で勝つ",
    color: "amber",
  },
  {
    period: "大学",
    title: "「自分で場を作る側」へ",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1755498596777-8bcc05cd4a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG9mZmljZSUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2MTg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "同志社大学で、SNS運用（同志社メディア、関西おでかけ）を開始。",
      "英会話カフェを立ち上げ、運営。",
      "国際交流イベントを企画・運営。",
      "「プレイヤー → 仕掛ける側」へと変化。",
    ],
    learning: "人を巻き込む力",
    color: "pink",
  },
  {
    period: "現在",
    title: "人をつなぐ仕組みをつくる",
    icon: Star,
    image: "https://images.unsplash.com/photo-1755498596777-8bcc05cd4a1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMG9mZmljZSUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzQ2MTg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: [
      "東京ミッドタウンのITコンサル会社Dirbatoに入社。",
      "研修期間中に、同期との横のつながりを強化する「朝活コミュニティ」を立ち上げ。",
      "個人の成長と仲間の力を掛け合わせる場づくりに挑戦中。",
    ],
    learning: "個人の成長 × 仲間の力",
    color: "amber",
  },
];

export function Timeline() {
  const [ref, isInView] = useInView();

  return (
    <section id="story" className="py-24 px-6 bg-gradient-to-b from-white to-pink-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">My Story</h2>
          <p className="text-xl text-gray-600">
            負けず嫌い × 多文化 × 自分で道を切り拓く
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-amber-300 to-pink-300" />

          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ 
  item, 
  index, 
  isInView 
}: { 
  item: typeof timelineData[0]; 
  index: number; 
  isInView: boolean;
}) {
  const isLeft = index % 2 === 0;
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`relative mb-16 md:mb-24 ${
        isLeft ? "md:pr-[50%] md:pl-0" : "md:pl-[50%] md:pr-0"
      }`}
    >
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-pink-400 items-center justify-center z-10">
        <Icon className={`w-6 h-6 ${item.color === 'pink' ? 'text-pink-600' : 'text-amber-600'}`} />
      </div>

      <div className={`${isLeft ? "md:text-right" : "md:text-left"}`}>
        <div className={`inline-block text-left bg-white rounded-3xl shadow-xl p-8 md:p-10 ${
          isLeft ? "md:mr-12" : "md:ml-12"
        }`}>
          <div className="flex items-center gap-3 mb-4 md:hidden">
            <div className={`w-10 h-10 rounded-full ${
              item.color === 'pink' ? 'bg-pink-100' : 'bg-amber-100'
            } flex items-center justify-center`}>
              <Icon className={`w-5 h-5 ${item.color === 'pink' ? 'text-pink-600' : 'text-amber-600'}`} />
            </div>
            <span className={`px-4 py-1 rounded-full text-sm ${
              item.color === 'pink' 
                ? 'bg-pink-100 text-pink-700' 
                : 'bg-amber-100 text-amber-700'
            }`}>
              {item.period}
            </span>
          </div>

          <span className={`hidden md:inline-block px-4 py-1 rounded-full text-sm mb-4 ${
            item.color === 'pink' 
              ? 'bg-pink-100 text-pink-700' 
              : 'bg-amber-100 text-amber-700'
          }`}>
            {item.period}
          </span>

          <h3 className="text-2xl md:text-3xl mb-4">{item.title}</h3>

          <div className="mb-6 rounded-2xl overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
          </div>

          <div className="space-y-3 mb-6">
            {item.description.map((desc, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {desc}
              </p>
            ))}
          </div>

          <div className={`inline-block px-6 py-3 rounded-full ${
            item.color === 'pink' 
              ? 'bg-gradient-to-r from-pink-500 to-pink-600' 
              : 'bg-gradient-to-r from-amber-500 to-amber-600'
          } text-white shadow-lg`}>
            💡 {item.learning}
          </div>
        </div>
      </div>
    </motion.div>
  );
}