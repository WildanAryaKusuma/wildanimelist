"use client"
import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250",
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2 transition-all hover:shadow-2xl hover:shadow-color-secondary">
                <button onClick={handleVideoPlayer} className="text-color-primary float-right bg-color-secondary px-3 mb-1 rounded">
                    X
                </button>
                <YouTube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert("Video is broken, please try another")}/>
            </div>
        )
    }

    const OpenVideoPlayer = () => {
        return (
          <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-accent text-color-dark text-xl hover:bg-color-lightaccent transition-all shadow-xl">
            Watch Trailer
          </button>
        );
    }

    return isOpen
    ?
    <Player />
    :
    <OpenVideoPlayer />
}   

export default VideoPlayer