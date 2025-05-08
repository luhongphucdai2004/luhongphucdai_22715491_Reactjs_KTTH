import { Image } from "antd"
import { PlayCircleOutlined } from "@ant-design/icons"
function VideoBox({ title, thumbnailSrc, videoUrl, viewAlla }) {
  return (
    <div className="video-panel h-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white font-bold">{title}</h3>
        {viewAlla && (
          <a href={viewAlla} className="bg-gray-300 text-gray-700 px-2 py-1 text-xs hover:bg-gray-400">
            xem tất cả
          </a>
        )}
      </div>
      <div className="bg-white p-1 h-[calc(100%-2rem)]">
        <a href={videoUrl} className="relative block w-full h-full">
          <img
            src={thumbnailSrc || "/placeholder.svg"}
            alt={`${title} video thumbnail`}
            width={400}
            height={250}
            className="w-full h-full object-contain"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircleOutlined  className="w-12 h-12 text-white opacity-80" />
          </div>
        </a>
      </div>
    </div>
  )
}
// https://www.youtube.com/watch?v=MSSNmxWw4Fs
export default VideoBox
