import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#0d3e84] border-t-4 border-red-800 flex justify-between items-center px-6 py-2 max-w-5xl mx-auto ">
      <span className="text-white text-sm">
        © 2017 Khoa Công nghệ thông tin - Đại học Công nghiệp Thành phố Hồ Chí
        Minh
      </span>
      <div className="flex items-center gap-2">
        <span className="text-blue-200 text-sm">Chia sẻ</span>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#295a8f] hover:bg-[#3b5998] p-1 px-2 rounded-sm"
        >
          <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1da1f2] hover:bg-[#0d8ddb] p-1 px-2 rounded-sm"
        >
          <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
            <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#295a8f] hover:bg-[#0077b5] p-1 px-2 rounded-sm"
        >
          <svg width="18" height="18" fill="#fff" viewBox="0 0 24 24">
            <path d="M22.23 0H1.77C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.77 24h20.459C23.208 24 24 23.229 24 22.271V1.723C24 .771 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zM5.34 7.633a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM20.452 20.452h-3.555v-5.605c0-1.336-.025-3.057-1.865-3.057-1.867 0-2.154 1.454-2.154 2.957v5.705h-3.555V9h3.414v1.561h.049c.476-.899 1.637-1.847 3.37-1.847 3.602 0 4.267 2.37 4.267 5.455v6.283z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
