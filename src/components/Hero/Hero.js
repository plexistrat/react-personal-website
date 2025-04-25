import { useState, useEffect } from "react";
import { Download } from "lucide-react";
import "./Hero.css";

export default function Hero({ scrollTo }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadCv = () => {
    // Your existing download functionality
    console.log("CV download triggered");
    // Replace with actual download logic
  };

  return (
    <div className="hero-section">
      {/* Background elements */}
      <div className="hero-background">
        <div className="bg-circle-1"></div>
        <div className="bg-circle-2"></div>
      </div>
      {/* Photo container */}
      <div className={`hero-photo-container ${isVisible ? "visible" : ""}`}>
        <img src="./mainPhoto.jpg" alt="Sakis Staikos" className="hero-photo" />
      </div>
      {/* Text content */}
      <div className={`hero-text-container ${isVisible ? "visible" : ""}`}>
        <div className="intro-text">
          <span className="intro-prefix">Hello, I'm</span>
          <h1 className="intro-name">Sakis Staikos</h1>
        </div>

        <div className="profession-container">
          <h2 className="profession-text">
            Guitar/Music Tutor
            <span className="profession-divider"></span>
            Frontend Developer
          </h2>
        </div>

        <button onClick={downloadCv} className="download-button">
          <Download size={20} className="download-icon" />
          <span>Download CV</span>
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
