import Link from 'next/link'
import React from 'react'

export  function Footer() {
  return (
    <footer className="bg-muted">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-semibold mb-4">Sobre a ImobPrime</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Nossa História</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Equipe</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Carreiras</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Comprar</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Alugar</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Financiamento</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Recursos</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Guias</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Contato</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Fale Conosco</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Suporte</Link></li>
            <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Parceiros</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
        © 2024 ImobPrime. Todos os direitos reservados.
      </div>
    </div>
  </footer>
  )
}
