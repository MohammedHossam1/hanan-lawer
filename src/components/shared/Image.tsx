import React, { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fallbackSrc?: string;
  aspect?: string; // e.g. "aspect-video", "aspect-[9/16]"
  priority?: boolean; // if true, don't lazy-load
  caption?: string;
  onClick?: () => void; // optional click handler
};

export default function Image({
  src,
  alt = "Image",
  className = "",
  width,
  height,
  fallbackSrc,
  aspect = "",
  priority = false,
}: ImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const displaySrc = hasError && fallbackSrc ? fallbackSrc : src;

  return (
    <div className={`image-component ${className} w-full`}>
      {/* Wrapper keeps aspect ratio if provided */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gray-100 ${aspect} flex items-center justify-center`}
        style={{ width: width || "100%", height: height || undefined }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* simple placeholder / shimmer */}
            <div className="animate-pulse w-2/3 h-2/3 bg-gray-200 rounded-md" />
          </div>
        )}

        <img
          src={displaySrc}
          alt={alt}
          onError={handleError}
          onLoad={handleLoad}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`relative object-cover w-full h-full transition-transform duration-300 ease-in-out ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
          style={{
            display: hasError && !fallbackSrc ? "none" : undefined,
          }}
      
        />

        {hasError && !fallbackSrc && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="mb-2 text-sm font-semibold text-muted-foreground">Image failed to load</div>
            <button
              onClick={() => {
                setHasError(false);
                setIsLoaded(false);
              }}
              className="px-3 py-1 rounded bg-gray-800 text-white text-sm"
            >
              Retry
            </button>
          </div>
        )}
     
      </div>
    </div>
  );
}
