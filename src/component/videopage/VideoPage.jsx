import React from "react";

const suggestedVideos = [
  {
    img: "/Img/img13.jpg",
    description: "2024 Recap: Turning Dreams Into Reality!",
  },
  {
    img: "/Img/img13.jpg",
    description: "Vishy Anand Unveils Gukesh’s Chess Mastery | PM Modi’s Impact",
  },
  {
    img: "/Img/img13.jpg",

    description: "This One Tech Platform Is Revolutionizing India (Oxford Can’t Ignore It)",
  },
  {
    img: "/Img/img13.jpg",
    description: "PM Modi’s is New India’s ‘Jamvat’? Top Content Creators on India’s Growth",
  },
];

const VideoPage = () => {
  return (
    <div className="flex bg-[#F9F3E9] p-5 w-full gap-x-10  mx-auto">

      {/* Left Section (Video) */}
      <div className="w-1/2 p-5">
        <h2 className="text-[#2374E1] font-bold text-xl">MyGov Media</h2>
        <p className="text-gray-600 text-sm">
          Connecting citizens and government through the power of media
        </p>

        {/* Video Player */}
        <div className="mt-3">

          <video
            className="w-full rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/video/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>

        {/* Video Description */}
        <h3 className="mt-3 text-lg font-semibold uppercase">
          udghatan samaroh
        </h3>

        <div className="flex justify-between">

          {/* Channel Info */}
          <div className="flex items-center gap-2 mt-2">
            <img src="/Img/talasari logo.jpg" alt="MyGov" className="w-12" />
            <span className="text-gray-700"></span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-3">
            <button className="bg-[#E54E74] text-white px-4 py-2 rounded hover:bg-[#C4325B]">
              Share
            </button>
            <button className="bg-[#B047A1] text-white px-4 py-2 rounded hover:bg-[#8E3C86]">
              Download
            </button>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex justify-between items-center text-xs text-gray-600 mt-4">
          <span className="bg-[#E6C8A0] px-2 py-1 rounded">Special Days</span>
          <span>Video Size: 17.6 MB | Video Resolution: 1280x720</span>
        </div>

      </div>

      {/* Right Section (Suggested Videos) */}
      <div className="w-1/2 p-5 flex flex-col">
        <h3 className="text-lg font-semibold mb-3">Suggested Videos</h3>

        {/* Video Grid */}
        <div className="grid grid-cols-2 gap-4">
          {suggestedVideos.map((video, index) => (
            <div key={index} className="flex flex-col gap-2">
              {/* Thumbnail */}
              <img
                src={video.img}
                alt={video.title}
                className="w-full h-[130px] object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
              />
              {/* Title & Description */}
              <h4 className="text-sm font-semibold leading-tight">{video.title}</h4>
              <p className="text-xs text-gray-600">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
