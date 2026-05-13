import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import img3DCar from '../../imports/screenshot_1778642886.png';
import imgUnderwater from '../../imports/v__minh_h_a-04.png';
import imgHolidayPoster from '../../imports/tHI_T_K__POS_FB_NEW_2.png';
import imgFastFood from '../../imports/Cam_R_c_R__H_nh__nh_Sale_____n_Th_c_U_ng_Standee__A4_.png';
import imgCertificate from '../../imports/1.png';
import imgNewYear from '../../imports/Poster_Ch_c_m_ng_T_t_Nguy_n___n_N_m_m_i_2026_Truy_n_th_ng____v_ng__1200_x_800_px___8_.png';
import imgTeacherDay from '../../imports/z7253528483791_578a6414ceb3c428f147c89fbf2813c4.jpg';

const projects = [
  {
    id: 1,
    title: 'Mô hình 3D xe hơi',
    role: '3D Design & Blender',
    tag: 'Blender 3D',
    image: img3DCar,
    span: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 2,
    title: 'Minh Hoạ Vector Đại Dương',
    role: 'Vector Illustration & Digital Art',
    tag: 'Illustration',
    image: imgUnderwater,
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 3,
    title: 'Poster Lịch Nghỉ Lễ',
    role: 'Social Media Design — Gia Định University',
    tag: 'Social Media',
    image: imgHolidayPoster,
    span: '',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 4,
    title: 'Standee Quảng Cáo Thức Ăn Nhanh',
    role: 'Print Design & Standee Layout',
    tag: 'Print Design',
    image: imgFastFood,
    span: '',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    title: 'Thiết Kế Giấy Khen',
    role: 'Certificate Design — Giải Nhì CNTT 2025',
    tag: 'Document Design',
    image: imgCertificate,
    span: '',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 6,
    title: 'Poster Tết Nguyên Đán 2026',
    role: 'Event Poster Design',
    tag: 'Event Poster',
    image: imgNewYear,
    span: 'md:col-span-2',
    aspect: 'aspect-[16/9]',
  },
  {
    id: 7,
    title: 'Poster Ngày Nhà Giáo Việt Nam 20/11',
    role: 'Social Media Poster — Khoa CNTT',
    tag: 'Social Media',
    image: imgTeacherDay,
    span: 'md:col-span-2',
    aspect: 'aspect-[4/3]',
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            Dự án <span className="text-[#00FFCC]">tiêu biểu</span>
          </h2>
          <p className="text-lg text-[#F4F4F4]/60 max-w-2xl">
            Khám phá những dự án sáng tạo mang dấu ấn cá nhân và tầm nhìn độc đáo
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`relative group cursor-pointer ${project.span}`}
            >
              <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a] ${project.aspect}`}>
                {/* Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300" />
                </div>

                {/* Tag badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#00FFCC]/20 text-[#00FFCC] border border-[#00FFCC]/30 backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-[-6px]">
                    <p className="text-sm text-[#00FFCC] mb-1 uppercase tracking-wider">
                      {project.role}
                    </p>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#00FFCC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Xem chi tiết</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-[-2px] transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Neon border glow on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl border-2 border-[#00FFCC]/60 shadow-[0_0_20px_rgba(0,255,204,0.2)]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
