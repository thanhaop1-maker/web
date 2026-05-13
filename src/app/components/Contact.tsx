import { motion } from 'motion/react';
import { Mail, Phone, Github, Linkedin, Instagram } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="px-6 lg:px-12 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Main CTA */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight leading-tight">
          Sẵn sàng cho <br />
          <span className="text-[#00FFCC]">những dự án mới</span>
        </h2>
        <p className="text-xl text-[#F4F4F4]/60 mb-16 max-w-2xl mx-auto">
          Hãy liên hệ để biến ý tưởng của bạn thành hiện thực
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <motion.a
            href="mailto:Thanhabonguyen@gmail.com"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-6 bg-[#00FFCC] text-[#121212] rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#00FFCC]/90 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Thanhabonguyen@gmail.com
          </motion.a>

          <motion.a
            href="tel:0938203697"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 255, 204, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-6 border-2 border-[#00FFCC] text-[#00FFCC] rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#00FFCC]/10 transition-all duration-300 group"
          >
            <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            0938203697
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-sm text-[#F4F4F4]/40">
              © 2026 Hà Trần Phú Thành. All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <motion.a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FFCC' }}
                className="text-[#F4F4F4]/60 hover:text-[#00FFCC] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.5 4.5h5.502c1.026 0 1.945.19 2.566.558.622.367 1.11.875 1.426 1.496.316.62.474 1.32.474 2.086 0 .818-.177 1.54-.53 2.145-.353.605-.87 1.053-1.554 1.343v.085c.937.232 1.645.694 2.118 1.385.473.69.71 1.538.71 2.542 0 .827-.188 1.575-.563 2.244-.375.67-.928 1.202-1.66 1.595-.73.393-1.628.589-2.694.589H6.5V4.5zm3.61 5.458h2.204c.644 0 1.146-.147 1.508-.44.361-.293.542-.715.542-1.265 0-.558-.182-.99-.546-1.294-.364-.305-.867-.457-1.509-.457H10.11v3.456zm0 2.65v3.982h2.564c.644 0 1.154-.166 1.53-.499.375-.332.563-.81.563-1.433 0-1.29-.694-1.934-2.083-1.934h-2.574V12.608zM22 5.5h-6v1h6v-1z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FFCC' }}
                className="text-[#F4F4F4]/60 hover:text-[#00FFCC] transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.398 6.675c1.024 1.323 1.602 2.964 1.602 4.825 0 .342-.024.678-.066 1.008-.506-.11-5.567-1.129-10.654-.49-.12-.282-.228-.57-.348-.858-3.147-.791-6.135-3.01-7.734-5.376C4.73 4.458 6.276 3.63 8.04 3.165c1.75-.46 3.624-.624 5.548-.48 1.295.097 2.562.37 3.81.84zm-1.46 10.812c-.63 1.38-1.7 2.52-3.06 3.24-1.383.734-2.962 1.12-4.642 1.12-1.563 0-3.043-.337-4.35-.966a8.973 8.973 0 01-2.852-2.45c-.776-1.006-1.29-2.15-1.536-3.398a9.94 9.94 0 01-.192-1.95c0-1.563.337-3.043.966-4.35a8.973 8.973 0 012.45-2.852c1.006-.776 2.15-1.29 3.398-1.536.53-.105 1.074-.175 1.63-.21-.144.24-.282.486-.414.738-.12.228-.234.462-.342.702-4.74.972-9.132 3.924-10.98 7.446.312.372.654.72 1.026 1.038 1.488 1.272 3.27 2.088 5.226 2.4 1.956.312 3.972.174 5.856-.402 1.884-.576 3.612-1.596 5.028-2.97.096-.09.186-.186.27-.282z"/>
                </svg>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FFCC' }}
                className="text-[#F4F4F4]/60 hover:text-[#00FFCC] transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FFCC' }}
                className="text-[#F4F4F4]/60 hover:text-[#00FFCC] transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FFCC' }}
                className="text-[#F4F4F4]/60 hover:text-[#00FFCC] transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1 }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00FFCC] rounded-full blur-[200px] pointer-events-none -z-10"
      />
    </section>
  );
}
