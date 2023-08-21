
function Container({children , className}) {
  return (
    <div className={`w-[92%] m-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container