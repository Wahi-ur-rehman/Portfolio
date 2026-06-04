import { useState, useEffect } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  fallback = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23374151' width='400' height='300'/%3E%3C/svg%3E",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
  }, [src]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`${className} ${isLoading ? "animate-pulse bg-gray-800" : ""}`}
      onLoad={() => setIsLoading(false)}
      onError={() => {
        setImgSrc(fallback);
        setIsLoading(false);
      }}
      loading="lazy"
    />
  );
}
