import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <h1 className="text-4xl font-bold">Hello World</h1>
    </main>
  );
}
