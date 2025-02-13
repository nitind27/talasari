import React from 'react'

const Sidemenu = ({ Sidedata }) => {
    return (
        <div>
            <aside className="bg-gray-100 w-64 p-4">
                <h2 className="text-lg font-semibold mb-2">Events</h2>
                <div className="flex flex-col">
                    {Sidedata.map((item) => (
                        <div key={item.id} className="mb-2 ">
                            <div className="font-medium">{item.label}</div>
                            <div className="text-sm text-gray-600">{item.value}</div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    )
}

export default Sidemenu
