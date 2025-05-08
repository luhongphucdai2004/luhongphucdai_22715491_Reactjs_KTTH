import { useState } from "react"
import { Input } from "antd"
import { SearchOutlined, HomeOutlined, DownOutlined, MenuOutlined } from "@ant-design/icons"

export default function Navigation() {

  return (
    <div className="bg-[#b30000] border-t border-b border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Mobile menu button */}
          <button
            className="text-white p-3 focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <MenuOutlined className="text-xl" />
          </button>

        {/* Desktop Navigation */}
        <nav
          className="flex flex-col md:flex-row w-full md:w-auto">
          <ul className="flex flex-col md:flex-row">
            <li>
              <a href="#" className="flex items-center px-4 py-3 text-white hover:bg-blue-800 font-medium">
                <HomeOutlined />
              </a>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800 font-medium"
              >
                <span>GIỚI THIỆU</span>
                <DownOutlined className="ml-1 text-xs" />
              </a>
              <div className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg z-10 w-48">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Giới thiệu chung
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Lịch sử phát triển
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Cơ cấu tổ chức
                </a>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800 font-medium"
              >
                <span>ĐÀO TẠO</span>
                <DownOutlined className="ml-1 text-xs" />
              </a>
              <div className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg z-10 w-48">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Đại học
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sau đại học
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Đào tạo quốc tế
                </a>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="flex items-center justify-between px-4 py-3 text-white hover:bg-blue-800 font-medium"
              >
                <span>TUYỂN SINH</span>
                <DownOutlined className="ml-1 text-xs" />
              </a>
              <div className="hidden group-hover:block absolute left-0 top-full bg-white shadow-lg z-10 w-48">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Đại học chính quy
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sau đại học
                </a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Vừa làm vừa học
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 text-white hover:bg-blue-800 font-medium">
                NGHIÊN CỨU
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 text-white hover:bg-blue-800 font-medium">
                SINH VIÊN
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 text-white hover:bg-blue-800 font-medium">
                GIẢNG VIÊN
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-3 text-white hover:bg-blue-800 font-medium">
                VĂN BẰNG
              </a>
            </li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="p-2 ml-auto">
          <Input placeholder="Tìm kiếm" suffix={<SearchOutlined />} className="w-40" style={{ borderRadius: "0" }} />
        </div>
      </div>
    </div>
  )
}
