import React, {useRef, useState} from 'react'

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    //const [hasClicked, setHasClicked]  = useState(false);
    //const [isLoading, setIsLoading] = useState(true);
    //const [loadedVideos, setLoadedVideos] = useState(0);

    const [ setHasClicked]  = useState(false);
    const [ setLoadedVideos] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    }

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

    const handleMiniVidClick = () => {
        setHasClicked(true);

        setCurrentIndex((prevIndex) => prevIndex);
    }

    const getVideoSrc = (index) => `video/hero-${index}.mp4`

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className={"mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg"}>
                        <div onClick={handleMiniVidClick} className={"origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"} >
                            <video ref={nextVideoRef}
                                   src={getVideoSrc(upcomingVideoIndex)}
                                   loop
                                   muted
                                   id="current-video"
                                   className={"size-64 origin-center scale-150 object-cover object-center"}
                                   onLoadedData={handleVideoLoad} />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className={"absolute-center invisible absolute z-20 size-64 object-cover object-center"}
                        onLoadedData={handleVideoLoad}
                    />

                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex === totalVideos -1 ? 1 : currentIndex)}
                        autoplay
                        loop
                        muted
                        id="next-video"
                        className={"absolute left-0 top-0 size-full object-cover object-center"}
                        onLoadedData={handleVideoLoad}
                    />
                </div>
                <h1 className={"special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75"}>
                    Engelmann Films
                </h1>
                <div className={"absolute left-0 top-0 z-40 size-full"}>
                    <div className={"mt-24 px-5 sm:px-10"}>
                        <h1 className={"special-font hero-heading text-blue-100"}>redefi <b>n</b>e</h1>
                        <p className={"mb-5 max-w-64 font-robert-regular text-blue-100"}>Enter the Metagame Layer <br/> Unleash the Play Economy </p>
                    </div>
                </div>
            </div>
            <p className="font-general text-xl">General Sans (Fontshare)</p>
            <p className="font-circular text-xl">Inter (Google)</p>
            <p className="font-robert text-xl">Manrope (Google)</p>
            <p className="font-zentry text-xl">Outfit (Google)</p>
        </div>
    )
}
export default Hero
