import React, { useState } from "react";

const options = [
    { id: 1, label: "DO/TASK", icon: "✅", bg: "bg-orange-100", text: "text-orange-600" },
    { id: 2, label: "DISCUSS", icon: "💬", bg: "bg-blue-100", text: "text-blue-600" },
    { id: 3, label: "POLL/SURVEY", icon: "📊", bg: "bg-teal-100", text: "text-teal-600" },
    { id: 4, label: "BLOG", icon: "✏️", bg: "bg-yellow-100", text: "text-yellow-600" },
    { id: 5, label: "TALK", icon: "🎤", bg: "bg-red-100", text: "text-red-600" },
    { id: 6, label: "QUIZ", icon: "🔴", bg: "bg-pink-100", text: "text-pink-600" },
    { id: 7, label: "MG PRIME", icon: "🎈", bg: "bg-green-100", text: "text-green-600" },
    { id: 8, label: "CAMPAIGN", icon: "📢", bg: "bg-purple-100", text: "text-purple-600" },
    { id: 9, label: "PLEDGE", icon: "🔗", bg: "bg-green-100", text: "text-green-600" },
    { id: 10, label: "PODCAST", icon: "🎧", bg: "bg-indigo-100", text: "text-indigo-600" },
];

const GetInvolved = () => {
    const [selected, setSelected] = useState(3); // Default selected item

    return (

        <div className="p-10 "

        >
            <h2 className="text-2xl font-bold text-blue-700 mb-2">GET <span className="text-green-600">INVOLVED</span></h2>
            <p className="text-gray-500 mb-6">Participate in nation-building activities</p>

            <div className="grid grid-cols-5 gap-4 md:grid-cols-5 sm:grid-cols-2">
                {options.map((option) => (
                    <div
                        key={option.id}
                        onClick={() => setSelected(option.id)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${option.bg} ${selected === option.id ? "border-teal-500 shadow-lg" : "border-transparent"
                            }`}
                    >
                        <div className="text-4xl">{option.icon}</div>
                        <p className={`mt-2 font-semibold ${option.text}`}>{option.label}</p>
                    </div>
                ))}
            </div>

            {/* Active Indicator */}
            <div className="mt-4 flex justify-center">
                <div className="w-24 h-1 bg-gray-300 relative">
                    <div
                        className="h-1 bg-teal-500 transition-all duration-300"
                        style={{ width: "10%", left: `${(selected - 1) * 10}%`, position: "absolute" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default GetInvolved;
