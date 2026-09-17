
export default async function page() {

  return (
    <section className="p-5">
      <h2 className="text-2xl font-bold my-2">Admin Dashboard</h2>
      {/* dashboard cards */}
      <div className="grid grid-cols-3 gap-3">
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
    </section>
  )
}


function StatsCard() {
  return (
    <div className="bg-black text-white rounded-2xl p-3 shadow-xl">
      <h2 className="text-2xl">Projects</h2>
      <h2 className="text-5xl font-bold">05</h2>
      <p className="text-sm text-gray-300">count added projects</p>
    </div>
  )
}



