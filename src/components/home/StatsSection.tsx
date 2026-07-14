const stats = [
  { icon: "workspace_premium", value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: "group", value: "500+", label: "Đại Lý Toàn Quốc" },
  { icon: "moving", value: "1M+", label: "Khăn SX / Tháng" },
  { icon: "local_shipping", value: "63", label: "Tỉnh Thành" },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-surface-mint">
      <div className="max-w-300 mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              {stat.icon}
            </span>

            <p className="text-headline-xl font-headline-xl text-on-surface">
              {stat.value}
            </p>
            <p className="font-label-md text-on-surface-variant">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
