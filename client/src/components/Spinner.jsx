import React from 'react'

export default function Spinner() {
    return (
            <div className="flex flex-col items-center">
                <div className="w-40 h-40 mt-36 border-t-4 border-b-4 border-yellow-900 rounded-full animate-spin"></div>
                <div className="pt-5">Loading...</div>
        </div>)
}