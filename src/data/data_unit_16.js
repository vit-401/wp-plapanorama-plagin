import {ImagePanorama} from "panolens";
import floor1_227 from "../media/unit_16/1_floor/227.jpg";
import floor1_228 from "../media/unit_16/1_floor/228.jpg";
import floor1_229 from "../media/unit_16/1_floor/229.jpg";
import floor1_230 from "../media/unit_16/1_floor/230.jpg";
import floor1_231 from "../media/unit_16/1_floor/231.jpg";

import floor2_223 from "../media/unit_16/2_floor/223.jpg";
import floor2_224 from "../media/unit_16/2_floor/224.jpg";
import floor2_225 from "../media/unit_16/2_floor/225.jpg";
import floor2_226 from "../media/unit_16/2_floor/226.jpg";
import floor2_232 from "../media/unit_16/2_floor/232.jpg";

import floor3_214 from "../media/unit_16/3_floor/214.jpg";
import floor3_215 from "../media/unit_16/3_floor/215.jpg";
import floor3_216 from "../media/unit_16/3_floor/216.jpg";
import floor3_217 from "../media/unit_16/3_floor/217.jpg";
import floor3_218 from "../media/unit_16/3_floor/218.jpg";
import floor3_219 from "../media/unit_16/3_floor/219.jpg";
import floor3_220 from "../media/unit_16/3_floor/220.jpg";
import floor3_221 from "../media/unit_16/3_floor/221.jpg";
import floor3_222 from "../media/unit_16/3_floor/222.jpg";

import plan1 from "../media/unit_16/1_floor/plan.jpg";
import plan2 from "../media/unit_16/2_floor/plan.jpg";
import plan3 from "../media/unit_16/3_floor/plan.jpg";


