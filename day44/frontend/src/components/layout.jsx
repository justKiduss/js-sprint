import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Header */}
      <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          MovieApp
        </Link>
        <div className="flex gap-20">
          <Link to='/' className="text-sm font-bold hidden sm:block">
            Home
          </Link>
          <Link to='/movies' className="text-sm font-bold hidden sm:block">
            Movies
          </Link>
          <Link to='/series' className="text-sm font-bold hidden sm:block">
            Series
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            className="border p-1 rounded"
            placeholder="Search..."
          />
          <Link to="/login" className="text-sm">
            Login
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  )
}