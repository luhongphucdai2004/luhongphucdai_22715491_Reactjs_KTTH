import { FacebookOutlined, TwitterOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 text-left">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Liên hệ */}
          <div>
            <h3 className="font-bold text-lg mb-4">Liên hệ</h3>
            <div className="flex items-start mb-3">
              <div className="flex-shrink-0 mr-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">◯</span>
                </div>
              </div>
              <div>
                <p>12 Nguyễn Văn Bảo, Gò Vấp, TP. Hồ Chí Minh</p>
                <p>Khoa Công nghệ Thông tin - Lầu 1 - Nhà H</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600">◯</span>
                </div>
              </div>
              <div>
                <p>Điện thoại</p>
                <p>028. 389 40390 - 167, Email: daotao.fit@iuh.edu.vn</p>
              </div>
            </div>
          </div>

          {/* Sinh viên */}
          <div>
            <h3 className="font-bold text-lg mb-4">Sinh viên</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Thông báo sinh viên
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Thực tập - Việc làm
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Đăng ký online
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Tài khoản DreamSpark
                </a>
              </li>
            </ul>
          </div>

          {/* Thống kê */}
          <div>
            <h3 className="font-bold text-lg mb-4">Thống kê</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Thông tin tuyển sinh
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-700 flex items-center">
                  <span className="mr-2">▶</span>
                  Liên hệ
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="flex items-center mb-1">
                <span className="mr-2">🔍</span>
                Số lượt truy cập : 21,192,899
              </p>
              <p className="flex items-center">
                <span className="mr-2">👤</span>
                Đang online : 46
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-blue-900 py-3 px-4 text-white">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="text-sm">
            © 2017 Khoa Công nghệ thông tin - Đại học Công nghiệp Thành phố Hồ Chí Minh
          </div>
          <div className="flex items-center mt-2 md:mt-0">
            <span className="mr-3">Chia sẻ</span>
            <a href="#" className="text-white mx-1 hover:opacity-75">
              <FacebookOutlined className="text-xl" />
            </a>
            <a href="#" className="text-white mx-1 hover:opacity-75">
              <TwitterOutlined className="text-xl" />
            </a>
            <a href="#" className="text-white mx-1 hover:opacity-75">
              <Linkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
