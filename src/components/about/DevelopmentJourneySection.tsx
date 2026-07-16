const DevelopmentJourneySection = () => {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
      <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-center mb-16 text-primary">
        Hành Trình Phát Triển
      </h2>
      <div className="relative timeline-line">
        {/* <!-- Milestone 1 --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center relative">
          <div className="md:text-right">
            <div className="font-display-lg text-headline-md text-secondary mb-2">
              2012
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">
              Thành Lập
            </h4>
            <p className="text-on-surface-variant max-w-sm md:ml-auto">
              Khởi đầu với xưởng may quy mô nhỏ tập trung vào chất lượng thủ
              công.
            </p>
          </div>
          <div className="hidden md:block w-4 h-4 bg-secondary-fixed border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 z-10 shadow-sm"></div>
          <div className="pl-12 md:pl-0"></div>
        </div>
        {/* <!-- Milestone 2 --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center relative">
          <div className="hidden md:block"></div>
          <div className="hidden md:block w-4 h-4 bg-secondary-fixed border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 z-10 shadow-sm"></div>
          <div className="pl-12 md:pl-0">
            <div className="font-display-lg text-headline-md text-secondary mb-2">
              2015
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">
              Sản Xuất Tự Động
            </h4>
            <p className="text-on-surface-variant max-w-sm">
              Triển khai hệ thống cắt và quản lý sản xuất tự động hóa hiện đại.
            </p>
          </div>
        </div>
        {/* <!-- Milestone 3 --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-center relative">
          <div className="md:text-right">
            <div className="font-display-lg text-headline-md text-secondary mb-2">
              2018
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">
              Chứng Nhận ISO 9001
            </h4>
            <p className="text-on-surface-variant max-w-sm md:ml-auto">
              Chính thức đạt tiêu chuẩn quản lý chất lượng quốc tế ISO
              9001:2015.
            </p>
          </div>
          <div className="hidden md:block w-4 h-4 bg-secondary-fixed border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 z-10 shadow-sm"></div>
          <div className="pl-12 md:pl-0"></div>
        </div>
        {/* <!-- Milestone 4 --> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          <div className="hidden md:block"></div>
          <div className="hidden md:block w-4 h-4 bg-secondary-fixed border-4 border-white rounded-full absolute left-1/2 -translate-x-1/2 z-10 shadow-sm"></div>
          <div className="pl-12 md:pl-0">
            <div className="font-display-lg text-headline-md text-secondary mb-2">
              2023
            </div>
            <h4 className="font-headline-md text-headline-md mb-2">
              Công Nghệ Nano
            </h4>
            <p className="text-on-surface-variant max-w-sm">
              Ứng dụng vật liệu Nano thông minh, chống khuẩn và thoáng khí trong
              BST mới.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentJourneySection;
