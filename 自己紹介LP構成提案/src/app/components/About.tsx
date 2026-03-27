import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const [ref, isInView] = useInView();

  return (
    <section className="py-24 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="text-pink-600 mb-2">生年月日</div>
              <div className="text-xl">2003年7月1日</div>
              <div className="text-gray-600 text-sm mt-1">22歳</div>
            </div>
            <div className="text-center">
              <div className="text-pink-600 mb-2">出身</div>
              <div className="text-xl">三重県</div>
            </div>
            <div className="text-center">
              <div className="text-pink-600 mb-2">動物占い</div>
              <div className="text-xl">人気者のゾウ</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              三重県出身。多文化環境で育ち、幼少期から「言葉が人をつなぐ力」に興味を持つ。
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              同志社大学 文学部 英文学科を卒業し、現在は東京ミッドタウンのITコンサル会社<strong className="text-pink-700">Dirbato</strong>にて研修中。
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              同期の横のつながりを強化する<strong className="text-pink-700">朝活コミュニティ</strong>を立ち上げ、
              人が集まる場づくりに情熱を注いでいます。
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-pink-700">学歴</h3>
              <div className="space-y-2 text-gray-700">
                <div>🎓 同志社大学 文学部 英文学科 卒業</div>
                <div>🏫 セントヨゼフ女子学園 高等学校 卒業</div>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-pink-700">現在の活動</h3>
              <div className="space-y-2 text-gray-700">
                <div>💼 Dirbato（ITコンサル）研修中</div>
                <div>☀️ 朝活コミュニティ運営</div>
                <div>🌏 英会話カフェ運営</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
