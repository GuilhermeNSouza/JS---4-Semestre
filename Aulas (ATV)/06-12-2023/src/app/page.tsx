import Image from 'next/image'
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Repeat, Shuffle, SkipBack, SkipForward} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
        <nav className="space-y-5">
          <a href="" className="flex items-center gap-3 text-sx font-semibold text-zinc-200">
            <HomeIcon>

            </HomeIcon>
            Página inicial
          </a>
          <a href="" className="flex items-center gap-2 text-sx font-semibold text-zinc-200">
            <Search>
              
            </Search>
            Pesquisar
          </a>
          <a href="" className="flex items-center gap-2 text-sx font-semibold text-zinc-200">
            <Library>

            </Library>
            Sua biblioteca
          </a>
        </nav>
        <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100"> Playlist 1</a>
        </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
	          <button className="rounded-full bg-black/40 p-1">
	            <ChevronLeft />
	          </button>
	          <button className="rounded-full bg-black/40 p-1">
	            <ChevronRight />
	          </button>
          </div>
        <h1 className="font-semibold text-3xl mt-10"> Bom dia! </h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
	          <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20"> 
	            <Image src="/Record-Album-02.jpg" width={150} height={150} alt="Capa do álbum" />
	              <strong> Música 1 </strong>
                <button className="w-12 h-12 flex items-center justify pl-1 rounded-full bg-green-400 text-black ml-auto  mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
	          <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20"> 
	            <Image src="/Record-Album-02.jpg" width={150} height={150} alt="Capa do álbum" />
	              <strong> Música 2 </strong>
                <button className="w-12 h-12 flex items-center justify pl-1 rounded-full bg-green-400 text-black ml-auto  mr-8 invisible group-hover:visible">
                  <Play />
                </button>
            </a>
	          <a href="#" className="bg-white/10 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20"> 
	            <Image src="/Record-Album-02.jpg" width={150} height={150} alt="Capa do álbum" />
	              <strong> Música 3 </strong>
                <button className="w-12 h-12 flex items-center justify pl-1 rounded-full bg-green-400 text-black invisible group-hover:visible">
                  <Play />
                </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10"> Feito para você! </h2>
            <div className="grid grid-cols-5 gap-4 mt-4">
	            <a href="#" className="bg-white/5 p-3 flex flex-col rounded hover:bg-white/10">
		            <Image src="/Record-Album-02.jpg" className="w-full" width={320} height={320} alt="Capa do álbum" />
                <strong className="font-semibold"> Mix </strong>
                  <span className="text-xs text-zinc-500"> Artistas </span>
              </a>
            </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between bottom-0">
        <div className="flex items-center gap-2 p-4">
          <Image src="/Record-Album-02.jpg" className="w-full rounded" width={100} height={100} alt="Capa do álbum" />
        <div className="flex flex-col">
          <strong className="font-normal">Música</strong>
          <span className="text-xs text-zinc-488">Artista</span>
        </div>
        </div>
        <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <Shuffle />
          <SkipBack size={20} className="text-zinc-2022" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
                  <Play />
                </button>
          <SkipForward size={20} className="text-zinc-200"/>
          <Repeat size={20} className="text-zinc-200"/>
          </div>
        </div>
        <div></div>
      </footer>
    </div>

  )
}