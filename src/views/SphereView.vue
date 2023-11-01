<script setup lang="ts">

import { ref, computed, watch, onMounted } from 'vue';
import * as THREE from "three";
import { MeshLine, MeshLineMaterial } from 'three.meshline';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import * as echarts from "echarts";
import PK from "@/../package.json";
// import jsonp from "@/utils/jsonpUtils";
// import jsonp1 from "@/utils/jsonpUtils1";
import { getWordBlob } from "@/utils/getWordBlob.js";
import addNumber from "@/components/addNumber.vue";
import countryPosition from "@/assets/json/countryPosition.json";
// import { dataSource1, dataSource2 } from "@/api/request";
import tempData from "@/assets/json/tempWorldData.json";
import tempProvinceData from "@/assets/json/tempProvinceData.json";
import tempIpData from "@/assets/json/tempIpData.json";
import universeImg from "@/assets/img/universe.jpg";
import starImg from "@/assets/img/star.jpg";
import earthImg from "@/assets/img/earth.jpg";
import earthNightImg from "@/assets/img/earthNight.jpg";
import ringImg from "@/assets/img/ring_explosion.jpg";
import earthGlowImg from "@/assets/img/earth-glow.jpg";
import normalImg from "@/assets/img/earthNormal.jpg";
import virusImg from "@/assets/img/virus1.png";
import earthGrayscale from "@/assets/img/map_inverted.png";
import PointMsg from "@/components/PointMsg.vue";
import ChinaEchartDrawer from "@/views/ChinaEchartDrawer.vue";
import SetDrawer from "@/components/SetDrawer.vue";
import SphereTabDrawer from "@/views/SphereTabDrawer.vue";
import ChinaTabDrawer from "@/views/ChinaTabDrawer.vue";
import ReportDrawer from "@/views/ReportDrawer.vue";
import ProvinceEchartDrawer from "@/views/ProvinceEchartDrawer.vue";
import wordImg from "@/assets/img/word.png";
</script>

<template>
    <div class="homeView">
    </div>
</template>

<style scoped></style>
