"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ProjectGalleryProps {
  images: {
    url: string
    alt: string
  }[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover transition-all hover:scale-105"
            />
          </div>
        </Card>
      ))}
    </div>
  )
}