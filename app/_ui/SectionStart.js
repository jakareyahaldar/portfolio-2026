export default function SectionStart({text}) {
  return (
    <div className="flex items-center gap-3">
        <h3 className="shrink-0 text-2xl md:text-3xl font-semibold">{`< ${text} />`}</h3>
        <div className="w-full h-[2] bg-blue-700"></div>
    </div>
  )
}
