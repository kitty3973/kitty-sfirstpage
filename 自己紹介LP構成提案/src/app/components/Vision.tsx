import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Target, Globe2, Users2, TrendingUp } from "lucide-react";

export function Vision() {
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
          <h2 className="text-4xl md:text-5xl mb-4">Vision</h2>
          <p className="text-xl text-gray-600">
            これから目指す未来
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-pink-600 to-amber-600 rounded-3xl p-12 md:p-16 text-center text-white mb-12 shadow-2xl"
        >
          <div className="text-5xl mb-6">🚀</div>
          <h3 className="text-3xl md:text-4xl mb-6">
            女性でもなく、<br className="md:hidden" />
            "一人の経営者"として<br className="md:hidden" />
            戦える存在へ
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            性別に関係なく、自分の力で道を切り拓き、
            <br className="hidden md:block" />
            かっこいい経営者として世界で勝負する
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="text-xl mb-2">年収1000万円</h4>
            <p className="text-gray-600">
              自分の価値を正当に評価され、経済的自立を実現
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
              <Globe2 className="w-8 h-8 text-amber-600" />
            </div>
            <h4 className="text-xl mb-2">海外と関わるビジネス</h4>
            <p className="text-gray-600">
              言語で世界をつなぐという原体験を活かす
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
              <Users2 className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="text-xl mb-2">コミュニティを作る</h4>
            <p className="text-gray-600">
              人が集まり、成長できる場を提供し続ける
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-br from-amber-50 to-pink-50 rounded-3xl p-10"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-4">誰に価値を届けたいか</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>挑戦したいけれど一歩踏み出せない若者</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>自分に自信が持てない人</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>世界に出たいと思っている人</span>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-pink-200 pt-6 mt-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              「私にもできた」という経験を、次の誰かの「できる」に変えていきたい。
              <br />
              負けず嫌いで、一人で抱え込みがちだった私が、人を頼り、巻き込む力を身につけた。
              <br />
              その経験を活かして、誰もが自分らしく挑戦できる世界を作りたい。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
