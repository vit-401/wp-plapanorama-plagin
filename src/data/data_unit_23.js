import {ImagePanorama} from "panolens";
import floor1_245 from "../media/unit_23/1_floor/245.jpg";
import floor1_246 from "../media/unit_23/1_floor/246.jpg";
import floor1_247 from "../media/unit_23/1_floor/247.jpg";

import floor2_241 from "../media/unit_23/2_floor/241.jpg";
import floor2_242 from "../media/unit_23/2_floor/242.jpg";
import floor2_243 from "../media/unit_23/2_floor/243.jpg";
import floor2_244 from "../media/unit_23/2_floor/244.jpg";
import floor2_240 from "../media/unit_23/2_floor/240_living_stairs to 3rd floor.jpg";

import floor3_233 from "../media/unit_23/3_floor/233.jpg";
import floor3_234 from "../media/unit_23/3_floor/234.jpg";
import floor3_235 from "../media/unit_23/3_floor/235.jpg";
import floor3_236 from "../media/unit_23/3_floor/236.jpg";
import floor3_237 from "../media/unit_23/3_floor/237.jpg";
import floor3_238 from "../media/unit_23/3_floor/238.jpg";
import floor3_239 from "../media/unit_23/3_floor/239.jpg";

import plan from "../media/unit_23/1_floor/Unit 23_level 1_ Top view.jpg";
import plan2 from "../media/unit_23/2_floor/Unit 23_level 2nd_ Top view.jpg";
import plan3 from "../media/unit_23/3_floor/Unit 23_level 3_ Top view.jpg";


