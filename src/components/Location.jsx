import { useState, useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const [position, setPosition] = useState([31.053228, 31.379471]);
  const markerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (markerRef.current) {
        markerRef.current.openPopup();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getDirections = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section id="location" className="pt-1">
      <div className="container mx-auto px-4 mt-32 rounded-lg overflow-hidden">
        <h2 className="text-5xl font-bold text-center mb-12 text-white">
          موقعنا
        </h2>
        <div
          className="w-full rounded-lg overflow-hidden"
          style={{
            height: "500px",
            borderRadius: "12px",
            position: "relative",
          }}
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "12px",
              zIndex: 0,
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              className="rounded-lg"
            />
            <Marker
              position={position}
              icon={
                new Icon({
                  iconUrl:
                    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
                  iconSize: [32, 32],
                  iconAnchor: [16, 32],
                  popupAnchor: [0, -32],
                })
              }
              ref={markerRef}
            >
              <Popup>
                معملنا هنا! <br />
                <button
                  onClick={getDirections}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  الحصول على الاتجاهات
                </button>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
