import { ChevronRight } from "lucide-react"
import { useState } from "react"


const menuItems = [
  {
    id: "lanh-dao",
    title: "LÃNH ĐẠO",
    submenu: [
      { id: "dang-uy", title: "ĐẢNG ỦY" },
      { id: "ban-giam-hieu", title: "BAN GIÁM HIỆU" },
    ],
  },
  {
    id: "phong-ban",
    title: "CÁC PHÒNG BAN",
    submenu: [
      { id: "phong-dao-tao", title: "PHÒNG ĐÀO TẠO" },
      { id: "phong-tai-chinh", title: "PHÒNG TÀI CHÍNH" },
    ],
  },
  {
    id: "khoa",
    title: "CÁC KHOA",
    submenu: [
      { id: "khoa-cntt", title: "KHOA CÔNG NGHỆ THÔNG TIN" },
      { id: "khoa-kinh-te", title: "KHOA KINH TẾ" },
    ],
  },
  {
    id: "vien",
    title: "CÁC VIỆN",
    submenu: [
      { id: "vien-nghien-cuu", title: "VIỆN NGHIÊN CỨU" },
      { id: "vien-dao-tao", title: "VIỆN ĐÀO TẠO" },
    ],
  },
  {
    id: "trung-tam",
    title: "CÁC TRUNG TÂM",
    submenu: [
      { id: "tt-ngoai-ngu", title: "TRUNG TÂM NGOẠI NGỮ" },
      { id: "tt-tin-hoc", title: "TRUNG TÂM TIN HỌC" },
    ],
  },
  {
    id: "phan-hieu",
    title: "CÁC PHÂN HIỆU",
    submenu: [
      { id: "ph-quang-ngai", title: "PHÂN HIỆU QUẢNG NGÃI" },
      { id: "ph-thanh-hoa", title: "PHÂN HIỆU THANH HÓA" },
    ],
  },
  {
    id: "doan-the",
    title: "ĐOÀN THỂ",
    submenu: [
      { id: "cong-doan", title: "CÔNG ĐOÀN" },
      { id: "doan-thanh-nien", title: "ĐOÀN THANH NIÊN" },
    ],
  },
]

export default function SidebarMenu() {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className="w-[300px]">
      {/* Sidebar Header */}
      <div className="bg-[#0047AB] text-white p-3">
        <h3 className="font-bold text-center">CƠ CẤU TỔ CHỨC</h3>
      </div>

      {/* Menu Items */}
      <div className="border border-gray-300">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div
              className={`flex justify-between items-center p-3 border-b border-gray-300 last:border-b-0 cursor-pointer
              ${hoveredItem === item.id ? "bg-white border-l-4 border-l-red-600" : "bg-gray-200"}`}
            >
              <span className={`font-medium ${hoveredItem === item.id ? "text-red-600" : "text-[#003399]"}`}>
                {item.title}
              </span>
             <div className="bg-gray-400 p-1 rounded-sm flex justify-center items-center"> <ChevronRight className="w-5 h-5 text-white" /></div>
            </div>

            {/* Submenu (appears on hover) */}
            {hoveredItem === item.id && item.submenu && (
              <div className="absolute left-full top-0 bg-white border border-gray-300 shadow-md z-10 min-w-[200px]">
                {item.submenu.map((subItem) => (
                  <a key={subItem.id} href={`#${subItem.id}`} className="block p-3 hover:bg-gray-100 text-[#003399]">
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
