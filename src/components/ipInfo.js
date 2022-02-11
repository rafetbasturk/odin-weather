const ip_key = "31eb3d93215b3b"

export const getRegion = async () => {
  const res = await fetch(`https://ipinfo.io/?token=${ip_key}`, { mode: 'cors' })
  const data = await res.json()
  const { region } = data
  return region
}