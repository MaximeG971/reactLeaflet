import "./App.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

function App() {
  // markers
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello I am pop up 3",
    },
  ];

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker position={marker.geocode} key={index}></Marker>
      ))}
    </MapContainer>
  );
}

export default App;
