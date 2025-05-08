import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hero1 from "../assets/images/3U0A9447_new-min.jpg";
import hero2 from "../assets/images/159577838_1154606084970968_2558677444084025491_n.jpeg";
import hero3 from "../assets/images/HinhKhoaCNTT.jpg";
import hero4 from "../assets/images/IMG_0021.jpeg";
import hero5 from "../assets/images/sddefault.webp";
import hero6 from "../assets/images/thongtintuyensinh.png";
import hero7 from "../assets/images/vnsv.jpg";
import hero8 from "../assets/images/slide-1.png";

const banners = [
  { image: hero1, caption: "KHAI GIẢNG NĂM HỌC 2022–2023" },
  { image: hero2, caption: "HOẠT ĐỘNG ĐOÀN KHOA" },
  { image: hero3, caption: "TẬP THỂ GIẢNG VIÊN KHOA CNTT" },
  { image: hero4, caption: "NGÀY HỘI VIỆC LÀM SINH VIÊN" },
  { image: hero5, caption: "VIDEO GIỚI THIỆU KHOA CNTT" },
  { image: hero6, caption: "THÔNG TIN TUYỂN SINH 2025" },
  { image: hero7, caption: "SINH VIÊN KHOA CNTT IUH" },
  { image: hero8, caption: "CƠ SỞ VẬT CHẤT KHOA CNTT" },
];

const news = [
  "Thông báo Tuyển sinh đào tạo liên thông từ trình độ Cao đẳng...",
  "Lịch thi cuối kỳ hk2/2024-2025 từ ngày 12/5/2025–18/5/2025",
  "Thông báo kế hoạch xét công nhận tốt nghiệp đợt tháng 7 năm...",
  "Danh sách tách ngành Đại học Khóa 20",
  "Lịch thi cuối kỳ hk2/2024-2025 từ ngày 05/5/2025–11/5/2025",
];

const BannerWithHighlights = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
    {/* Swiper banner (chiếm 2 cột) */}
    <div className="md:col-span-2">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px]">
              <img
                src={banner.image}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-red-700 font-bold px-4 py-2 rounded-full text-sm shadow-md">
                {banner.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Tin nổi bật */}
    <div className="bg-gray-100 p-4  shadow h-fit">
      <h2 className="text-red-700 font-bold text-lg mb-2">TIN NỔI BẬT</h2>
      <ul className="space-y-2 text-sm">
        {news.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 leading-snug">
            <span className="text-gray-500 mt-0.5">▸</span>
            <span className="flex-1 text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default BannerWithHighlights;
