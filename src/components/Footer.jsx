import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-6 pb-2 border-t border-gray-300 text-left">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Contact Information */}
          <div>
            <h3 className="font-bold text-red-800 mb-4">LIÊN HỆ</h3>
            <p className="font-bold mb-2">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p className="mb-2">Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p className="mb-1">
              Điện thoại: <a href="tel:02838940390" className="text-blue-700 hover:underline">028 3894 0390</a> - <a href="tel:02838940390" className="text-blue-700 hover:underline">100</a>
            </p>
            <p className="mb-1">
              Tuyển sinh: <a href="tel:02839851932" className="text-blue-700 hover:underline">028 3985 1932</a> - <a href="tel:02838955858" className="text-blue-700 hover:underline">028 3895 5858</a> - <a href="tel:02839851917" className="text-blue-700 hover:underline">028 3985 1917</a>
            </p>
            <p className="mb-4">
              Email: <a href="mailto:dhcn@iuh.edu.vn" className="text-blue-700 hover:underline">dhcn@iuh.edu.vn</a>
            </p>
            
          </div>

          {/* Other Activities */}
          <div>
            <h3 className="font-bold text-red-800 mb-4">HOẠT ĐỘNG KHÁC</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Hoạt động phục vụ cộng đồng</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Sinh viên tình nguyện</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">CLB/Đội/Nhóm sinh viên</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Kết nối doanh nghiệp</a>
              </li>
            </ul>
          </div>

          {/* Extended Information */}
          <div>
            <h3 className="font-bold text-red-800 mb-4">THÔNG TIN MỞ RỘNG</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Báo chí viết về IUH</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Khám phá IUH</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Kỹ năng mềm</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Bộ sưu tập</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Dịch vụ sinh viên</a>
              </li>
            </ul>
          </div>

          {/* Useful Documents */}
          <div>
            <h3 className="font-bold text-red-800 mb-4">VĂN BẢN TIỆN ÍCH</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Quy chế-Quy định-Quy trình</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Ba công khai</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Biểu mẫu đào tạo</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Quản lý khoa học</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-700 hover:underline">Phản hồi</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats and Social Media */}
        <div className="mt-8 pt-4 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mt-4 flex items-center justify-center">
              <img 
                src={"logo.png"} 
                alt="Industrial University of Ho Chi Minh City Logo" 
                width={200} 
                height={50} 
                className="h-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
              <div className="flex items-center">
                <span className="mr-2">🔍</span>
                <span>Số lượt truy cập: 288,835,390</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👤</span>
                <span>Hôm nay: 21,743</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">👁️</span>
                <span>Đang xem: 97</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span>Chia sẻ</span>
              <a href="#" className="text-blue-700 hover:text-blue-900">
                <FacebookOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <TwitterOutlined className="text-2xl" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <Linkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-4 border-t border-gray-300 text-center text-sm">
          <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
          <p className="text-xs mt-1">Mọi hành động sử dụng nội dung đăng tải trên Website iuh.edu.vn phải có sự đồng ý bằng văn bản của Đại học Công nghiệp Thành phố Hồ Chí Minh.</p>
        </div>
      </div>
    </footer>
  )
}
