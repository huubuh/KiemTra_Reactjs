import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { SearchOutlined, DownOutlined } from "@ant-design/icons";

const menuItems = [
  "Trang chủ",
  "Giới thiệu",
  "Đào tạo",
  "Nghiên cứu",
  "Tin tức - Sự kiện",
  "Hoạt động",
  "Sinh viên",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`max-w-5xl mx-auto z-50 transition-all duration-300 p-2 ${
        scrolled
          ? "fixed top-0 left-0 bg-[#900] h-8 shadow-md"
          : "relative bg-[#900] h-11"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center h-full">
        {menuItems.map((item, idx) => (
          <div key={item} className="relative group">
            <button
              className="text-white px-3 h-full flex items-center font-normal hover:bg-[#a00] transition-colors text-[15px]"
              style={{
                borderRight:
                  idx !== menuItems.length - 1 ? "1px solid #b03a3a" : "none",
                height: "100%",
                minWidth: 90,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              {item}
              {idx !== 0 && <DownOutlined className="ml-1 text-xs" />}
            </button>
            {/* Dropdown menu có thể thêm ở đây nếu muốn */}
          </div>
        ))}
        <div className="ml-auto flex items-center h-full">
          <Input
            placeholder="Tìm kiếm ..."
            prefix={<SearchOutlined className="text-gray-500 mr-1" />}
            className="rounded shadow bg-white w-36"
            style={{
              height: scrolled ? 22 : 28,
              fontSize: 13,
              paddingLeft: 8,
              paddingRight: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}
