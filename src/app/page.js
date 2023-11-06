import TabManager from "@/components/tabmanager"
import Footer from "@/components/footer"
import '../input.css'
export default function Home() {
  return (
    <main>
      <div className="">
        <div className=''>
          <TabManager></TabManager>
        </div>
      <br/>
        <div className='fixed bottom-0 text-center w-screen pt-5'>
          <Footer></Footer>
        </div>
      </div>
    </main>
    
  )
}