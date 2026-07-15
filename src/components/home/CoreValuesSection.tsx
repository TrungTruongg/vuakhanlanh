const values = [
  { icon: "auto_awesome", title: "Cải Tiến", desc: "Cải tiến máy móc thiết bị, sáng tạo trong công việc để có được sản phẩm tốt nhất đến tay người tiêu dùng." },
  { icon: "diversity_3", title: "Giá Trị", desc: "Tạo ra giá trị cho đại lý, cho người dùng và cho cộng đồng trên tinh thần đôi bên cùng có lợi, WIN - WIN." },
  { icon: "task_alt", title: "Cam Kết", desc: "Cam kết sản xuất sản phẩm với chất liệu loại 1, đúng kích thước, đúng định lượng theo đơn đặt hàng." },
  { icon: "handshake", title: "Trung Thực", desc: "Nói đúng, làm đúng. Nói được, làm được. Nói thật, làm thật và làm có tâm, có trách nhiệm với khách hàng." },
];

export default function CoreValuesSection() {
  return (
    <section className="py-24 px-margin-desktop bg-white overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="font-display-lg text-display-lg text-primary">
            Nền Tảng Tạo Nên Thương Hiệu
          </span>
          <p className="text-body-md text-on-surface-variant mt-3">
            Chúng tôi kết hợp sự cải tiến không ngừng với tinh thần trung thực để mang đến sản phẩm vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {values.map((v) => (
            <div key={v.title} className="step-card bg-surface-container-lowest border border-outline-variant p-8 transition-all hover:shadow-xl group">
              <span className="material-symbols-outlined text-secondary font-bold w-12 h-12">
                {v.icon}
              </span>
              <h3 className="font-headline-md text-headline-md mb-4">{v.title}</h3>
              <p className="text-on-surface-variant mb-6">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}