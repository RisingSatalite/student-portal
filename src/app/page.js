import TabManager from "@/component/tabmanager"
import Footer from "@/component/footer"

import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <main className="">
      <div className="text-yellow-300">tests</div>
      <TabManager></TabManager>
      <br/>
      <Footer></Footer>
    </main>
  )
}