const stats = [
  { icon: "workspace_premium", value: "10+", label: "Năm Kinh Nghiệm" },
  { icon: "group", value: "500+", label: "Đại Lý Toàn Quốc" },
  { icon: "moving", value: "1M+", label: "Áo SX / Tháng" },
  { icon: "local_shipping", value: "63", label: "Tỉnh Thành" },
];

const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-gutter text-center">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-2 sm:space-y-3">
            <span className="material-symbols-outlined text-secondary font-bold text-2xl sm:text-3xl">
              {stat.icon}
            </span>
 
            <p className="text-2xl sm:text-3xl md:text-display-lg font-display-xl text-on-surface">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm font-label-md text-on-surface-variant">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
