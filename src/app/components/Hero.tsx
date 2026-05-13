import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  const skills = ['Figma', 'Photoshop', 'Illustrator', 'Blender'];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Floating skill tags */}
          <div className="absolute -top-20 right-0 hidden lg:flex gap-3 flex-wrap justify-end max-w-md">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                className="px-4 py-2 bg-white/5 border border-[#00FFCC]/30 rounded-lg text-sm text-[#00FFCC] backdrop-blur-sm"
              >
                {skill}
              </motion.div>
            ))}
          </div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-[#00FFCC]" />
              <span className="text-[#00FFCC] tracking-widest uppercase text-sm">
                Portfolio 2026
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter leading-none">
              HÀ TRẦN
              <br />
              <span className="text-[#00FFCC]">PHÚ THÀNH</span>
            </h1>

            <div className="space-y-3 max-w-2xl">
              <p className="text-xl md:text-2xl text-[#F4F4F4] font-light">
                Đồ Hoạ Kỹ Thuật Số | UI/UX Enthusiast
              </p>
              <p className="text-base md:text-lg text-[#F4F4F4]/60 leading-relaxed">
                Chuyên gia sáng tạo hình ảnh. Bậc thầy của sự linh hoạt. Khám
                phá những trải nghiệm thị giác mang đậm dấu ấn cá nhân.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-8"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 204, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#00FFCC] text-[#121212] rounded-lg font-semibold hover:bg-[#00FFCC]/90 transition-all duration-300"
              >
                Xem dự án
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white/20 text-[#F4F4F4] rounded-lg font-semibold hover:bg-white/5 hover:border-[#00FFCC]/50 transition-all duration-300"
              >
                Liên hệ ngay
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00FFCC] rounded-full blur-[150px] pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
