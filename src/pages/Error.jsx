const PageNotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
        <div className="bg-slate-300 p-10 border-2 rounded-md shadow-md">
            <h1 className="text-xl text-center text-red-500">Error: 404</h1>
            <p className="text-slate-700 font-medium">Sorry ! page not found</p>
        </div>
    </section>
  )
}

export default PageNotFound