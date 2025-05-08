import { RightOutlined } from "@ant-design/icons"
import { Image } from "antd"
import { NewsPanel } from "./NewsPannel"


const newsCategories = [
  {
    id: "announcements",
    title: "THÔNG BÁO",
    items: [
      {
        id: "1",
        title: "Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2025",
        date: "24-04-2025",
        isNew: true,
      },
      {
        id: "2",
        title: "Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các...",
        date: "21-04-2025",
        isNew: true,
      },
    ],
  },
  {
    id: "admissions",
    title: "TUYỂN SINH",
    items: [
      {
        id: "3",
        title: "Thông báo tuyển sinh đào tạo liên thông từ trình độ cao...",
        date: "28-03-2025",
      },
      {
        id: "4",
        title: "Thông báo v/v tuyển sinh đại học văn bằng hai, đợt 1 năm 2025",
        date: "20-03-2025",
      },
    ],
  },
  {
    id: "news",
    title: "TIN TỨC - SỰ KIỆN",
    hasImage: true,
    items: [
      {
        id: "5",
        title: "AVEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học...",
        date: "25-04-2025",
        isNew: true,
        image: "news1.jpg",
      },
      {
        id: "6",
        title: "Hội nghị khoa học quốc tế BAIC 2025 lần 2 tại IUH - Sức..",
        date: "22-04-2025",
        isNew: true,
      },
    ],
  },
  {
    id: "international",
    title: "HỢP TÁC QUỐC TẾ",
    hasImage: true,
    items: [
      {
        id: "7",
        title: "Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, khoa học...",
        date: "24-03-2025",
        image: "news2.jpg",
      },
      {
        id: "8",
        title: "Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds",
        date: "19-03-2025",
      },
    ],
  },
]

export default function NewsSection() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-5">
        {newsCategories.map((category) => (
          <NewsPanel key={category.id} category={category} />
        ))}
      </div>
    </div>
  )
}
