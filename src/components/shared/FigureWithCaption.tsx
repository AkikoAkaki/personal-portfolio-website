import Image, { type ImageProps } from 'next/image'
import React from 'react'

interface FigureWithCaptionProps {
  src: string
  alt: string
  width: number
  height: number
  caption: React.ReactNode
  imageClassName?: string
  figureClassName?: string
  captionClassName?: string
}

export function FigureWithCaption({
  src,
  alt,
  width,
  height,
  caption,
  imageClassName,
  figureClassName,
  captionClassName,
}: FigureWithCaptionProps) {
  return (
    <figure className={`mt-6 mb-8 flex flex-col items-center ${figureClassName || ''}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`block max-w-full h-auto mb-3 p-1.5 border border-border shadow-sm rounded-xl bg-card ${imageClassName || ''}`}
      />
      <figcaption className={`mt-2 text-sm text-muted-foreground text-center leading-normal max-w-[90%] sm:max-w-prose px-2 ${captionClassName || ''}`}>
        {caption}
      </figcaption>
    </figure>
  )
}
