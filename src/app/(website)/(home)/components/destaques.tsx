'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronLeft, ChevronRight, Star, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
export  function Destaques() {

  // const [selectedProperties, setSelectedProperties] = useState([])

  // const togglePropertySelection = (propertyId: any) => {
  //   setSelectedProperties(prev => 
  //     prev.includes(propertyId)
  //       ? prev.filter(id => id !== propertyId)
  //       : [...prev, propertyId]
  //   )
  // }
  return (
    <section className="container py-12">
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-bold tracking-tight">Destaques</h2>
      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
    {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="group relative overflow-hidden">
          <CardContent className="p-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Property preview"
              className="aspect-video object-cover transition-transform group-hover:scale-105"
              width={600}
              height={400}
            />
            <div className="absolute top-2 right-2">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full"
                onClick={() => togglePropertySelection(i)}
              >
                {selectedProperties.includes(i) ? (
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ) : (
                  <Star className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">Apartamento em Copacabana</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Rio de Janeiro, RJ</span>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="font-semibold">R$ 850.000</div>
                <div className="text-sm text-muted-foreground">
                  3 quartos • 2 vagas
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div> */}
  </section>
  )
}
