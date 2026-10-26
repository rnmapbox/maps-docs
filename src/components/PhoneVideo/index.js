import React, {useEffect, useRef} from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

// Plays only while on screen, so the video isn't downloaded until it's scrolled into view.
// Reduced-motion users and no-JS visitors see the poster.
export default function PhoneVideo({src, poster, width, height, label, caption}) {
  const videoRef = useRef(null);
  const webm = useBaseUrl(`${src}.webm`);
  const mp4 = useBaseUrl(`${src}.mp4`);
  const posterUrl = useBaseUrl(poster);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      {threshold: 0.25},
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className={styles.demo}>
      <div className={styles.phone}>
        <video
          ref={videoRef}
          className={styles.screen}
          poster={posterUrl}
          width={width}
          height={height}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}>
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
