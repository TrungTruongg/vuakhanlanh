const BranchAndMapSection = () => {
  const address = "17 đường 18E, KP1, Bình Hưng Hòa A, Bình Tân, Tp.HCM";
  const mapEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address,
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
//   const mapLinkSrc = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//     address,
//   )}`;

  return (
    <section className="py-16 bg-surface-low px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-primary mb-8">
              Hệ Thống Chi Nhánh
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-custom border-l-4 border-primary shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">
                      Trụ Sở Chính
                    </h4>
                    <p className="text-secondary mt-1">
                      17 đường 18E, KP1, Bình Hưng Hòa A, Bình Tân, Tp.HCM
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-custom border-l-4 border-primary shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <span className="material-symbols-outlined">factory</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">
                      Nhà Máy Sản Xuất
                    </h4>
                    <p className="text-secondary mt-1">
                      413/7/1 Lê Văn Quới, Bình Trị Đông A, Bình Tân, Tp.HCM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div data-purpose="map-section">
            <h2 className="text-3xl font-extrabold text-primary mb-8">
              Bản Đồ
            </h2>
            <div className="relative h-100 w-full rounded-custom overflow-hidden border border-surface-dim shadow-sm">
              <iframe
                title="Bản đồ trụ sở chính"
                src={mapEmbedSrc}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* <a
                href={mapLinkSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 bg-white px-3 py-2 rounded text-sm font-semibold text-blue-600 flex items-center gap-1 hover:bg-gray-50 transition-colors"
              >
                Mở trong Maps
                <span className="material-symbols-outlined text-base">
                  open_in_new
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchAndMapSection;
