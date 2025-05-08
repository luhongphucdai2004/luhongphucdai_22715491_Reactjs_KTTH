import { Image } from "antd"

function CampusBox({ title, imageSrc, imageAlt, viewAllLink }) {
  return (
    <div className="campus-panel h-full ">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold">{title}</h3>
        {viewAllLink && (
          <a href={viewAllLink} className="bg-gray-300 text-gray-700 px-2 py-1 text-xs hover:bg-gray-400">
            xem tất cả
          </a>
        )}
      </div>
        <div className="relative w-full h-full">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            width={400}
            height={250}
            className="w-full h-full object-cover"
          />
        </div>
    </div>
  )
}

export default CampusBox
