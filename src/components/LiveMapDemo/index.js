import React, {useEffect, useRef, useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const DEMO_ROUTE = '/example-app/V10/GlobeProjection';
const TILE_REQUEST = /api\.mapbox\.com\/(v4|tiles)\//;
const REVEAL_TIMEOUT_MS = 8000;

// The example app's token is URL-restricted, so tiles can fail (e.g. on localhost or previews).
// Tile response codes are only exposed via Resource Timing in Chromium; elsewhere we reveal after a timeout.
function tileStatus(frame) {
  let entries;
  try {
    entries = frame.contentWindow.performance.getEntriesByType('resource');
  } catch {
    return undefined;
  }
  const tile = entries.find((e) => TILE_REQUEST.test(e.name) && e.responseStatus);
  return tile?.responseStatus;
}

// The demo is the example app's web export (a ~5 MB bundle), so it only loads after an explicit click.
export default function LiveMapDemo() {
  const [state, setState] = useState('poster');
  const frameRef = useRef(null);
  const demoUrl = useBaseUrl(DEMO_ROUTE);
  const posterUrl = useBaseUrl('/img/home/live-demo-globe.webp');

  useEffect(() => {
    if (state !== 'loading') {
      return undefined;
    }
    const started = Date.now();
    const timer = setInterval(() => {
      const status = tileStatus(frameRef.current);
      if (status >= 200 && status < 300) {
        setState('live');
      } else if (status >= 400) {
        setState('failed');
      } else if (Date.now() - started > REVEAL_TIMEOUT_MS) {
        setState('live');
      }
    }, 250);
    return () => clearInterval(timer);
  }, [state]);

  const showFrame = state === 'loading' || state === 'live';

  return (
    <figure className={styles.demo}>
      <div className={styles.phone}>
        <div className={styles.screen} aria-busy={state === 'loading'}>
          {showFrame && (
            <iframe
              ref={frameRef}
              className={styles.frame}
              src={demoUrl}
              title="Live @rnmapbox/maps globe projection example"
              allow="fullscreen"
            />
          )}
          {state !== 'live' && (
            <div className={clsx(styles.cover, state === 'loading' && styles.coverLoading)}>
              <img
                className={styles.poster}
                src={posterUrl}
                width={300}
                height={620}
                fetchpriority="high"
                alt="Satellite map of northern Europe rendered by the @rnmapbox/maps globe projection example"
              />
              {state === 'poster' && (
                <a
                  className={styles.play}
                  href={demoUrl}
                  onClick={(e) => {
                    e.preventDefault();
                    setState('loading');
                  }}>
                  <span className={styles.playIcon} aria-hidden="true">▶</span>
                  Run the live map
                </a>
              )}
              {state === 'loading' && <span className={styles.badge}>Loading live map…</span>}
              {state === 'failed' && <span className={styles.badge}>Live map unavailable here</span>}
            </div>
          )}
        </div>
      </div>
      <figcaption className={styles.caption}>
        The @rnmapbox/maps example app, built for the web.{' '}
        <a href={demoUrl} target="_blank" rel="noopener">
          Open full screen
        </a>
      </figcaption>
    </figure>
  );
}
