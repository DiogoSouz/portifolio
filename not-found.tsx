import { Link } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
    return (
      <main className="flex flex-col items-center justify-center h-screen text-center p-6">
        <Image src={"NotFound.svg"} alt={"Logo"} width={250} height={200} className="h-80 w-216" priority={true}/>
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-lg text-gray-600 mt-2">
            Ops! O destino que você procura não existe.
        </p>
        <Link href="/" className="mt-4 text-purple-script hover:underline hover:scale-125 transition-all">
          Voltar Para o Inicio
        </Link>
      </main>
    );
  }
