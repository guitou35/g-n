<template>
    <div>
      <div id="mapContainer" class="z-10" />
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, onBeforeMount } from 'vue'
  import 'leaflet/dist/leaflet.css'
  import L from 'leaflet'
  
  export default defineComponent({
    name: 'LMap',
    props: {
      markers: {
        type: Array,
        required: false,
        default: () => [
            {
                latitude: 48.3719,
                longitude: -1.9299,
                descricao: "Mairie"
            },
            {
                latitude: 48.38125,
                longitude: -1.98869,
                descricao: "Salle des fêtes"
            },
        ]
      }
    },
    setup (props) {
      let map = null
  
      onMounted(() => {
        console.log(props.markers)
        createMapLayer()
      })
  
      onBeforeMount(() => {
        if (map) {
          map.remove()
        }
      })
  
      const createMapLayer = () => {
        map = L.map('mapContainer').setView([48.3685,-1.9037], 12)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
  
        if (props.markers.length) {
          setMarkers()
        }
      }
  
      const setMarkers = () => {
        props.markers.map((marker) => {
          return L.marker([marker.latitude, marker.longitude]).addTo(map)
            .bindPopup(marker.descricao).openPopup()
        })
      }
    }
  })
  </script>
  
  <style scoped>
  #mapContainer {
    width: 100vw;
    height: calc(100vh - 60px);
  }
  </style>