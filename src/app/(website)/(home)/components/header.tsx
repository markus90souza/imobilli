import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Link, Building2, Home, MapPin, Building, Warehouse, Sheet, Menu } from 'lucide-react'
import React from 'react'

export  function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container mx-auto">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold">
          <Building2 className="h-6 w-6" />
          <span>ImobPrime</span>
        </Link>
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="flex justify-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Comprar</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 right-0 top-full bg-background shadow-lg">
                <div className="container mx-auto p-4">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Home className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Casas</div>
                        <div className="text-sm text-muted-foreground">
                          Encontre sua casa dos sonhos
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building2 className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Apartamentos</div>
                        <div className="text-sm text-muted-foreground">
                          Apartamentos em ótimas localizações
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <MapPin className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Terrenos</div>
                        <div className="text-sm text-muted-foreground">
                          Para construir seu projeto
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Comercial</div>
                        <div className="text-sm text-muted-foreground">
                          Salas e lojas comerciais
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Alugar</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 right-0 top-full bg-background shadow-lg">
                <div className="container mx-auto p-4">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Home className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Casas</div>
                        <div className="text-sm text-muted-foreground">
                          Alugue uma casa confortável
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building2 className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Apartamentos</div>
                        <div className="text-sm text-muted-foreground">
                          Apartamentos para alugar
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Warehouse className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Galpões</div>
                        <div className="text-sm text-muted-foreground">
                          Espaços industriais e logísticos
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Comercial</div>
                        <div className="text-sm text-muted-foreground">
                          Espaços para seu negócio
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Lançamentos</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 right-0 top-full bg-background shadow-lg">
                <div className="container mx-auto p-4">
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building2 className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Residenciais</div>
                        <div className="text-sm text-muted-foreground">
                          Novos empreendimentos residenciais
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 p-4 hover:bg-muted rounded-lg"
                    >
                      <Building className="w-6 h-6" />
                      <div>
                        <div className="font-medium">Comerciais</div>
                        <div className="text-sm text-muted-foreground">
                          Lançamentos de espaços comerciais
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                href="#"
              >
                Financiamento
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                href="#"
              >
                Sobre Nós
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <Button variant="outline">Anunciar Imóvel</Button>
          <Button>Entrar</Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="#" className="text-lg font-medium">
                  Comprar
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Alugar
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Lançamentos
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Financiamento
                </Link>
                <Link href="#" className="text-lg font-medium">
                  Sobre Nós
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  </header>
  )
}
