'use client'
import { useState } from "react"
import YouTube from "react-youtube"

export default function YoutubeAnime({ video_id }) {
  const [show, setShow] = useState(true)  

  return (
    <div
      className="fixed flex flex-col items-end right-2 bottom-2">
      <button className="text-xl bg-red-500 px-4" onClick={() => setShow((prev) => !prev)}>{ show  ? 'X' : '< tampilkan'}</button>

      <div className={`lg:w-96 lg:h-56 md:w-72 md:h-40 w-56 h-32 ${show ? '' : 'hidden'}`}>
        <YouTube className={`w-full h-full`}
        videoId={video_id} onReady={e => e.target.pauseVideo()} opts={{width:'100%', height:'100%'}}/>
      </div>
    </div>
  )
}
