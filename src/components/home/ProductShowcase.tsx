import DP1 from "@/assets/dongphuc_1.webp";
import DP2 from "@/assets/dongphuc_2.webp";
import DP3 from "@/assets/dongphuc_3.webp";
import DP4 from "@/assets/dongphuc_4.webp";

export default function ProductShowcase() {
  return (
    <section className="py-24 px-margin-desktop max-w-container-max mx-auto">
      <div className="text-center mb-16">
        <span className="font-label-caps font-semibold text-secondary uppercase tracking-widest">
          Giải Pháp Của Chúng Tôi
        </span>
        <h2 className="font-display-lg text-display-lg text-primary mt-2">
          Danh Mục Sản Phẩm
        </h2>
      </div>
      <div className="bento-grid">
        <div className="bento-item col-span-12 md:col-span-8 h-80 relative overflow-hidden group">
          <img
            className="absolute inset-0 bg-cover bg-center w-full transition-transform duration-500 group-hover:scale-110"
            data-alt="A professional male and female executive in high-end, bespoke office uniforms featuring slim-fit blazers and crisp white shirts. They are standing against a minimalist light gray studio background. The lighting is sharp, highlighting the premium textile quality and professional tailoring style of the corporate attire."
            src={DP1}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-headline-md font-bold">Đồng Phục Công Sở</h3>
            <p className="font-body-md opacity-80">
              Vest, sơ mi, quần tây cao cấp cho khối văn phòng.
            </p>
          </div>
        </div>
        <div className="bento-item col-span-12 md:col-span-4 h-80 relative overflow-hidden group">
          <img
            className="absolute h-full inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Durable industrial protective workwear displayed on a mannequin in a modern, clean warehouse setting. The uniform is bright orange and navy blue with reflective strips, made from high-strength reinforced fabric. The lighting is bright and industrial, emphasizing safety and durability."
            src={DP2}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-headline-md font-bold">Đồng Phục Bảo Hộ</h3>
          </div>
        </div>
        <div className="bento-item col-span-12 md:col-span-4 h-80 relative overflow-hidden group">
          <img
            className="absolute h-full inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="Clean, sterile medical scrubs and laboratory coats in soft blue and white colors. The garments are presented in a bright, modern clinic environment with high-key lighting. The focus is on the hygienic, antimicrobial fabric texture and the comfortable, functional design of the healthcare uniforms."
            src={DP3}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-headline-md font-bold">Đồng Phục Y Tế</h3>
          </div>
        </div>
        <div className="bento-item col-span-12 md:col-span-8 h-80 relative overflow-hidden group">
          <img
            className="absolute w-full inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            data-alt="A row of neatly designed school uniforms including polo shirts and pleated skirts for students. The style is modern academic, featuring a color palette of navy blue, white, and burgundy. The background is a clean, bright school hallway with soft lighting, reflecting quality and comfort for daily wear."
            src={DP4}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-headline-md font-bold">Đồng Phục Trường Học</h3>
            <p className="font-body-md opacity-80">
              Thiết kế trẻ trung, năng động, chất liệu thấm hút mồ hôi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
