import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Lightbulb, TrendingUp, Users, Sparkles } from "lucide-react";

const values = [
  {
    title: "成長し続けること",
    description: "公文で泣きながらプリントに取り組んだ日々。挫折を経験しても、諦めずに前に進む。負けず嫌いの心が、今の私を作っています。",
    icon: TrendingUp,
  },
  {
    title: "人を巻き込むこと",
    description: "一人でできることには限界がある。コミュニティを作り、人と人をつなぐことで、一人では成し遂げられない大きな価値を生み出せる。",
    icon: Users,
  },
  {
    title: "自分の可能性を信じること",
    description: "「思考は現実になる」ナポレオン・ヒルの成功哲学を大切にしています。自分を信じて行動すれば、道は開ける。",
    icon: Sparkles,
  },
  {
    title: "多様性を受け入れること",
    description: "幼少期から多文化環境で育った経験が教えてくれた。違いは怖いものではなく、世界を豊かにするもの。",
    icon: Lightbulb,
  },
];

export function Values() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-pink-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Values</h2>
          <p className="text-xl text-gray-600">
            大切にしている価値観
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg">
                <value.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-pink-100 to-amber-100 rounded-3xl p-10 text-center"
        >
          <div className="text-6xl mb-6">💎</div>
          <h3 className="text-3xl mb-4">核となる哲学</h3>
          <p className="text-xl text-gray-700 mb-2">
            ナポレオン・ヒル『思考は現実化する』
          </p>
          <p className="text-lg text-gray-600">
            自分の可能性を信じ、行動し続けることで、思い描いた未来は現実になる
          </p>
        </motion.div>
      </div>
    </section>
  );
}
