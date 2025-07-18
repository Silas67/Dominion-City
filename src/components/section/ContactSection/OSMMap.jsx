"use client";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const L = typeof window !== "undefined" ? require("leaflet") : null;

const locations = [
  { id: 1, name: "Lugbe", position: [8.9959, 7.3926] },
  { id: 2, name: "Gwarimpa", position: [9.0895, 7.4143] },
  { id: 3, name: "Mpape", position: [9.1065, 7.4576] },
  { id: 4, name: "Katampe", position: [9.1071, 7.4433] },
  { id: 5, name: "Gudu", position: [9.0195, 7.4534] },
  { id: 6, name: "Apo", position: [9.0027, 7.4706] },
  { id: 7, name: "Wuse", position: [9.0667, 7.4667] },
  { id: 8, name: "Lagos", position: [6.5244, 3.3792] },
  { id: 9, name: "Enugu", position: [6.5244, 7.5179] },
  { id: 10, name: "London", position: [51.5074, -0.1278] },
];

export default function MyMap() {
  const [customIcon, setCustomIcon] = useState(null);

  useEffect(() => {
    if (L) {
      setCustomIcon(
        L.icon({
          iconUrl: "/marker-icon.png", // Ensure this file exists in /public
          iconSize: [25, 31],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
        })
      );
    }
  }, []);

  return (
    <MapContainer
      center={[9.0579, 7.4951]} // Centered around Nigeria
      zoom={10}
      scrollWheelZoom={false}
      className="h-[40vh] w-full rounded-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {customIcon &&
        locations.map((loc) => (
          <Marker key={loc.id} position={loc.position} icon={customIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
    </MapContainer>
  );
}
