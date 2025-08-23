import Image from "next/image";
import Link from "next/link";
import Cases from "../components/cases";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7x1 mx-auto  p-5">
          
        <Cases />

      </div>
    </div>
  );
}
