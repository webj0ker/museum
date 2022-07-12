// Map

mapboxgl.accessToken = "pk.eyJ1Ijoid2ViajBrZXIiLCJhIjoiY2t1bjc5YXo4MDYwNjJ2cXJxMGE2NWZ4byJ9.URJshgyHRSMivPWGFd-9kg";
const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v10",
        center: [2.3364, 48.86091],
        zoom: 15.75
    }),
    marker1 = new mapboxgl.Marker({
        color: "#171717"
    }).setLngLat([2.3364, 48.86091]).addTo(map),
    marker2 = new mapboxgl.Marker({
        color: "#757575"
    }).setLngLat([2.3333, 48.8602]).addTo(map),
    marker3 = new mapboxgl.Marker({
        color: "#757575"
    }).setLngLat([2.3397, 48.8607]).addTo(map),
    marker4 = new mapboxgl.Marker({
        color: "#757575"
    }).setLngLat([2.333, 48.8619]).addTo(map),
    marker5 = new mapboxgl.Marker({
        color: "#757575"
    }).setLngLat([2.3365, 48.8625]).addTo(map);
map.on("load", () => {
    map.addSource("mapillary", {
            type: "vector",
            tiles: ["https://tiles.mapillary.com/maps/vtp/mly1_public/2/{z}/{x}/{y}"],
            minzoom: 6,
            maxzoom: 14
        }),
        map.addLayer({
            id: "mapillary",
            type: "line",
            source: "mapillary",
            "source-layer": "sequence",
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-opacity": .6,
                "line-color": "rgb(53, 175, 109)",
                "line-width": 2
            }
        }, "road-label")
}), map.addControl(new mapboxgl.NavigationControl);