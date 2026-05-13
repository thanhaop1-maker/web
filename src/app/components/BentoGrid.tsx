import { motion } from 'motion/react';
import { Award, Heart, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import profilePhoto from '../../imports/z7815510812441_da5b79101fbf6b140525152bd6cd161a.jpg';

export function BentoGrid() {
  return (
    <section id="skills" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 tracking-tight">
          Về <span className="text-[#00FFCC]">tôi</span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large card - Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.2)',
            }}
            className="md:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent z-10" />
            <ImageWithFallback
              src={profilePhoto}
              alt="Ảnh đại diện Creative Designer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-6 left-6 z-20">
              <p className="text-2xl font-bold text-white">Hà Trần Phú Thành</p>
              <p className="text-sm text-[#00FFCC] mt-1">Creative Designer</p>
            </div>
          </motion.div>

          {/* Achievement card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.2)',
            }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 flex flex-col justify-center group hover:border-[#00FFCC]/30 transition-all duration-300"
          >
            <Trophy className="w-12 h-12 text-[#00FFCC] mb-4 group-hover:scale-110 transition-transform" />
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-bold text-[#00FFCC]">12</span>
              <span className="text-xl text-[#F4F4F4]/60">năm</span>
            </div>
            <p className="text-lg text-[#F4F4F4] mt-2">
              Phổ thông lọt Top 10
            </p>
          </motion.div>

          {/* Education card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.2)',
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm p-8 flex flex-col justify-center group hover:border-[#00FFCC]/30 transition-all duration-300"
          >
            <Award className="w-12 h-12 text-[#00FFCC] mb-4 group-hover:scale-110 transition-transform" />
            <div className="flex items-baseline gap-3">
              <span className="text-6xl font-bold text-[#00FFCC]">01</span>
            </div>
            <p className="text-lg text-[#F4F4F4] mt-2">
              Bằng tốt nghiệp
            </p>
          </motion.div>

          {/* Passion - Husky */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.2)',
            }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative overflow-hidden group hover:border-[#00FFCC]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1550973078-ce53733d6117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWJlcmlhbiUyMGh1c2t5JTIwZG9nfGVufDF8fHx8MTc3ODY0MjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Husky"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 z-20">
              <Heart className="w-6 h-6 text-[#00FFCC] mb-2" />
              <p className="text-sm font-semibold text-white">Best Friend</p>
            </div>
          </motion.div>

          {/* Soccer passion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{
              y: -8,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.2)',
            }}
            className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm relative overflow-hidden group hover:border-[#00FFCC]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent z-10" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1625187538367-6a8483a79cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBiYWxsJTIwZmllbGR8ZW58MXx8fHwxNzc4NjQyNDYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Soccer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex items-center justify-start pl-8 z-20">
              <div>
                <p className="text-3xl font-bold text-white mb-2">⚽</p>
                <p className="text-2xl font-bold text-white">Đam mê sân cỏ</p>
                <p className="text-sm text-[#00FFCC] mt-1">Football Enthusiast</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
