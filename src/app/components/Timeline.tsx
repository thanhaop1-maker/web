import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';

const milestones = [
  {
    year: '2021',
    title: 'Khởi nghiệp kinh doanh',
    desc: 'Tự mở kinh doanh riêng mảng sức khoẻ — bước đầu tiên trên hành trình làm chủ bản thân.',
    side: 'right',
    icon: '🌱',
    color: '#00FFCC',
  },
  {
    year: '2022',
    title: 'Thiết kế tại VAT Studio',
    desc: 'Nhận job thiết kế Social Media & chỉnh sửa ảnh cơ bản cho VAT Studio — nền tảng kỹ năng đồ hoạ chuyên nghiệp đầu tiên.',
    side: 'left',
    icon: '🎨',
    color: '#00FFCC',
  },
  {
    year: '2023–2024',
    title: 'Tự học AI & Photoshop',
    desc: 'Mày mò học thêm AI generative, nâng cao Photoshop. Nhận làm catalogue cho khách hàng và poster qua Facebook.',
    side: 'right',
    icon: '🤖',
    color: '#00FFCC',
  },
  {
    year: '2025',
    title: 'Bán hàng tiện lợi',
    desc: 'Chuyển hướng, vận hành mô hình bán hàng tiện lợi — kết hợp tư duy thiết kế vào trải nghiệm thương mại.',
    side: 'left',
    icon: '🏪',
    color: '#00FFCC',
  },
  {
    year: '2026',
    title: 'In Progress...',
    desc: 'Tiếp tục phát triển kỹ năng UI/UX & đồ hoạ kỹ thuật số. Hành trình vẫn đang tiếp diễn.',
    side: 'right',
    icon: '🚀',
    color: '#00FFCC',
    active: true,
  },
];

function MilestoneCard({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = item.side === 'left';

  return (
    <div ref={ref} className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-0 mb-0">
      {/* Left content */}
      <div className={`pr-10 ${isLeft ? 'flex justify-end' : ''}`}>
        {isLeft && (
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-sm w-full"
          >
            <Card item={item} index={index} inView={inView} />
          </motion.div>
        )}
      </div>

      {/* Center dot + year */}
      <div className="flex flex-col items-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 300 }}
          className="relative flex flex-col items-center"
        >
          {/* Dot */}
          <div
            className={`w-4 h-4 rounded-full border-2 border-[#00FFCC] z-10 relative ${
              item.active
                ? 'bg-[#00FFCC] shadow-[0_0_16px_6px_rgba(0,255,204,0.5)]'
                : 'bg-[#121212] shadow-[0_0_10px_2px_rgba(0,255,204,0.3)]'
            }`}
          >
            {item.active && (
              <motion.div
                animate={{ scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-[#00FFCC]"
              />
            )}
          </div>

          {/* Year label */}
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`mt-2 mb-2 text-sm font-bold tracking-widest px-3 py-1 rounded-full border ${
              item.active
                ? 'text-[#121212] bg-[#00FFCC] border-[#00FFCC]'
                : 'text-[#00FFCC] border-[#00FFCC]/40 bg-[#00FFCC]/5'
            }`}
          >
            {item.year}
          </motion.span>
        </motion.div>
      </div>

      {/* Right content */}
      <div className={`pl-10 ${!isLeft ? 'flex justify-start' : ''}`}>
        {!isLeft && (
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-sm w-full"
          >
            <Card item={item} index={index} inView={inView} />
          </motion.div>
        )}
      </div>
    </div>
  );
}

function Card({
  item,
  inView,
}: {
  item: (typeof milestones)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className={`group relative p-5 rounded-2xl border backdrop-blur-sm cursor-default transition-colors duration-300 ${
        item.active
          ? 'border-[#00FFCC]/60 bg-[#00FFCC]/5 shadow-[0_0_30px_rgba(0,255,204,0.1)]'
          : 'border-white/10 bg-white/[0.03] hover:border-[#00FFCC]/40 hover:bg-[#00FFCC]/[0.04]'
      }`}
    >
      {/* Neon glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[0_0_20px_rgba(0,255,204,0.15)] border border-[#00FFCC]/20" />

      <div className="flex items-start gap-3">
        <span className="text-2xl mt-0.5 flex-shrink-0">{item.icon}</span>
        <div>
          <h3
            className={`font-bold mb-1 ${
              item.active ? 'text-[#00FFCC]' : 'text-[#F4F4F4]'
            }`}
          >
            {item.title}
          </h3>
          <p className="text-sm text-[#F4F4F4]/60 leading-relaxed">{item.desc}</p>
        </div>
      </div>

      {item.active && (
        <div className="mt-3 flex items-center gap-2">
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#00FFCC]"
          />
          <span className="text-xs text-[#00FFCC]/80 font-medium tracking-wide">
            Đang diễn ra
          </span>
        </div>
      )}
    </motion.div>
  );
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <p className="text-sm text-[#00FFCC] uppercase tracking-[0.3em] mb-4 font-semibold">
          Hành trình
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Cột mốc{' '}
          <span className="text-[#00FFCC]">sự nghiệp</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div ref={containerRef} className="relative">
        {/* Animated center line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10 overflow-hidden"
          style={{ height: '100%' }}
        >
          <motion.div
            style={{ scaleY: lineScaleY, transformOrigin: 'top' }}
            className="w-full h-full bg-gradient-to-b from-[#00FFCC]/80 via-[#00FFCC]/50 to-[#00FFCC]/20"
          />
        </div>

        {/* Milestone rows */}
        <div className="flex flex-col gap-12 py-4">
          {milestones.map((item, i) => (
            <MilestoneCard key={item.year} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
