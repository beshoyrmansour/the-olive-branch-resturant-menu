interface DecorativeDividerProps {
  className?: string
}

export function DecorativeDivider({ className = "" }: DecorativeDividerProps) {
  return (
    <div className={`flex items-center justify-center my-8 ${className}`}>
      <div className="h-px bg-olive/20 flex-grow" />
      <div className="mx-4 relative w-12 h-12 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/olive-branch.png')" }}
        ></div>
      </div>
      <div className="h-px bg-olive/20 flex-grow" />
    </div>
  )
}
