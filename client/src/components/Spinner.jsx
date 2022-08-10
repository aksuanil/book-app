import React from 'react'

export default function Spinner() {
    return (
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 mt-36 border-t-4 border-b-4 border-yellow-500 rounded-full animate-spin"></div>
                <div className="pt-5 text-white">Loading...</div>
        </div>)
}