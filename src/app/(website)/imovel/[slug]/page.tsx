'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Share2, Heart, Building2, Car, Bath, Bed, Ruler, MapPin, Phone, Mail, X } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

export default function Component() {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [mainCarouselApi, setMainCarouselApi] = useEmblaCarousel({ })
  const [thumbCarouselApi, setThumbCarouselApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setIsSticky(offset > 300)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const images = [
    "/placeholder.svg?height=600&width=800&text=Image 1",
    "/placeholder.svg?height=600&width=800&text=Image 2",
    "/placeholder.svg?height=600&width=800&text=Image 3",
    "/placeholder.svg?height=600&width=800&text=Image 4",
    "/placeholder.svg?height=600&width=800&text=Image 5",
  ]

  const scrollTo = (index: number) => {
    if (mainCarouselApi) mainCarouselApi.scrollTo(index)
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold">BLACK ALUGUEL</span>
          </div>
          <Button variant="outline">Anuncie seu imóvel</Button>
        </div>
      </header>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto">
        <div className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Property Header */}
              <div className="flex flex-col space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge className="mb-2" variant="secondary">EM BREVE</Badge>
                    <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
                      Apartamento para alugar com 3 quartos e 2 vagas
                    </h1>
                    <p className="text-muted-foreground flex items-center mt-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      Chapecó, Presidente Médici, Rua Condá, 990E
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsFavorite(!isFavorite)}
                    >
                      <Heart className={`h-4 w-4 ${isFavorite ? "fill-current text-red-500" : ""}`} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Image Carousel */}
              <Card>
                <CardContent className="p-1">
                  <div className="relative">
                    <Carousel
                      setApi={setMainCarouselApi}
                      className="w-full"
                    >
                      <CarouselContent>
                        {images.map((src, index) => (
                          <CarouselItem key={index}>
                            <div 
                              className="relative aspect-[4/3] cursor-pointer"
                              onClick={() => openLightbox(index)}
                            >
                              <Image
                                src={src}
                                alt={`Property image ${index + 1}`}
                                className="rounded-lg object-cover"
                                fill
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                  <div className="mt-2">
                    <Carousel
                      setApi={setThumbCarouselApi}
                      className="w-full"
                      opts={{
                        align: 'start',
                        containScroll: 'trimSnaps',
                      }}
                    >
                      <CarouselContent className="-ml-1">
                        {images.map((src, index) => (
                          <CarouselItem key={index} className="pl-1 basis-1/5">
                            <div
                              className="relative aspect-[4/3] cursor-pointer"
                              onClick={() => scrollTo(index)}
                            >
                              <Image
                                src={src}
                                alt={`Thumbnail ${index + 1}`}
                                className="rounded-md object-cover"
                                fill
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </Carousel>
                  </div>
                </CardContent>
              </Card>

              {/* Property Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Características do Imóvel</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <Bed className="h-4 w-4" />
                      <span>3 Quartos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath className="h-4 w-4" />
                      <span>2 Banheiros</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4" />
                      <span>2 Vagas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Ruler className="h-4 w-4" />
                      <span>120m²</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4" />
                      <span>15º Andar</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Descrição do Imóvel</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Apartamento espaçoso e bem iluminado, localizado em uma área privilegiada de Chapecó. 
                    Com acabamento de alto padrão, o imóvel oferece conforto e praticidade para o dia a dia. 
                    A sala de estar ampla se integra à varanda gourmet, ideal para momentos de lazer e receber amigos. 
                    A cozinha é equipada com armários planejados e eletrodomésticos de última geração.
                  </p>
                </CardContent>
              </Card>

              {/* Location Map */}
              <Card>
                <CardHeader>
                  <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video">
                    <Image
                      src="/placeholder.svg?height=400&width=800&text=Map"
                      alt="Property location map"
                      className="rounded-lg object-cover"
                      fill
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle>Comodidades do Condomínio</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>Piscina</li>
                    <li>Academia</li>
                    <li>Salão de festas</li>
                    <li>Playground</li>
                    <li>Churrasqueira</li>
                    <li>Segurança 24h</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <div className={`space-y-6 ${isSticky ? 'lg:sticky lg:top-20' : ''}`}>
                {/* Rental Information */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Aluguel</h2>
                    <div className="space-y-2">
                      <p className="text-3xl font-bold text-primary">R$ 2.800/mês</p>
                      <p className="text-muted-foreground flex justify-between">
                        <span>Condomínio</span>
                        <span>R$ 500</span>
                      </p>
                      <p className="text-muted-foreground flex justify-between">
                        <span>IPTU</span>
                        <span>R$ 150</span>
                      </p>
                      <p className="text-muted-foreground flex justify-between font-bold">
                        <span>Total</span>
                        <span>R$ 3.450</span>
                      </p>
                    </div>
                    <Button className="w-full mt-4" size="lg">
                      Agendar visita
                    </Button>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informações de Contato</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        (49) 9999-9999
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        contato@blackaluguel.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 bg-transparent border-none">
          <div className="relative w-full h-full">
            <Image
              src={images[currentImageIndex]}
              alt={`Full size property image ${currentImageIndex + 1}`}
              className="object-contain"
              fill
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
              onClick={prevImage}
            >
              <CarouselPrevious />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70"
              onClick={nextImage}
            >
              <CarouselNext />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}