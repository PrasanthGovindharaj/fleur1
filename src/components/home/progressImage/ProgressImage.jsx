import React from 'react'
import './ProgressImage.css'
import imageProgress from '../../../image/image.png'

const ProgressImage = () => {
  return (
    <section>
      <div class="tweet-section">
        <img src={imageProgress} alt="Background" class="tweet-bg-image" />
        <div class="tweet-overlay">
          <i class="bi bi-twitter"></i>
          <h2>LATEST TWEETS</h2>
          <p>Couldn't connect with Twitter</p>
        </div>
      </div>
    </section>
  );
}

export default ProgressImage