export const dataUnit23 = {
  title: "Unit #23",
  infospotsData: [
    {position: [655.07, -3109.98, -3849.8], pointTo: 1, panoramaIndex: 0, hoverText: 'GARAGE'},
    {position: [-742.78, -3553.01, -3436.66], pointTo: 0, panoramaIndex: 1, hoverText: 'STAIRS'},
    {position: [4754.46, -1191.21, -974.91], pointTo: 2, panoramaIndex: 1, hoverText: 'GARAGE'},
    {position: [-3526.86, -1099.23, 3358.52], pointTo: 1, panoramaIndex: 2, hoverText: 'GARAGE'},
    {
      position: [-4782.37, -800.8, -1192.16],
      pointTo: 5,
      panoramaIndex: 0,
      hoverText: 'DOWN STAIRS',
      arrowUp: true,
      floor: 'first-floor'
    },
    {
      position: [1760.11, -3876.77, 2610.66],
      pointTo: 0,
      panoramaIndex: 5,
      hoverText: 'STAIRS',
      arrowUp: true,
      floor: 'basement'
    },
    {position: [2905.7, -2061.96, -3494.92], pointTo: 4, panoramaIndex: 5, hoverText: 'LIVING ROOM'},
    {position: [-260.12, -2732.37, 4169.47], pointTo: 11, panoramaIndex: 13, hoverText: 'HALLWAY'},
    {position: [-2485.22, -2110.87, -3778.14], pointTo: 7, panoramaIndex: 10, hoverText: 'MASTER BEDROOM'},
    {position: [-3007.23, -2366.98, -3207.76], pointTo: 10, panoramaIndex: 7, hoverText: 'HALLWAY'},
    {position: [-4490.19, -2184.37, 81.92], pointTo: 8, panoramaIndex: 7, hoverText: 'MASTER BEDROOM CLOSED'},
    {position: [-4291.46, -2476.6, 605.59], pointTo: 7, panoramaIndex: 8, hoverText: 'MASTER BEDROOM'},
    {position: [4215.27, -2623.67, 553.12], pointTo: 9, panoramaIndex: 8, hoverText: 'BATHROOM'},
    {position: [-4062.6, -2896.54, -206.07], pointTo: 8, panoramaIndex: 9, hoverText: 'MASTER BEDROOM CLOSED'},
    {position: [-4727.1, -1560.68, -428.02], pointTo: 7, panoramaIndex: 9, hoverText: 'MASTER BEDROOM'},
    {position: [4765.38, -1508.5, -4.17], pointTo: 11, panoramaIndex: 10, hoverText: 'HALLWAY'},
    {position: [235.92, -3741.69, 3300.15], pointTo: 12, panoramaIndex: 11, hoverText: 'BATHROOM'},
    {position: [3239.44, -3803.39, -115.87], pointTo: 11, panoramaIndex: 12, hoverText: 'HALLWAY'},
    {position: [-4188.18, -2707.78, 216.64], pointTo: 13, panoramaIndex: 11, hoverText: 'MASTER BEDROOM'},
    {position: [4774.54, -1409.51, -362.14], pointTo: 10, panoramaIndex: 11, hoverText: 'HALLWAY'},
    {position: [-840.76, -953.78, 4825.47], pointTo: 10, panoramaIndex: 13, hoverText: 'HALLWAY'},
    {position: [4634.64, -886.61, 1629.95], pointTo: 3, panoramaIndex: 5, hoverText: 'KITCHEN ROOM'},
    {position: [4088.3, -1312.64, 2543.89], pointTo: 4, panoramaIndex: 3, hoverText: 'LIVING ROOM'},
    {position: [4366.79, -2106.14, 1183.62], pointTo: 5, panoramaIndex: 4, hoverText: 'DOWN STAIRS'},
    {position: [4768.68, -1335.28, -625.74], pointTo: 5, panoramaIndex: 3, hoverText: 'DOWN STAIRS'},
    {position: [2071.76, -1871.37, 4139.14], pointTo: 6, panoramaIndex: 4, hoverText: 'BATHROOM'},
    {position: [-2593.76, -1566.07, 3968.63], pointTo: 4, panoramaIndex: 6, hoverText: 'LIVING ROOM'},
    {position: [3090.75, -1022.69, -3781.56], pointTo: 3, panoramaIndex: 4, hoverText: 'KITCHEN ROOM'},
    {position: [-3598.72, -2088.63, -2758.01], pointTo: 3, panoramaIndex: 14, hoverText: 'KITCHEN ROOM'},
    {position: [-505.79, -2392.79, -4354.72], pointTo: 14, panoramaIndex: 3, hoverText: 'LIVING ROOM'},
    {position: [-4685.89, -93.59, 1715.61], pointTo: 10, panoramaIndex: 14, arrowUp:true, floor:'second-floor', hoverText: 'HALLWAY'},
    {position: [3354.22, -3554.3, 1045.06], pointTo: 14, panoramaIndex: 10, arrowUp:true, floor:'first-floor', hoverText: 'LIVING ROOM'},
  ],
  panoramas: [
    new ImagePanorama(floor1_245), //0 STAIRS
    new ImagePanorama(floor1_246), //1 GARAGE
    new ImagePanorama(floor1_247), //2 GARAGE

    new ImagePanorama(floor2_241), //3 KITCHEN-ROOM
    new ImagePanorama(floor2_242), //4 LIVING-ROOM
    new ImagePanorama(floor2_243), //5 DOWN STAIRS
    new ImagePanorama(floor2_244), //6 BATHROOM

    new ImagePanorama(floor3_233),//7 MASTER BEDROOM
    new ImagePanorama(floor3_234),//8 MASTER BEDROOM-CLOSED
    new ImagePanorama(floor3_235),//9 BATHROOM
    new ImagePanorama(floor3_236),//10 HALLWAY
    new ImagePanorama(floor3_237),//11 HALLWAY
    new ImagePanorama(floor3_238),//12 BATHROOM
    new ImagePanorama(floor3_239),//13 MASTER-BEDROOM

    new ImagePanorama(floor2_240),//14 LIVING-ROOM

  ],
  floors: [
    {
      defaultPanorama: 0,
      value: 'basement',
      title: 'Basement',
      img: plan,
      dotPosition: [
        {top: 169, left: 93, pointTo: 0, hoverText: 'STAIRS'},
        {top: 168, left: 67, pointTo: 1, hoverText: 'GARAGE'},
        {top: 58, left: 81, pointTo: 2, hoverText: 'GARAGE'},

      ]
    },
    {
      defaultPanorama: 5,
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: [
        {top: 76, left: 97, pointTo: 5, hoverText: 'DOWN STAIRS'},
        {top: 59, left: 37, pointTo: 4, hoverText: 'LIVING ROOM'},
        {top: 141, left: 49, pointTo: 3, hoverText: 'KITCHEN ROOM'},
        {top: 39, left: 95, pointTo: 6, hoverText: 'BATHROOM'},
        {top: 161, left: 96, pointTo: 14, hoverText: 'LIVING ROOM'},

      ]
    },
    {
      defaultPanorama: 10,
      value: 'second-floor',
      title: 'Second floor',
      img: plan3,
      dotPosition: [
        {top: 80, left: 92, pointTo: 10, hoverText: 'HALLWAY'},
        {top: 40, left: 48, pointTo: 7, hoverText: 'MASTER BEDROOM'},
        {top: 82, left: 51, pointTo: 8, hoverText: 'MASTER BEDROOM CLOSED'},
        {top: 125, left: 49, pointTo: 9, hoverText: 'BATHROOM'},
        {top: 147, left: 76, pointTo: 11, hoverText: 'HALLWAY'},
        {top: 154, left: 56, pointTo: 12, hoverText: 'BATHROOM'},
        {top: 197, left: 73, pointTo: 13, hoverText: 'MASTER BEDROOM'},
      ]
    },
  ],
  rooms: {
    0: "STAIRS",                 // 0 STAIRS
    1: "GARAGE",                 // 1 GARAGE
    2: "GARAGE",                 // 2 GARAGE
    3: "KITCHEN ROOM",           // 3 KITCHEN-ROOM
    4: "LIVING ROOM",            // 4 LIVING-ROOM
    5: "DOWN STAIRS",            // 5 DOWN STAIRS
    6: "BATHROOM",               // 6 BATHROOM
    7: "MASTER BEDROOM",         // 7 MASTER BEDROOM
    8: "MASTER BEDROOM CLOSED",  // 8 MASTER BEDROOM-CLOSED
    9: "BATHROOM",               // 9 BATHROOM
    10: "HALLWAY",               // 10 HALLWAY
    11: "HALLWAY",               // 11 HALLWAY
    12: "BATHROOM",              // 12 BATHROOM
    13: "MASTER BEDROOM",        // 13 MASTER-BEDROOM
    14: "LIVING ROOM",           // 14 LIVING-ROOM
  },
  options: [
    {value: 'basement', label: 'BASEMENT'},
    {value: 'first-floor', label: 'FIRST FLOOR'},
    {value: 'second-floor', label: 'SECOND FLOOR'},
  ],
}
