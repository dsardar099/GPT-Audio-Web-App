import React from 'react'

const ListeningAnimation = () => {
    return (
        <>
            <div className="flex items-center justify-center mt-4">
                <div className="w-2 h-4 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-6 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-10 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-7 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
                <div className="w-2 h-5 bg-blue-500 rounded-full animate-sound-waves mr-1"></div>
            </div>
            <div className="font-semibold">Listening...</div>
        </>
    )
}

export default ListeningAnimation