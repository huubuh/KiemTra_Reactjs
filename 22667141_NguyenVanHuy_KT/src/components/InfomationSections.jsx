import React from "react";
import ttth from "../assets/images/thongtintuyensinh.png"; // trung tâm tin học
import iuhLogo from "../assets/images/logo.png"; // logo tin tức

const InformationSections = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
      {/* TIN TỨC - SỰ KIỆN */}
      <div className="bg-white p-4 border shadow">
        <h2 className="text-blue-800 font-bold text-lg mb-2 border-b pb-1">
          TIN TỨC - SỰ KIỆN
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2">
            <img src={iuhLogo} alt="logo" className="w-8 h-8" />
            <p>
              Seminar: Short-term prediction and impacts of different
              socio-factors and...
            </p>
          </li>
          <li className="flex gap-2">
            <img src={iuhLogo} alt="logo" className="w-8 h-8" />
            <p>
              [RECAP] SEMINAR FUTURE OF WORK: META-SKILLS FOR JOB (2025 – MÙA 2)
            </p>
          </li>
        </ul>
      </div>

      {/* THÔNG BÁO SINH VIÊN */}
      <div className="bg-white p-4 border shadow">
        <h2 className="text-blue-800 font-bold text-lg mb-2 border-b pb-1">
          THÔNG BÁO SINH VIÊN
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2">
            <img src={iuhLogo} alt="logo" className="w-8 h-8" />
            <p>
              Lịch thi cuối kỳ hk2/2024-2025 từ ngày 12/5–18/5/2025{" "}
              <img
                src="/src/assets/images/new.gif"
                alt="new"
                className="inline w-6 ml-1"
              />
            </p>
          </li>
          <li className="flex gap-2">
            <img src={iuhLogo} alt="logo" className="w-8 h-8" />
            <p>
              Thông báo kế hoạch xét công nhận tốt nghiệp đợt tháng 7...{" "}
              <img
                src="/src/assets/images/new.gif"
                alt="new"
                className="inline w-6 ml-1"
              />
            </p>
          </li>
        </ul>
      </div>

      {/* TRUNG TÂM TIN HỌC */}
      <div className="bg-white p-4 border shadow text-center">
        <h2 className="text-red-600 font-bold text-lg mb-2">
          TRUNG TÂM TIN HỌC
        </h2>
        <img src={ttth} alt="Trung tâm tin học" className="mx-auto mb-2" />
      </div>

      {/* THÔNG TIN TUYỂN SINH */}
      <div className="bg-white p-4 border shadow">
        <h2 className="text-blue-800 font-bold text-lg mb-2 border-b pb-1">
          THÔNG TIN TUYỂN SINH
        </h2>
        <img
          src="/src/assets/images/tuyensinh.jpg"
          alt="Tuyển sinh"
          className="w-full mb-3 rounded"
        />
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>
            Thông báo Tuyển sinh đào tạo liên thông từ CĐ lên ĐH – đợt 1{" "}
            <img
              src="/src/assets/images/new.gif"
              alt="new"
              className="inline w-6 ml-1"
            />
          </li>
          <li>Thông báo tuyển sinh trình độ ĐH đợt 1 năm 2025</li>
          <li>Thông báo tuyển sinh trình độ tiến sĩ năm 2025 – đợt 1</li>
        </ul>
      </div>

      {/* THỰC TẬP - TUYỂN DỤNG */}
      <div className="bg-white p-4 border shadow">
        <h2 className="text-blue-800 font-bold text-lg mb-2 border-b pb-1">
          THỰC TẬP - TUYỂN DỤNG
        </h2>
        <img
          src="/src/assets/images/dxc.png"
          alt="DXC"
          className="w-48 mx-auto mb-2"
        />
        <ul className="space-y-2 text-sm list-disc list-inside">
          <li>
            [DXC Vietnam]: TUYỂN FRESHER/ INTERN{" "}
            <img
              src="/src/assets/images/new.gif"
              alt="new"
              className="inline w-6 ml-1"
            />
          </li>
          <li>
            [DigiTech Solutions]: Tuyển thực tập{" "}
            <img
              src="/src/assets/images/new.gif"
              alt="new"
              className="inline w-6 ml-1"
            />
          </li>
          <li>
            [TMA]: Tuyển thực tập sinh khoá 46{" "}
            <img
              src="/src/assets/images/new.gif"
              alt="new"
              className="inline w-6 ml-1"
            />
          </li>
        </ul>
      </div>

      {/* VIDEO GIỚI THIỆU */}
      <div className="bg-white p-4 border shadow">
        <h2 className="text-red-600 font-bold text-lg mb-2">
          VIDEO GIỚI THIỆU
        </h2>
        <div className="aspect-video mb-2">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/JUpI7U9RkD4"
            title="Giới thiệu khoa"
            allowFullScreen
          />
        </div>
        <p className="text-sm text-gray-700 leading-snug">
          Giới thiệu Khoa CNTT
          <br />
          Trường Đại học Công nghiệp TP.HCM
          <br />
          Ngành Khoa học máy tính
        </p>
      </div>
    </div>
  );
};

export default InformationSections;
