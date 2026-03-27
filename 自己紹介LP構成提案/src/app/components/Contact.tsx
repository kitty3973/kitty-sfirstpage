import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView();

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-white to-pink-100" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Contact</h2>
          <p className="text-xl text-gray-600 mb-12">
            一緒に何かやりたい方、お気軽にご連絡ください
          </p>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-2xl mb-12">
            <div className="text-5xl mb-6">👋</div>
            <h3 className="text-2xl md:text-3xl mb-4">
              Let's create something together!
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              コミュニティづくり、イベント企画、国際交流、SNS運用など、
              <br className="hidden md:block" />
              興味があることやコラボレーションのアイデアがあれば、
              <br className="hidden md:block" />
              ぜひお話ししましょう！
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-amber-600 hover:from-pink-700 hover:to-amber-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                メールで連絡する
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
              >
                <MessageCircle className="w-5 h-5" />
                DMで連絡する
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-6"
          >
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-500 to-amber-500 hover:from-pink-600 hover:to-amber-600 flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 pt-8 border-t border-pink-200"
          >
            <p className="text-gray-600">
              © 2026 Mikuna Hirao. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Made with 💖 in Tokyo
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
