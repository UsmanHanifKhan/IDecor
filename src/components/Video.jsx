import { Container } from 'react-bootstrap';
import './Video.css';  // Assuming you have a separate CSS file for styling

const Video = () => {
  return (
    <Container>
      <div className="video-container">
        <iframe 
          className="responsive-video" 
          src="https://www.youtube.com/embed/LxpWWAdFSgs"  // Use the correct embed URL with the video ID
          title="YouTube Video" 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
};

export default Video;
