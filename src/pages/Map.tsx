import Local from "../images/Local.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../styles/pages/map.css";

function Map() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={Local} alt="local marker" />

          <h2>Escolha um orfanato no mapa</h2>

          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>Natal</strong>
          <span>Rio Grande do Norte</span>
        </footer>
      </aside>
      <MapContainer
        center={[-5.8127497, -35.2258358]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      <Link to="/" className="create-point">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default Map;
