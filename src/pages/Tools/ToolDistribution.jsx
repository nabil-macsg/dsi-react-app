import React, { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/Header";
import "./Tools.scss";

import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";

const markerIcon = new L.DivIcon({
    className: "tool-map-pin tool-map-icon-pin",
    html: `
        <div class="tool-pin-inner">
            <i class="fa-solid fa-screwdriver-wrench"></i>
        </div>
    `,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
});

const tools = [
    {
        id: 1,
        serial: "HYD475BP112",
        type: "PBL Sub",
        size: '4-3/4"',
        status: "In storage",
        region: "Middle East",
        agent: "DSI FZE Yard",
        location: "Dubai, UAE",
        coords: [25.2048, 55.2708],
        lastService: "27 Jan 2026",
        nextService: "27 Jul 2026",
        cost: "$42,500",
    },
    {
        id: 2,
        serial: "HYD825BP399",
        type: "PBL High Flow",
        size: '8-1/4"',
        status: "In field",
        region: "Central Asia",
        agent: "Zhigermunai LLP",
        location: "Atyrau, Kazakhstan",
        coords: [47.0945, 51.9238],
        lastService: "06 Jan 2026",
        nextService: "06 Jul 2026",
        cost: "$68,000",
    },
    {
        id: 3,
        serial: "HYD700BP518",
        type: "PBL High Torque",
        size: '7"',
        status: "In field",
        region: "Africa",
        agent: "Nile Drilling",
        location: "Cairo, Egypt",
        coords: [30.0444, 31.2357],
        lastService: "18 Dec 2025",
        nextService: "18 Jun 2026",
        cost: "$61,000",
    },
    {
        id: 4,
        serial: "HYD350BP127",
        type: "PBL Compact",
        size: '3-1/2"',
        status: "Under maintenance",
        region: "South Asia",
        agent: "DSI Service Bay",
        location: "Mumbai, India",
        coords: [19.076, 72.8777],
        lastService: "22 Sep 2025",
        nextService: "22 Mar 2026",
        cost: "$36,500",
    },
    {
        id: 5,
        serial: "HYD875BP602",
        type: "PBL High Flow",
        size: '8-3/4"',
        status: "In storage",
        region: "Central Asia",
        agent: "KazMunay Tools",
        location: "Almaty, Kazakhstan",
        coords: [43.222, 76.8512],
        lastService: "11 Jan 2026",
        nextService: "11 Jul 2026",
        cost: "$74,000",
    },
    {
        id: 6,
        serial: "HYD775BP455",
        type: "PBL High Torque",
        size: '7-3/4"',
        status: "In field",
        region: "South Asia",
        agent: "PetroServe India",
        location: "Chennai, India",
        coords: [13.0827, 80.2707],
        lastService: "30 Dec 2025",
        nextService: "30 Jun 2026",
        cost: "$66,500",
    },
    {
        id: 7,
        serial: "HYD450BP188",
        type: "PBL Compact",
        size: '4-1/2"',
        status: "In storage",
        region: "Africa",
        agent: "DSI Africa Hub",
        location: "Lagos, Nigeria",
        coords: [6.5244, 3.3792],
        lastService: "14 Jan 2026",
        nextService: "14 Jul 2026",
        cost: "$39,500",
    },
    {
        id: 8,
        serial: "HYD950BP033",
        type: "PBL Sub",
        size: '9-1/2"',
        status: "In storage",
        region: "Middle East",
        agent: "DSI FZE Yard",
        location: "Abu Dhabi, UAE",
        coords: [24.4539, 54.3773],
        lastService: "02 Dec 2025",
        nextService: "02 Jun 2026",
        cost: "$82,000",
    },
    {
        id: 9,
        serial: "HYD600BP289",
        type: "PBL Sub",
        size: '6"',
        status: "Pending retirement",
        region: "Middle East",
        agent: "Al Mansoori",
        location: "Muscat, Oman",
        coords: [23.588, 58.3829],
        lastService: "08 Aug 2025",
        nextService: "08 Feb 2026",
        cost: "$44,000",
    },
    {
        id: 10,
        serial: "HYD925BP731",
        type: "PBL High Flow",
        size: '9-1/4"',
        status: "Under maintenance",
        region: "Central Asia",
        agent: "KazDrill Services",
        location: "Tashkent, Uzbekistan",
        coords: [41.2995, 69.2401],
        lastService: "01 Oct 2025",
        nextService: "01 Apr 2026",
        cost: "$88,000",
    }
];

const statusClass = {
    "In field": "p-field",
    "In storage": "p-storage",
    "Under maintenance": "p-maint",
    "In transit": "p-transit",
    Retired: "p-retired",
};

export default function ToolDistribution() {
    const [selectedTool, setSelectedTool] = useState(null);
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("All regions");
    const [status, setStatus] = useState("All statuses");

    const filteredTools = useMemo(() => {
        return tools.filter((tool) => {
            const keyword = search.toLowerCase();

            const matchSearch =
                tool.serial.toLowerCase().includes(keyword) ||
                tool.type.toLowerCase().includes(keyword) ||
                tool.agent.toLowerCase().includes(keyword) ||
                tool.location.toLowerCase().includes(keyword);

            const matchRegion =
                region === "All regions" || tool.region === region;

            const matchStatus =
                status === "All statuses" || tool.status === status;

            return matchSearch && matchRegion && matchStatus;
        });
    }, [search, region, status]);

    return (
        <Layout>
            <Header
                title="Tool Distribution"
                subTitle={`${filteredTools.length} tools tracked globally · Live operational visibility`}

            />

            <div className="scroll-body distribution-scroll-body">
                <div className="tools-page distribution-page">
                    <div className="distribution-toolbar">
                        <div className="search-wrap distribution-search">
                            <i className="fa-solid fa-magnifying-glass" />
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search serial no, type, agent..."
                            />
                        </div>

                        <select value={status} onChange={(e) => setStatus(e.target.value)}>
                            <option>All statuses</option>
                            <option>In storage</option>
                            <option>In field</option>
                            <option>Under maintenance</option>
                            <option>In transit</option>
                            <option>Pending retirement</option>
                            <option>Retired</option>
                        </select>

                        <select value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option>All regions</option>
                            <option>Middle East</option>
                            <option>Central Asia</option>
                            <option>Africa</option>
                            <option>South Asia</option>
                        </select>

                        <div className="distribution-live">
                            <span className="live-dot"></span>
                            Live Tracking
                        </div>
                    </div>

                    <div className="distribution-shell">
                        <div className="distribution-map-card">
                            <MapContainer
                                center={[28, 52]}
                                zoom={3}
                                minZoom={2}
                                maxZoom={9}
                                scrollWheelZoom
                                zoomControl={false}
                                className="tool-map"
                            >
                                <ZoomControl position="topright" />

                                <TileLayer
                                    attribution='&copy; OpenStreetMap contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                {filteredTools.map((tool) => (
                                    <Marker
                                        key={tool.id}
                                        position={tool.coords}
                                        icon={markerIcon}
                                        eventHandlers={{
                                            click: () => setSelectedTool(tool),
                                        }}
                                    >
                                        <Popup closeButton={false}>
                                            <button
                                                className="map-popup-card"
                                                onClick={() => setSelectedTool(tool)}
                                            >
                                                <strong>{tool.serial}</strong>
                                                <span>{tool.type}</span>
                                                <small>{tool.location}</small>
                                            </button>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>

                        <div className="distribution-summary">
                            <div className="summary-card">
                                <span>Total Visible</span>
                                <strong>{filteredTools.length}</strong>
                            </div>

                            <div className="summary-card">
                                <span>In Field</span>
                                <strong>
                                    {filteredTools.filter((x) => x.status === "In field").length}
                                </strong>
                            </div>

                            <div className="summary-card">
                                <span>Maintenance</span>
                                <strong>
                                    {
                                        filteredTools.filter(
                                            (x) => x.status === "Under maintenance"
                                        ).length
                                    }
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedTool && (
                <div className="tool-pane-backdrop" onClick={() => setSelectedTool(null)}>
                    <aside className="tool-slide-pane" onClick={(e) => e.stopPropagation()}>
                        <div className="pane-head">
                            <div>
                                <h3>{selectedTool.serial}</h3>
                                <p>{selectedTool.type} · {selectedTool.size}</p>
                            </div>

                            <button onClick={() => setSelectedTool(null)}>
                                <i className="fa-solid fa-xmark" />
                            </button>
                        </div>

                        <div className="pane-status-row">
                            <span className={`pill ${statusClass[selectedTool.status] || "p-retired"}`}>
                                <span className="pill-dot" />
                                {selectedTool.status}
                            </span>
                        </div>

                        <div className="pane-info-grid">
                            <div>
                                <label>Region</label>
                                <strong>{selectedTool.region}</strong>
                            </div>

                            <div>
                                <label>Current Location</label>
                                <strong>{selectedTool.location}</strong>
                            </div>

                            <div>
                                <label>Assigned Agent</label>
                                <strong>{selectedTool.agent}</strong>
                            </div>

                            <div>
                                <label>Last Service</label>
                                <strong>{selectedTool.lastService}</strong>
                            </div>

                            <div>
                                <label>Next Service Due</label>
                                <strong>{selectedTool.nextService}</strong>
                            </div>

                            <div>
                                <label>Acq. Cost</label>
                                <strong>{selectedTool.cost}</strong>
                            </div>
                        </div>

                        <div className="pane-actions">
                            <button className="draft-btn">
                                <i className="fa-regular fa-eye" />
                                View Details
                            </button>

                            <button className="submit-btn">
                                <i className="fa-solid fa-paper-plane" />
                                Dispatch Tool
                            </button>
                        </div>
                    </aside>
                </div>
            )}
        </Layout>
    );
}