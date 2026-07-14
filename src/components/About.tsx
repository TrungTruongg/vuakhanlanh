const About = () => {
  return (
    <div>
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="max-w-container-max mx-auto px-md relative z-10 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card border border-primary/20 text-primary font-mono-label mb-md uppercase tracking-widest">
            Về chúng tôi
          </span>
          <h1 className=" text-display-lg md:text-[64px]  mb-lg leading-tight">
           Giải Pháp SEO Toàn Diện Cho Doanh Nghiệp Hiện Đại
          </h1>
          <p className="max-w-2xl mx-auto text-body-lg mb-xl">
            Aurix là đơn vị tiên phong trong việc ứng dụng AI và Big Data để
            định nghĩa lại bối cảnh SEO toàn cầu. Chúng tôi không chỉ cung cấp
            công cụ, chúng tôi xây dựng nền tảng cho sự tăng trưởng bền vững.
          </p>
        </div>
      </section>

      <section className="py-xl relative">
        <div className="max-w-container-max mx-auto px-md grid grid-cols-1 md:grid-cols-2 gap-lg">
          <div className="glass-card p-xl rounded-xl hover-glow transition-all group">
            <div className="w-12 h-12 rounded-lg cyber-gradient flex items-center justify-center mb-md shadow-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary-fixed">
                visibility
              </span>
            </div>
            <h3 className=" text-headline-sm mb-md">
              Tầm Nhìn
            </h3>
            <p className=" leading-relaxed">
              {" "}
              Trở thành hệ sinh thái dữ liệu SEO thông minh nhất thế giới, giúp
              các doanh nghiệp thấu hiểu hành vi tìm kiếm của người dùng thông
              qua các mô hình dự đoán chính xác tuyệt đối.
            </p>
          </div>
          <div className="glass-card p-xl rounded-xl hover-glow transition-all group">
            <div className="w-12 h-12 rounded-lg cyber-gradient flex items-center justify-center mb-md shadow-lg group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-on-primary-fixed">
                rocket_launch
              </span>
            </div>
            <h3 className=" text-headline-sm mb-md">Sứ Mệnh</h3>
            <p className=" leading-relaxed">
              Đơn giản hóa sự phức tạp của dữ liệu. Chúng tôi trao quyền cho các
              chuyên gia SEO thông qua những thông tin chi tiết có thể hành động
              được, giúp họ vượt xa các đối thủ cạnh tranh.
            </p>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-lowest/50">
        <div className="max-w-container-max mx-auto px-md">
          <h2 className="text-headline-md text-center mb-xl">
            Hành Trình <span className="text-primary">Phát Triển</span>
          </h2>
          <div className="relative timeline-line space-y-xl">
            <div className="flex flex-col md:flex-row items-center gap-md relative">
              <div className="w-full md:w-1/2 md:text-right">
                <span className="text-primary font-mono-label text-xl">
                  2024
                </span>
                <h4 className=" text-headline-sm mt-xs">
                  Thành Lập
                </h4>
                <p className="mt-sm max-w-md md:ml-auto">
                  Aurix chính thức ra mắt với đội ngũ nòng cốt gồm 10 chuyên gia
                  data science và SEO.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(208,188,255,0.8)] border-4 border-surface z-20"></div>
              <div className="w-full md:w-1/2"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-md relative">
              <div className="w-full md:w-1/2 order-2 md:order-1"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-tertiary shadow-[0_0_15px_rgba(76,215,246,0.8)] border-4 border-surface z-20"></div>
              <div className="w-full md:w-1/2 order-1 md:order-2">
                <span className="text-tertiary font-mono-label text-xl">
                  2025
                </span>
                <h4 className=" text-headline-sm mt-xs">
                  Đột Phá Thuật Toán
                </h4>
                <p className="mt-sm max-w-md">
                  Phát triển thành công hệ thống Neural Ranking dự đoán biến
                  động Google lên tới 98% độ chính xác.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-md relative">
              <div className="w-full md:w-1/2 md:text-right">
                <span className="text-primary font-mono-label text-xl">
                  2026
                </span>
                <h4 className=" text-headline-sm mt-xs">
                  Mở Rộng Toàn Cầu
                </h4>
                <p className="mt-sm max-w-md md:ml-auto">
                  Thiết lập văn phòng đại diện tại Việt Nam, phục vụ
                  hơn 500 khách hàng.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(208,188,255,0.8)] border-4 border-surface z-20"></div>
              <div className="w-full md:w-1/2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl">
        <div className="max-w-container-max mx-auto px-md">
          <h2 className="text-headline-md mb-lg">
            Giá Trị <span className="text-tertiary">Cốt Lõi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-md h-auto md:h-150">
            <div className="md:col-span-2 md:row-span-2 glass-card rounded-xl p-lg flex flex-col justify-end overflow-hidden relative group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                <img
                  src='https://lh3.googleusercontent.com/aida-public/AB6AXuAlQQKlpdqC3fpp6-1kWVd10gCZYs9eQAi0nYET9Asvatl98C1Lz4QnAJXx0clNQO_l1FbA54AiDEAfLdxpPx99jVhKeKUIiJLB9x-YFJih3YKRJSSlnf17nTctj23UZ0hXTR3I7N5SW5NVm7oT3KWs47Yayb_g0oeCkRprpQSjrfLS5jPjX9g3YNynSjJ5lbYqyS8DqN_YYxbb9AnNMstshF51Ry-uJuFyUP7sM3gdgwtPYMLp2Mw'
                  className="w-full h-full bg-tech bg-cover bg-center"
                  data-alt="A sophisticated close-up of a high-tech circuit board with glowing neon pathways in purple and electric blue. The aesthetic is extremely detailed and futuristic, suggesting a high level of technical precision and computing power. The lighting is low-key with sharp, vibrant accents that reflect off dark metallic surfaces, creating a premium software feel."
                />
              </div>
              <div className="relative z-10">
                <h4 className=" text-headline-sm mb-sm text-primary">
                  Công Nghệ Vượt Trội
                </h4>
                <p className="text-on-surface-variant">
                  Chúng tôi liên tục đẩy lùi các giới hạn của AI để mang lại
                  giải pháp tốt nhất.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 glass-card rounded-xl p-lg flex items-center gap-lg hover-glow transition-all">
              <div className="shrink-0 w-16 h-16 rounded-full glass-card border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-3xl">
                  verified_user
                </span>
              </div>
              <div>
                <h4 className=" text-headline-sm mb-xs">
                  Minh Bạch
                </h4>
                <p className="text-on-surface-variant">
                  Mọi dữ liệu đều có nguồn gốc rõ ràng và có thể kiểm chứng.
                </p>
              </div>
            </div>
            <div className="glass-card rounded-xl p-lg hover-glow transition-all group">
              <span className="material-symbols-outlined text-primary mb-sm text-3xl group-hover:rotate-12 transition-transform">
                speed
              </span>
              <h4 className="text-headline-sm mb-xs">
                Tốc Độ
              </h4>
              <p className="text-sm">
                Xử lý hàng tỷ điểm dữ liệu trong mili giây.
              </p>
            </div>
            <div className="glass-card rounded-xl p-lg hover-glow transition-all group">
              <span className="material-symbols-outlined text-tertiary mb-sm text-3xl group-hover:-rotate-12 transition-transform">
                group
              </span>
              <h4 className=" text-headline-sm mb-xs">
                Đồng Hành
              </h4>
              <p className="text-sm">
                Khách hàng thành công là thước đo của chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-md">
          <div className="flex justify-between items-end mb-xl">
            <div className="max-w-xl">
              <h2 className="text-headline-md mb-sm">
                Đội Ngũ <span className="text-primary">Lãnh Đạo</span>
              </h2>
              <p className="text-on-surface-variant">
                Những chuyên gia hàng đầu hội tụ đam mê và chuyên môn.
              </p>
            </div>
            <button className="hidden md:block text-primary border-b border-primary/20 pb-1 hover:border-primary transition-colors">
              Tham gia ngay
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="group">
              <div className="aspect-4/5 rounded-xl overflow-hidden glass-card mb-md relative border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  data-alt="A professional portrait of a tech CEO in a sleek dark studio setting. The lighting is dramatic and cinematic, with a soft purple rim light accentuating their features. The style is modern and high-end, evoking trust and leadership in a digital age. The background is a very dark, blurred digital server room with faint blue status lights."
                  //src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrzFZ_ccvBJFc1AIxp1JhYbr6ltI6HZtQdU7AzkxO6k6UGf5BBKLORdmAmTZPOTTqOmGU6Xm07Ls_-zeeMQ17GceEhtCOLwovlXWcu1B543yAOVLQVNLR-rCWX90DobXT0CaNOYW3I4occBnLq7JxUoiBzip5OcRaqWDdeGDbWIFv4EJm6-OsZDX2sfaPhOgF5yEyo6DE6DPBR8Vdn_zCAIVZxPuQ7K03_3KLUzSQZM9lg0lBB1dY"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className=" text-headline-sm">Mr Bao</h4>
              <p className="text-primary font-mono-label mt-1">
                Founder &amp; CEO
              </p>
            </div>

            <div className="group">
              <div className="aspect-4/5 rounded-xl overflow-hidden glass-card mb-md relative border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  data-alt="A professional headshot of a female technology executive. She has a confident expression and is wearing a modern, minimalist dark blazer. The lighting uses a cool electric blue accent on one side and warm white on the other, creating a high-contrast 'tech-noir' aesthetic. The background is dark and abstract, suggestive of digital fluidity and data."
                  //src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPCcEDfzvdHirfYMLIgr_IV1Wl1wOAF6KRfBb1-Kp0fEP6jj5I_wGF0ilANF8vqvj7LFxQ3IOWm1GZGs4R9fyDGAjzGmffdwjoG-vP6GOr_VFOSt0u_VgSmkkMMXnPY7AccN0oZ61aN_4Py6fDOspxMxGieGqmPDcE_BLswfAVLt5RiwqEoS0AZfaCrdr6S_KYoHTPppI1xJydi1JahHpugB92S0_Jb4DCr3QF1nZu1IYuZtjBICE"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className=" text-headline-sm">Mr Bao</h4>
              <p className="text-primary font-mono-label mt-1">
                Chief AI Architect
              </p>
            </div>

            <div className="group">
              <div className="aspect-4/5 rounded-xl overflow-hidden glass-card mb-md relative border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  data-alt="A stylized portrait of a senior data scientist with glasses, looking directly at the camera with a slight smile. The lighting is clean and sharp, using a subtle cyber-purple color palette for the highlights. The overall mood is intelligent and technical. The backdrop is a minimalist dark space with very faint, elegant data visualization graphics."
                  //src="https://lh3.googleusercontent.com/aida-public/AB6AXuALk2McxPL3IMdPkABzBZpsCUHaUAMLlnuWUmIAUgF8U5BzOckFIL22iuVURYOErHLhSaaVNKNM3eMLP3wn5wYQcaRt3CN4y4m8YXy-TEZy6We_VVw1bHE4OwSz26g9fs-yy7IAxoeAGtkImeBx4zHYsP4sYwG5r2Ktb8gXTXGOCmN2dPsBG5gApwAY8oKX9hmGNidsqCoKge-mHEHHw8pw-1o2mbUdoT6h4gOzEoPLg4kaHLOFjIs"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className=" text-headline-sm">Mr Minh</h4>
              <p className="text-primary font-mono-label mt-1">
                Sales Manager
              </p>
            </div>

            <div className="group">
              <div className="aspect-4/5 rounded-xl overflow-hidden glass-card mb-md relative border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  data-alt="A professional portrait of a creative director in a high-tech marketing firm. The style is sophisticated with a mix of moody dark shadows and vibrant neon light streaks in the background. The subject is dressed in a smart-casual tech outfit. The lighting is artistic and premium, emphasizing a sleek, futuristic aesthetic that aligns with the Aurix brand."
                  //src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzTMgfWPtpfqtlZYb-VoyVomjPLBbYyxZkYcq-wQs9VUURYK1Buf4nYhnlhfpmeSWqqDaEAMF2ujWnY6vpTBZbdcpDV4a1J6S8kNqTZI3OWh9lwaktXHM-TQQP_ZccuMqz_H8pZuKtiaDqdfq6WJHErYsCnSOAfuMn4hCId2c9ws8wR-f99vwGQQkt6tvKNyaZMlhZVj-Cgzm0EpWrd6gPIjtHeHQh-TyfsivyWcf6sEW5v-98dFA"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className=" text-headline-sm">Mr Trung</h4>
              <p className="text-primary font-mono-label mt-1">Web Developer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-xl overflow-hidden">
        <div className="max-w-container-max mx-auto px-md grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden glass-card border border-white/10 relative z-10">
              <img
                className="w-full h-full object-cover opacity-80"
                data-alt="A wide-angle interior shot of a modern, high-tech open-plan office space at night. The ceiling is high with industrial features, and the room is lit by hanging electric blue and purple linear LED lights. People are collaborating at glass desks with large curved monitors. The vibe is productive, immersive, and sleek, representing a 'next-gen' workplace culture."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANqT8-_yztwMJV206QsVmFXuRC92eNP15IFAt3B6rRZ1pHzs5G2t1j28o5P0Hz4F9yEo2I1HdS9nBPTvG1UP3SL8_ycyG73cnkFJYtXLI1LMkAO4pwEVSWBoJiAEudn3EOlqxcv364xXZF6tQ7Mp7js2070sYV5nZ3Zz44pU5vo1vExBt1Pafz5eV5NRepfkHiCSFW6pbdrxHgAof1mgXW5HddKeB2iDy9WFoVH9dgajxzE_ofZfQ"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 cyber-gradient blur-[80px] opacity-30"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-tertiary blur-[80px] opacity-20"></div>
          </div>
          <div>
            <h2 className="text-headline-md mb-md">
              Văn Hóa <span className="text-gradient">Aurix</span>
            </h2>
            <div className="space-y-md">
              <div className="flex items-start gap-md">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                <p className="text-on-surface-variant">
                  <strong className="text-on-surface">
                    Không Ngừng Học Hỏi:
                  </strong>{" "}
                  Chúng tôi dành 10% thời gian làm việc để nghiên cứu các công
                  nghệ mới nhất.
                </p>
              </div>
              <div className="flex items-start gap-md">
                <div className="mt-1 w-2 h-2 rounded-full bg-tertiary shrink-0"></div>
                <p className="text-on-surface-variant">
                  <strong className="text-on-surface">Quyền Riêng Tư:</strong>{" "}
                  Bảo mật dữ liệu khách hàng là ưu tiên hàng đầu trong mọi quy
                  trình.
                </p>
              </div>
              <div className="flex items-start gap-md">
                <div className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></div>
                <p className="text-on-surface-variant">
                  <strong className="text-on-surface">Cộng Tác:</strong> Sức
                  mạnh của chúng tôi nằm ở sự giao thoa giữa kỹ thuật và sáng
                  tạo.
                </p>
              </div>
            </div>
            <button className="mt-xl px-8 py-3 rounded-xl glass-card border border-white/10 hover:bg-white/5 transition-all">
              Khám phá cơ hội nghề nghiệp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
