import { useState, useEffect } from 'react'
import {
  Search,
  MapPin,
  Building2,
  Home,
  Key,
  Filter,
  Building,
  Warehouse,
  ChevronLeft,
  ChevronRight,
  Star,
  ArrowUp,
  Menu,
  X,
  MessageCircle,
  Home as HomeIcon,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Destaques } from './components/destaques'

const HomePage = () => {
  // const [showBackToTop, setShowBackToTop] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowBackToTop(window.scrollY > 300)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // }

  return (
    <>
      <Header />
      <h1>home</h1>
      <Footer />
    </>
    // <div className="flex min-h-screen flex-col">
    //  <Header />
    //   <main className="flex-1">
    //     {/* <section className="relative py-24 bg-gradient-to-r from-primary to-primary-foreground">
    //       <div className="container mx-auto text-center text-white space-y-8">
    //         <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
    //           Encontre o imóvel perfeito para você
    //         </h1>
    //         <p className="mx-auto max-w-[700px] text-xl">
    //           Milhares de opções de imóveis para compra e aluguel em todo o Brasil.
    //         </p>
    //         <div className="mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-6">
    //           <div className="grid gap-4 md:grid-cols-4">
    //             <div className="relative">
    //               <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
    //               <Input
    //                 className="pl-10"
    //                 placeholder="Cidade, bairro ou região..."
    //               />
    //             </div>
    //             <Select>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Tipo de imóvel" />
    //               </SelectTrigger>
    //               <SelectContent>
    //                 <SelectItem value="casa">Casa</SelectItem>
    //                 <SelectItem value="apartamento">Apartamento</SelectItem>
    //                 <SelectItem value="terreno">Terreno</SelectItem>
    //                 <SelectItem value="comercial">Comercial</SelectItem>
    //               </SelectContent>
    //             </Select>
    //             <div>
    //               <Slider
    //                 defaultValue={[500000]}
    //                 max={5000000}
    //                 step={50000}
    //                 className="w-full"
    //               />
    //               <div className="text-sm text-muted-foreground mt-2">
    //                 Até R$ 500.000
    //               </div>
    //             </div>
    //             <Button className="w-full">Buscar</Button>
    //           </div>
    //         </div>
    //       </div>
    //     </section> */}

    //     <Destaques />

    //     {/* <section className="bg-muted py-12">
    //       <div className="container">
    //         <h2 className="text-3xl font-bold tracking-tight mb-8">O que nossos clientes dizem</h2>
    //         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    //           {Array.from({ length: 3 }).map((_, i) => (
    //             <Card key={i}>
    //               <CardContent className="p-6">
    //                 <div className="flex items-center gap-2 mb-4">
    //                   {Array.from({ length: 5 }).map((_, j) => (
    //                     <Star key={j} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    //                   ))}
    //                 </div>
    //                 <p className="mb-4">
    //                   "A ImobPrime tornou o processo de compra da minha casa dos sonhos uma experiência incrível. Profissionais atenciosos e eficientes!"
    //                 </p>
    //                 <div className="font-semibold">Maria Silva</div>
    //               </CardContent>
    //             </Card>
    //           ))}
    //         </div>
    //       </div>
    //     </section> */}
    //     {/* <section className="container py-12">
    //       <h2 className="text-3xl font-bold tracking-tight mb-8">Categorias</h2>
    //       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
    //         {[
    //           { icon: Home, title: "Casas", desc: "Encontre sua casa dos sonhos" },
    //           {
    //             icon: Building2,
    //             title: "Apartamentos",
    //             desc: "Em ótimas localizações",
    //           },
    //           {
    //             icon: MapPin,
    //             title: "Terrenos",
    //             desc: "Para construir seu projeto",
    //           },
    //           {
    //             icon: Key,
    //             title: "Comercial",
    //             desc: "Salas e lojas comerciais",
    //           },
    //         ].map((category, i) => (
    //           <Link
    //             key={i}
    //             href="#"
    //             className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary"
    //           >
    //             <category.icon className="h-12 w-12 mb-4 text-primary" />
    //             <h3 className="font-semibold mb-2">{category.title}</h3>
    //             <p className="text-sm text-muted-foreground">{category.desc}</p>
    //           </Link>
    //         ))}
    //       </div>
    //     </section>*/}
    //   </main>
    //   <Footer />

    //   {/* {showBackToTop && (
    //     <Button
    //       className="fixed bottom-4 right-4 rounded-full"
    //       size="icon"
    //       onClick={scrollToTop}
    //     >
    //       <ArrowUp className="h-4 w-4" />
    //     </Button>
    //   )}
    //   <Popover>
    //     <PopoverTrigger asChild>
    //       <Button className="fixed bottom-4 left-4 rounded-full" size="icon">
    //         <MessageCircle className="h-4 w-4" />
    //       </Button>
    //     </PopoverTrigger>
    //     <PopoverContent className="w-80">
    //       <div className="space-y-2">
    //         <h3 className="font-medium">Precisa de ajuda?</h3>
    //         <p className="text-sm text-muted-foreground">
    //           Estamos aqui para ajudar! Envie sua mensagem e entraremos em contato em breve.
    //         </p>
    //         <Input placeholder="Seu nome" />
    //         <Input placeholder="Seu email" />
    //         <textarea
    //           className="w-full min-h-[100px] p-2 border rounded-md"
    //           placeholder="Sua mensagem"
    //         ></textarea>
    //         <Button className="w-full">Enviar mensagem</Button>
    //       </div>
    //     </PopoverContent>
    //   </Popover> */}
    // </div>
  )
}

export default HomePage
