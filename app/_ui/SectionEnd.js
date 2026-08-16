
export default function SectionEnd({text}) {
  return (
    <div className="w-full flex justify-end absolute bottom-0 md:right-20 right-5">
        <h4 className="shrink-0 text-2xl md:text-3xl font-semibold opacity-75">{`< ${text} />`}</h4>
    </div>
  )
}
