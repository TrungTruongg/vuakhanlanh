const values = [
  { icon: "auto_awesome", title: "Cải Tiến", desc: "Cải tiến máy móc thiết bị, sáng tạo trong công việc để có được sản phẩm tốt nhất đến tay người tiêu dùng." },
  { icon: "diversity_3", title: "Giá Trị", desc: "Tạo ra giá trị cho đại lý, cho người dùng và cho cộng đồng trên tinh thần đôi bên cùng có lợi, WIN - WIN." },
  { icon: "task_alt", title: "Cam Kết", desc: "Cam kết sản xuất sản phẩm với chất liệu loại 1, đúng kích thước, đúng định lượng theo đơn đặt hàng." },
  { icon: "handshake", title: "Trung Thực", desc: "Nói đúng, làm đúng. Nói được, làm được. Nói thật, làm thật và làm có tâm, có trách nhiệm với khách hàng." },
];

export default function CoreValuesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-300 mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-headline-xl font-headline-xl mb-4">
            Nền Tảng Tạo Nên Thương Hiệu
          </h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Chúng tôi kết hợp sự cải tiến không ngừng với tinh thần trung thực để mang đến sản phẩm vượt trội.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-8 rounded-xl text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                {v.icon}
              </span>
              <h4 className="text-headline-sm font-headline-sm mb-2">{v.title}</h4>
              <p className="text-body-sm text-on-surface-variant">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}