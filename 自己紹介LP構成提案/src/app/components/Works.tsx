import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { MessageCircle, Users, Calendar, Globe } from "lucide-react";

const works = [
  {
    title: "英会話カフェ",
    description: "国際交流の場として英会話カフェを立ち上げ・運営。多様なバックグラウンドを持つ人々が気軽に集まれる空間を創出。",
    icon: MessageCircle,
    tags: ["コミュニティ運営", "国際交流", "企画・運営"],
    color: "pink",
  },
  {
    title: "SNS運用",
    description: "同志社大学生向けメディア、関西お出かけSNSを運営。学生目線でのコンテンツ制作とコミュニティ形成を実現。",
    icon: Users,
    tags: ["SNS戦略", "コンテンツ制作", "マーケティング"],
    color: "amber",
  },
  {
    title: "朝活コミュニティ",
    description: "Dirbato研修期間中に立ち上げた、同期との横のつながりを強化する勉強会的コミュニティ。継続的な学びと交流の場を提供。",
    icon: Calendar,
    tags: ["コミュニティ立ち上げ", "勉強会運営", "組織開発"],
    color: "pink",
  },
  {
    title: "国際交流イベント",
    description: "学生大使、環境フォーラム、模擬国連など、グローバルな視点でのイベント企画・参加を通じて、多様な価値観に触れる機会を創出。",
    icon: Globe,
    tags: ["イベント企画", "スピーチ", "国際協力"],
    color: "amber",
  },
];

export function Works() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Works</h2>
          <p className="text-xl text-gray-600">
            これまでの活動と実績
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${
                work.color === 'pink' 
                  ? 'bg-gradient-to-br from-pink-500 to-pink-600' 
                  : 'bg-gradient-to-br from-amber-500 to-amber-600'
              } flex items-center justify-center mb-6 shadow-lg`}>
                <work.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl mb-4">{work.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {work.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {work.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm ${
                      work.color === 'pink'
                        ? 'bg-pink-100 text-pink-700'
                        : 'bg-amber-100 text-amber-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
