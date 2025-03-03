export function Kinsta() {
  return (
    <div className="kinsta-lg">
      <a href="https://kinsta.com/?kaid=VFCIYHOSRAIN">
        <img src={`/images/kinsta/lg/${String(Math.floor(Math.random() * 32) + 1).padStart(2, '0')}.png`} />
      </a>
    </div>
  )
}
