import { RightOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { ChevronRight } from "lucide-react"
export const NewsPanel = ({ category }) => {
    return (
      <div className="border border-gray-300">
        <div className="flex justify-between items-center border-b border-gray-300 bg-gray-100">
          <h3 className="text-[#003399] font-bold px-3 py-2 border-b-2 border-red-600 bg-white">{category.title}</h3>
          <a href="#" className="text-xs text-gray-600 px-2 py-1 mr-1 hover:underline">
            xem tất cả
          </a>
        </div>
        <div className="p-3">
          {category.hasImage && category.items[0]?.image && (
            <div className="mb-4">
              <Image
                src={category.items[0].image || "/placeholder.svg"}
                alt={category.items[0].title}
                width={350}
                height={100}
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          <div className="">
            {category.items.map((item) => (
              <div key={item.id} className="flex">
                <ChevronRight  className="text-red-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <a href="#" className="text-sm hover:text-blue-600 hover:underline">
                    {item.title}
                  </a>
                  <div className="flex items-center mt-1">
                    <span className="text-xs text-gray-500">{item.date}</span>
                    {item.isNew && <span className="ml-2 bg-red-600 text-white text-[10px] px-1 rounded">NEW</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }