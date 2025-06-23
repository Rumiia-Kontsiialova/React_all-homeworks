import video from '../assets/video.mp4'; 

const VideoComponent = () => {
    return (
        <div>
            <video width="600" controls>  {/* для кнопок на видео пауза\стоп */}
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoComponent;