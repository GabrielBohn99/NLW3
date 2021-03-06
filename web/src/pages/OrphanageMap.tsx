import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

import mapMarker from "../images/map-marker.svg";

import "../styles/pages/orphanages-map.css";

import "leaflet/dist/leaflet.css";
interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

function OrphanageMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((res) => {
      setOrphanages(res.data);
    });
  }, []);

  return (
    <div className="" id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Map marker" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map
        center={[-30.0277, -51.2287]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https:/a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={mapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanageMap;
