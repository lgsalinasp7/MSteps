"use client";
import React, { useState } from 'react';
import { Play, Maximize } from 'lucide-react';
import { motion } from 'framer-motion';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
  showTitle?: boolean;
}

export function YouTubeVideo({ 
  videoId, 
  title, 
  className = "", 
  autoplay = false,
  showTitle = true 
}: YouTubeVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Extraer ID del video si se pasa una URL completa
  const extractVideoId = (input: string): string => {
    // Si ya es solo el ID, devolverlo
    if (input.length === 11 && !input.includes('/')) {
      return input;
    }
    
    // Extraer de diferentes formatos de URL de YouTube
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/v\/([^&\n?#]+)/
    ];
    
    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match) return match[1];
    }
    
    return input; // Fallback
  };

  const cleanVideoId = extractVideoId(videoId);
  const thumbnailUrl = `https://img.youtube.com/vi/${cleanVideoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${cleanVideoId}?${autoplay ? 'autoplay=1&' : ''}rel=0&modestbranding=1`;

  const handlePlayClick = () => {
    setIsLoaded(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (!isLoaded) {
    return (
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <div className="aspect-video w-full relative">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback si la imagen no carga
              e.currentTarget.src = `https://img.youtube.com/vi/${cleanVideoId}/hqdefault.jpg`;
            }}
          />
          
          {/* Overlay con botón de play */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <motion.button
              onClick={handlePlayClick}
              className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="size-6 fill-current" />
              {showTitle && <span className="font-semibold">Reproducir Video</span>}
            </motion.button>
          </div>

          {/* Título del video */}
          {showTitle && (
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h4 className="text-white font-semibold text-sm line-clamp-2">{title}</h4>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        <div className="aspect-video w-full relative">
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          
          {/* Botón de pantalla completa */}
          <button
            onClick={toggleFullscreen}
            className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-lg hover:bg-black/70 transition-colors opacity-0 hover:opacity-100"
          >
            <Maximize className="size-4" />
          </button>
        </div>
      </div>

      {/* Modal de pantalla completa */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
            
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-3 bg-black/70 text-white rounded-full hover:bg-black/90 transition-colors text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Componente más simple para casos específicos
export function YouTubeEmbed({ 
  videoId, 
  title = "YouTube Video",
  className = "w-full aspect-video" 
}: {
  videoId: string;
  title?: string;
  className?: string;
}) {
  const cleanVideoId = videoId.includes('/') ? 
    videoId.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^&\n?#]+)/)?.[1] || videoId :
    videoId;

  return (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${cleanVideoId}?rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
