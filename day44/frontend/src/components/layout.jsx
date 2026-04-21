import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import useMovies from "../hooks/useMovies";
import Sidebar from "./sidebarMenu";
import {Menu} from "lucide-react"
export default function Layout() {
  const [query,setQuery]=useState("");
  const [isOpen,setisOpen]=useState(false);

  function handleSearch(e){
    setQuery(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
  }
  const movies=useMovies(query);
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      {isOpen && <Sidebar onClose={()=>setisOpen(false)}/>}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <button className="block md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors" onClick={()=>setisOpen(!isOpen)}> <Menu className="w-6 h-6 text-gray-700"/></button>
        <Link to="/" className="text-xl font-bold">
          MovieApp
        </Link>
        <div className="flex gap-20">
          <Link to='/' className="text-sm font-bold hidden md:block">
            Home
          </Link>
          <Link to='/movies' className="text-sm font-bold hidden md:block">
            Movies
          </Link>
          <Link to='/series' className="text-sm font-bold hidden md:block">
            Series
          </Link>
        </div>
        <div className="flex items-center gap-4">
  {/* The "relative" class here is the anchor */}
  <div className="relative"> 
    <form onSubmit={handleSubmit} className="relative flex items-center">
      <input
        className="border p-1 rounded w-64 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Search..."
        value={query}
        onChange={handleSearch}
      />
      {query && (
        <button 
          type="button" 
          onClick={() => setQuery("")} 
          className="absolute right-3 text-gray-400 hover:text-red-500"
        >✕</button>
      )}
    </form>

    {/* The "absolute" class here makes it float OVER the trending movies */}
    {query.trim().length > 0 && (
      <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded shadow-2xl z-50 max-h-96 overflow-y-auto">
        {movies.status === 'loading' && <div className="p-4 text-sm text-gray-500">Searching...</div>}
        
        {movies.data?.length > 0 ? (
          movies.data.map((movie) => (
            <Link
              key={movie.id}
              to={`/${movie.media_type}/${movie.id}`}
              onClick={() => setQuery("")}
              className="flex items-center gap-3 p-3 hover:bg-gray-50 border-b last:border-0 transition-colors"
            >
              <img 
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} 
                alt="" 
                className="w-10 h-14 object-cover rounded shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-gray-800">{movie.title||movie.name}</span>
                <span className="text-xs text-gray-500">{movie.release_date?.split('-')[0]}</span>
              </div>
            </Link>
          ))
        ) : (
          movies.status !== 'loading' && <div className="p-4 text-sm text-gray-400">No results found</div>
        )}
      </div>
        )}
      </div>
    </div>
      </header>
      
      {/* //Main Content */}
      <main className="flex-1 p-6">
        <Outlet context={{ query }}/>
      </main>

    </div>
  )
}