export const dataUnit16 = {
  title: "Example 02",
  infospotsData: [
    {position: [4487.7, -1755.3, 1300.27], pointTo: 3, panoramaIndex: 0, hoverText: 'floor1_227'},
    {position: [-3765.2, -1762.11, -2769.18], pointTo: 1, panoramaIndex: 0, hoverText: 'floor1_227'},
    {position: [-2499.57, -3058.14, 3053.04], pointTo: 2, panoramaIndex: 1, hoverText: 'floor1_228'},
    {position: [4132.25, -2272.15, -1646.09], pointTo: 1, panoramaIndex: 2, hoverText: 'floor1_229'},
    {position: [-4864.01, -1140.45, -60.43], pointTo: 3, panoramaIndex: 1, hoverText: 'floor1_228'},
    {position: [-4601.09, -1944.05, -79.83], pointTo: 0, panoramaIndex: 1, hoverText: 'floor1_228'},
    {position: [4263.08, -2197.75, -1401.46], pointTo: 0, panoramaIndex: 3, hoverText: 'floor1_230'},
    {position: [3714.84, -2426, 2287.99], pointTo: 4, panoramaIndex: 3, hoverText: 'floor1_231'},
    {position: [-3810.38, -2241.28, -2325.35], pointTo: 3, panoramaIndex: 4, hoverText: 'floor1_230'},
    {
      position: [2301.44, -1059.1, -4300.57],
      pointTo: 5,
      panoramaIndex: 0,
      hoverText: 'Up stairs',
      arrowUp: true,
    },//on first floor
    {
      position: [349.39, -3694.77, -3344.97],
      pointTo: 0,
      panoramaIndex: 5,
      hoverText: 'floor1_227',
      arrowUp: true,
      floor: "basement"
    },
    {
      position: [4790.49, -1395.38, -133.83],
      pointTo: 7,
      panoramaIndex: 5,
      hoverText: 'floor2_225',
      floor: 'first-floor'
    },
    {position: [3522.44, -3527.54, -377.11], pointTo: 5, panoramaIndex: 7, hoverText: 'floor2_226'},
    {position: [2966.07, -1747.15, 3612.85], pointTo: 9, panoramaIndex: 7, hoverText: 'floor2_232'},
    {position: [4669.1, -1399.4, -1081.03], pointTo: 8, panoramaIndex: 9, hoverText: 'floor2_232'},
    {position: [-2626.25, -1442.96, 3991.05], pointTo: 9, panoramaIndex: 8, hoverText: 'floor2_232'},
    {position: [-1347.92, -1747.25, 4478], pointTo: 6, panoramaIndex: 7, hoverText: 'floor2_232'},
    {position: [-294.87, -1306.24, 4807.19], pointTo: 9, panoramaIndex: 6, hoverText: 'floor2_232'},
    {position: [4388.92, -2272.55, -719.73], pointTo: 7, panoramaIndex: 6, hoverText: 'floor2_232'},
    {position: [-1074.5, -1789.12, -4535.29], pointTo: 7, panoramaIndex: 9, hoverText: 'floor2_232'},
    {position: [-4140.25, -1215.57, -2514.08], pointTo: 6, panoramaIndex: 9, hoverText: 'floor2_232'},
    {position: [-4472.17, -305.86, -2194.79], pointTo: 14, panoramaIndex: 17, hoverText: 'floor2_232'},
    {position: [4029.73, -2155.75, 2006.62], pointTo: 14, panoramaIndex: 13, hoverText: 'floor2_232'},

    {
      position: [2359.37, -1885.29, -3980.61],
      pointTo: 18,
      panoramaIndex: 9,
      hoverText: 'To second floor',
      arrowUp: true,
      floor: 'second-floor'
    },
    {
      position: [2645.59, -4225.6, 332.96],
      pointTo: 9,
      panoramaIndex: 18,
      hoverText: 'To first floor',
      arrowUp: true,
      floor: 'first-floor'
    },

    {position: [68.48, -710.09, 4943.38], pointTo: 15, panoramaIndex: 18, hoverText: 'floor3_219'},
    {position: [-3514.43, -3442.66, -856.77], pointTo: 18, panoramaIndex: 15, hoverText: 'floor3_222'},
    {position: [-3628.47, -3111.79, 1439.82], pointTo: 16, panoramaIndex: 15, hoverText: 'floor3_220'},
    {position: [-3934.89, -3077.19, -22.96], pointTo: 15, panoramaIndex: 14, hoverText: 'floor3_219'},
    {position: [3948, -2871.99, 1046.05], pointTo: 14, panoramaIndex: 15, hoverText: 'floor3_218'},

    // {position: [-3903.68, -3110.22, -121.55], pointTo: 15, panoramaIndex: 14, hoverText: 'floor3_218'},
    {position: [-170.28, -1693.03, 4691.78], pointTo: 17, panoramaIndex: 14, hoverText: 'floor3_221'},
    {position: [4288.45, -2555.98, -122.21], pointTo: 13, panoramaIndex: 14, hoverText: 'floor3_217'},
    {position: [-3834.63, -3001.62, -1105.84], pointTo: 15, panoramaIndex: 16, hoverText: 'floor3_217'},


    {position: [4587.94, -1741.33, 926.95], pointTo: 13, panoramaIndex: 15, hoverText: 'floor3_217'},
    {position: [-4792.56, -1059.2, -914.66], pointTo: 10, panoramaIndex: 13, hoverText: 'floor3_215'},
    {position: [4646.81, -1627.25, 823.99], pointTo: 10, panoramaIndex: 11, hoverText: 'floor3_215'},
    {position: [4544.09, -2061.44, 134.78], pointTo: 11, panoramaIndex: 10, hoverText: 'floor3_215'},
    {position: [-4145.77, -1591.89, -2285.53], pointTo: 13, panoramaIndex: 10, hoverText: 'floor3_215'},
    {position: [2037.06, -2265.75, -3957.39], pointTo: 12, panoramaIndex: 10, hoverText: 'floor3_215'},
    {position: [4244.47, -2512.16, 775.09], pointTo: 10, panoramaIndex: 12, hoverText: 'floor3_215'},
  ],
  panoramas: [
    new ImagePanorama(floor1_227), //0
    new ImagePanorama(floor1_228), //1
    new ImagePanorama(floor1_229), //2
    new ImagePanorama(floor1_230), //3
    new ImagePanorama(floor1_231), //4

    new ImagePanorama(floor2_226), //5 second floor
    new ImagePanorama(floor2_224), //6
    new ImagePanorama(floor2_225), //7
    new ImagePanorama(floor2_223), //8
    new ImagePanorama(floor2_232), //9

    new ImagePanorama(floor3_214), //10 third floor
    new ImagePanorama(floor3_215), //11
    new ImagePanorama(floor3_216), //12
    new ImagePanorama(floor3_217), //13
    new ImagePanorama(floor3_218), //14
    new ImagePanorama(floor3_219), //15
    new ImagePanorama(floor3_220), //16
    new ImagePanorama(floor3_221), //17
    new ImagePanorama(floor3_222), //18
  ],
  floors: [
    {
      defaultPanorama: 18,
      value: 'second-floor',
      title: 'Second floor',
      img: plan3,
      dotPosition: [
        {top: 39, left: 44, pointTo: 11, hoverText: 'hover text'},
        {top: 96, left: 92, pointTo: 18, hoverText: 'hover text'},
        {top: 129, left: 90, pointTo: 15, hoverText: 'hover text'},
        {top: 157, left: 93, pointTo: 16, hoverText: 'hover text'},
        {top: 135, left: 64, pointTo: 14, hoverText: 'hover text'},
        {top: 171, left: 59, pointTo: 17, hoverText: 'hover text'},
        {top: 74, left: 33, pointTo: 10, hoverText: 'hover text'},
        {top: 132, left: 33, pointTo: 13, hoverText: 'hover text'},
        {top: 76, left: 68, pointTo: 12, hoverText: 'hover text'},
      ]
    },

    {
      defaultPanorama: 7,
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: [
        {top: 95, left: 91, pointTo: 5, hoverText: 'hover text'},
        {top: 122, left: 93, pointTo: 7, hoverText: 'hover text'},
        {top: 156, left: 37, pointTo: 6, hoverText: 'hover text'},
        {top: 95, left: 36, pointTo: 9, hoverText: 'hover text'},
        {top: 63, left: 76, pointTo: 8, hoverText: 'hover text'},
      ]
    },

    {
      defaultPanorama: 0,
      value: 'basement',
      title: 'Basement',
      img: plan1,
      dotPosition: [
        {top: 97, left: 35, pointTo: 0, hoverText: 'hover text'},
        {top: 164, left: 36, pointTo: 1, hoverText: 'hover text'},
        {top: 28, left: 46, pointTo: 3, hoverText: 'hover text'},
        {top: 93, left: 92, pointTo: 5, hoverText: 'hover text'},
        {top: 65, left: 72, pointTo: 4, hoverText: 'hover text'},
        {top: 124, left: 71, pointTo: 2, hoverText: 'hover text'},

      ]
    },
  ],
  rooms: {
    0: "BEDROOM 1",
    1: "HALLWAY",
    2: "BEDROOM 2",
    3: "HALLWAY",
    4: "HALLWAY BATHROOM",
    5: "HALLWAY",
    6: "LAUNDRY",
    7: "MASTER BEDROOM",
    8: "MASTER BEDROOM",
    9: "MASTER BEDROOM",
    10: "MB CLOSED",
    11: "MB BATHROOM",
  },
  options: [
    {value: 'basement', label: 'Basement'},
    {value: 'first-floor', label: 'First floor', disabled: false},
    {value: 'second-floor', label: 'Second floor', disabled: false},
  ],
}
