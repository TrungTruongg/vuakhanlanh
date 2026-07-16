const details = [
  {
    id: 1,
    name: "Khách đặt hàng trên các trang truyền thông của Aurix Uniforms.",
  },
  {
    id: 2,
    name: "Lên lệnh sản xuất đồng phục sau khi nhận đơn.",
  },
  {
    id: 3,
    name: "Tạo đơn hàng và chuyển bộ phận duyệt.",
  },
  {
    id: 4,
    name: "Duyệt đơn hàng — khách nhận email xác nhận.",
  },
  {
    id: 5,
    name: "Thiết kế mẫu, in - thêu logo theo yêu cầu, chỉnh sửa đến khi vừa ý.",
  },
  {
    id: 6,
    name: "May đồng phục theo quy trình chuẩn.",
  },
];

const ManufactureProcessDetail = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
            Quy trình chi tiết
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
            Quy Trình Sản Xuất 9 Bước
          </h2>
          <p className="text-black text-center mt-3 max-w-3xl mx-auto">
            Công ty Aurix Uniforms không chỉ chú trọng tạo ra sản phẩm hiệu quả mà
            còn tuân thủ các tiêu chuẩn cao nhất về chất lượng và độ bền.
          </p>
        </div>
        <div className="space-y-0">
          {details.map((detail) => (
            <div key={detail.id} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-3xl flex items-center justify-center font-bold text-base shrink-0">
                  {detail.id}
                </div>
                <div className="w-0.5 flex-1 bg-[#bbf7d0] my-2"></div>
              </div>
              <div className="pb-8">
                <p className="text-black font-medium pt-2 reveal reveal-in">
                  {detail.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufactureProcessDetail;
