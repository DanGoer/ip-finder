import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet"

// leaflet hook for refreshing the map
function ChangeMap({ center, zoom }) {
  const map = useMap()
  map.setView(center, zoom)
  return null
}

// leaflet map-container with own settings
const IpMap = ({ data }) => {
  return (
    data && (
      <MapContainer
        className="h-[73vh] relative z-10"
        center={[data.data.location.lat, data.data.location.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <ChangeMap
          zoom={13}
          center={[data.data.location.lat, data.data.location.lng]}
        />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[data.data.location.lat, data.data.location.lng]}>
          <Popup>Your location</Popup>
        </Marker>
      </MapContainer>
    )
  )
}

export default IpMap
