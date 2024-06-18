import './style.css';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import gsap from 'gsap';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// VARIABLES
let theme = 'light';
let bookCover = null;
let lightSwitch = null;
let titleText = null;
let subtitleText = null;
let mixer;
let isMobile = window.matchMedia('(max-width: 992px)').matches;
let canvas = document.querySelector('.experience-canvas');
const loaderWrapper = document.getElementById('loader-wrapper');
let clipNames = [
  'fan_rotation',
  'fan_rotation.001',
  'fan_rotation.002',
  'fan_rotation.003',
  'fan_rotation.004',
];
let projects = [
  {
    image: 'textures/',
    url: 'https://',
  },
  {
    image: 'textures/',
    url: 'https://',
  },
  {
    image: 'textures/',
    url: 'https://',
  },
  {
    image: 'textures/',
    url: 'https://',
  },
];
let aboutCameraPos = {
  x: 0.12,
  y: 0.2,
  z: 0.55,
};
let aboutCameraRot = {
  x: -1.54,
  y: 0.13,
  z: 1.41,
};
let projectsCameraPos = {
  x: 1,
  y: 0.45,
  z: 0.01,
};
let projectsCameraRot = {
  x: 0.05,
  y: 0.05,
  z: 0,
};

// SCENE & CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
);
let defaultCameraPos = {
  x: 1.009028643133046,
  y: 0.5463638814987481,
  z: 0.4983449671971262,
};
let defaultCamerRot = {
  x: -0.8313297556598935,
  y: 0.9383399492446749,
  z: 0.7240714481613063,
};
camera.position.set(defaultCameraPos.x, defaultCameraPos.y, defaultCameraPos.z);
