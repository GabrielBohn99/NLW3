import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import mapMarker from "../images/Map-marker.svg";

import "../styles/pages/orphanages-map.css";

import "leaflet/dist/leaflet.css";

import { Map, TileLayer } from "react-leaflet";

function OrphanageMap() {
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
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanageMap;
