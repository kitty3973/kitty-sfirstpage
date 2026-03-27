import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-white to-amber-100 opacity-60" />
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbmZpZGVudHxlbnwxfHx8fDE3NzQ2MTg5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-pink-100 text-pink-800 rounded-full text-sm tracking-wider">
              IT Consultant × Community Builder
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8"
          >
            <span className="block text-5xl md:text-7xl mb-4">平尾みく菜</span>
            <span className="block text-2xl md:text-4xl text-gray-700 mt-6">
              言葉で世界をつなぐ、
              <br />
              行動で人を動かす
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            多文化環境で育ち、挫折を乗り越えながら、
            <br className="hidden md:block" />
            人が繋がる場をつくり続けてきました。
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#story"
              className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              私のストーリーを見る
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
            >
              一緒に何かやりたい方へ
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
