import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-300 mx-auto px-8">
        <div className="bg-surface-mint rounded-3xl overflow-hidden border border-emerald-200 shadow-sm flex flex-col md:flex-row">
          <div className="md:w-1/2 p-12 md:p-16">
            <h2 className="text-headline-xl font-headline-xl mb-6">
              Liên Hệ Ngay Hôm Nay
            </h2>
            <p className="text-on-surface-variant mb-10">
              Hotline luôn sẵn sàng phục vụ quý khách hàng. Nhận báo giá miễn
              phí và chi tiết trong vòng 24 giờ.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-outline">
                    Hotline 24/7
                  </p>
                  <p className="text-headline-sm font-headline-sm">
                    0123.456.789
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-outline">
                    Email hỗ trợ
                  </p>
                  <p className="text-headline-sm font-headline-sm">
                    contact@aurix.vn
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white p-12 mx-auto md:p-16 border-l border-border-subtle">
            <form className="space-y-6">
              <h2 className="text-xl font-semibold text-center text-primary reveal reveal-in">
                BÁO GIÁ KHĂN LẠNH
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-label-caps text-outline mb-2">
                    LOẠI VẢI
                  </label>
                  <select className="w-full border border-emerald-300 rounded p-3">
                    <option>Vải Bi (Cao cấp)</option>
                    <option>Vải Lưới</option>
                    <option>Giấy Alex Mỹ</option>
                  </select>
                </div>
                <div>
                  <label className="block text-label-caps text-outline mb-2">
                    ĐỊNH LƯỢNG
                  </label>
                  <select className="w-full border border-emerald-300 rounded p-3">
                    <option>50g</option>
                    <option>55g</option>
                    <option>60g</option>
                    <option>65g</option>
                    <option>70g</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-label-caps text-outline mb-2">
                  KÍCH THƯỚC
                </label>
                <select className="w-full border border-emerald-300 rounded p-3">
                  <option value="17x19">17x19</option>
                  <option value="18x19">18x19</option>
                  <option value="19x19">19x19</option>
                  <option value="20x19">20x19</option>
                  <option value="21x19">21x19</option>
                  <option value="22x19">22x19</option>
                  <option value="23x19">23x19</option>
                  <option value="19x24">19x24</option>
                  <option value="20x24">20x24</option>
                  <option value="21x24">21x24</option>
                  <option value="22x24">22x24</option>
                  <option value="23x24">23x24</option>
                  <option value="24x24">24x24</option>
                  <option value="25x24">25x24</option>
                  <option value="26x24">26x24</option>
                  <option value="27x24">27x24</option>
                  <option value="28x24">28x24</option>
                  <option value="29x24">29x24</option>
                  <option value="30x24">30x24</option>
                </select>
              </div>
              <div>
                <label className="block text-label-caps text-outline mb-2">
                  BAO BÌ
                </label>
                <select className="w-full border border-emerald-300 rounded p-3">
                  <option value="mang-ngoc">Màng ngọc</option>
                  <option value="mang-phu-mau">Màng phủ màu</option>
                  <option value="mang-ghep">Màng ghép</option>
                </select>
              </div>
              <div>
                <label className="block text-label-caps text-outline mb-2">
                  IN ẤN
                </label>
                <select className="w-full border border-emerald-300 rounded-lg py-3 px-4 focus:ring-primary focus:border-primary">
                  <option>Không in</option>
                  <option>In thương hiệu</option>
                </select>
              </div>
              <button
                onClick={() => navigate("/qua-tang")}
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-headline-sm hover:opacity-95 transition-opacity"
                type="submit"
              >
                Nhận Báo Giá Chi Tiết
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
