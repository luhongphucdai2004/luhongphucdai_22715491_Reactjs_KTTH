import { Input, Carousel, Image } from "antd"
export const TopBar = () => {
    return (
        <div className="bg-[#2d2a6e] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="#" className="flex items-center text-xs">
              Website IUH
            </a>
            <a href="#" className="flex items-center text-xs">
              E-Office
            </a>
            <a href="#" className="flex items-center text-xs">
              Email
            </a>
            <a href="#" className="flex items-center text-xs">
              Thư viện
            </a>
            <a href="#" className="flex items-center text-xs">
              Tin nội bộ
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xs">
              KẾT NỐI
            </a>
            <span className="text-xs">|</span>
            <a href="#" className="text-xs">
              LIÊN HỆ
            </a>
            <div className="flex space-x-2 ml-2">
              <a href="#" className="block">
                <Image
                  src={'icon-flag-vn.png'}
                  alt="Vietnamese"
                  width={30}
                  height={20}
                  className="rounded"
                />
              </a>
              <a href="#" className="block">
                <Image
                  src={'icon-flag-en.png'}
                  alt="English"
                  width={30}
                  height={20}
                  className="rounded"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}
