"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Search, Bell } from "lucide-react";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lễ khai giảng năm học 2024-2025",
      description: "Buổi lễ trọng thể chào mừng tân sinh viên",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Hội thao sinh viên toàn quốc",
      description: "Sân chơi thể thao lớn nhất trong năm",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lễ tốt nghiệp khóa 2024",
      description: "Ngày trọng đại của các tân cử nhân",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
      title: "Hội chợ việc làm 2024",
      description: "Cơ hội kết nối với doanh nghiệp",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="w-full bg-gray-50 min-h-screen p-5">
      <div className="relative">
        <div
          className="relative h-96 lg:h-[500px] overflow-hidden group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Slides Container */}
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="min-w-full h-full relative">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white px-8 max-w-4xl">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-xl lg:text-2xl opacity-90 drop-shadow">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125 shadow-lg"
                    : "bg-white/50 hover:bg-white/80 hover:scale-110"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input
                type="text"
                placeholder="Tìm kiếm chức năng..."
                className="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-200">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: "📚", title: "Học tập", color: "bg-blue-500" },
            { icon: "👤", title: "Hồ sơ", color: "bg-green-500" },
            { icon: "💰", title: "Tài chính", color: "bg-yellow-500" },
            { icon: "📊", title: "Thống kê", color: "bg-purple-500" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center cursor-pointer group"
            >
              <div
                className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              THÔNG BÁO
            </h2>
            <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-white text-sm transition-colors duration-200">
              Xem tất cả
            </button>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                "Thông báo mới về lịch thi cuối kỳ các môn tiếng anh chương trình World English 6 HK2/24-25",
                "Lịch thi cuối kỳ môn Toán cao cấp A1 - HK2/24-25",
                "Thông báo quan trọng về việc đăng ký học phần HK3/24-25",
              ].map((notice, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 hover:text-red-600 transition-colors duration-200">
                    {notice}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
