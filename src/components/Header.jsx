import { Image } from "antd"

export const Header = () => {
    return (
        <div className="bg-[#a7c7e7] py-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              src={'logo.png'}
              alt="University Logo"
              width={150}
              height={100}
              className="h-auto"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-[#2d2a6e] text-xl font-bold">BỘ CÔNG THƯƠNG</h2>
            <h1 className="text-[#2d2a6e] text-3xl font-bold">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
            <p className="text-red-600 italic">Đổi mới tư duy, làm giàu thêm tri thức - đời sống</p>
          </div>
        </div>
      </div>

    )
}

