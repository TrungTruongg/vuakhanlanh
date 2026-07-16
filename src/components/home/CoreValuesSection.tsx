const values = [
  {
    icon: "auto_awesome",
    title: "Cải Tiến",
    desc: "Cải tiến máy móc thiết bị, sáng tạo trong công việc để có được sản phẩm tốt nhất đến tay người tiêu dùng.",
  },
  {
    icon: "diversity_3",
    title: "Giá Trị",
    desc: "Tạo ra giá trị cho đại lý, cho người dùng và cho cộng đồng trên tinh thần đôi bên cùng có lợi, WIN - WIN.",
  },
  {
    icon: "task_alt",
    title: "Cam Kết",
    desc: "Cam kết sản xuất sản phẩm với chất liệu loại 1, đúng kích thước, đúng định lượng theo đơn đặt hàng.",
  },
  {
    icon: "handshake",
    title: "Trung Thực",
    desc: "Nói đúng, làm đúng. Nói được, làm được. Nói thật, làm thật và làm có tâm, có trách nhiệm với khách hàng.",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">
            Nền Tảng Tạo Nên Thương Hiệu
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-2xl mx-auto">
            Chúng tôi kết hợp sự cải tiến không ngừng với tinh thần trung thực
            để mang đến sản phẩm vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-gutter">
          {values.map((v) => (
            <div
              key={v.title}
              className="step-card bg-surface-container-lowest border border-outline-variant p-6 sm:p-8 transition-all hover:shadow-xl group"
            >
              <span className="material-symbols-outlined text-secondary font-bold text-3xl sm:text-4xl block mb-3">
                {v.icon}
              </span>
              <h3 className="text-headline-md sm:text-xl font-headline-md mb-2 sm:mb-4">
                {v.title}
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
