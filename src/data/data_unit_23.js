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
  title: "Example 03",
  infospotsData: [
    {position: [655.07, -3109.98, -3849.8], pointTo: 1, panoramaIndex: 0, hoverText: 'HALLWAY'},
    {position: [-742.78, -3553.01, -3436.66], pointTo: 0, panoramaIndex: 1, hoverText: 'HALLWAY'},
    {position: [4754.46, -1191.21, -974.91], pointTo: 2, panoramaIndex: 1, hoverText: 'HALLWAY'},
    {position: [-3526.86, -1099.23, 3358.52], pointTo: 1, panoramaIndex: 2, hoverText: 'HALLWAY'},
    {
      position: [-4782.37, -800.8, -1192.16],
      pointTo: 5,
      panoramaIndex: 0,
      hoverText: 'Up to first floor',
      arrowUp: true,
      floor: 'first-floor'
    },
    {
      position: [1760.11, -3876.77, 2610.66],
      pointTo: 0,
      panoramaIndex: 5,
      hoverText: 'stairs to basement',
      arrowUp: true,
      floor: 'basement'
    },
    {position: [2905.7, -2061.96, -3494.92], pointTo: 4, panoramaIndex: 5, hoverText: 'HALLWAY'},
    {position: [-260.12, -2732.37, 4169.47], pointTo: 11, panoramaIndex: 13, hoverText: 'HALLWAY'},
    {position: [-2485.22, -2110.87, -3778.14], pointTo: 7, panoramaIndex: 10, hoverText: 'HALLWAY'},
    {position: [-3007.23, -2366.98, -3207.76], pointTo: 10, panoramaIndex: 7, hoverText: 'HALLWAY'},
    {position: [-4490.19, -2184.37, 81.92], pointTo: 8, panoramaIndex: 7, hoverText: 'HALLWAY'},
    {position: [-4291.46, -2476.6, 605.59], pointTo: 7, panoramaIndex: 8, hoverText: 'HALLWAY'},
    {position: [4215.27, -2623.67, 553.12], pointTo: 9, panoramaIndex: 8, hoverText: 'HALLWAY'},
    {position: [-4062.6, -2896.54, -206.07], pointTo: 8, panoramaIndex: 9, hoverText: 'HALLWAY'},
    {position: [-4727.1, -1560.68, -428.02], pointTo: 7, panoramaIndex: 9, hoverText: 'HALLWAY'},
    {position: [4765.38, -1508.5, -4.17], pointTo: 11, panoramaIndex: 10, hoverText: 'HALLWAY'},
    {position: [235.92, -3741.69, 3300.15], pointTo: 12, panoramaIndex: 11, hoverText: 'HALLWAY'},
    {position: [3239.44, -3803.39, -115.87], pointTo: 11, panoramaIndex: 12, hoverText: 'HALLWAY'},
    {position: [-4188.18, -2707.78, 216.64], pointTo: 13, panoramaIndex: 11, hoverText: 'HALLWAY'},
    {position: [4774.54, -1409.51, -362.14], pointTo: 10, panoramaIndex: 11, hoverText: 'HALLWAY'},
    {position: [-840.76, -953.78, 4825.47], pointTo: 10, panoramaIndex: 13, hoverText: 'HALLWAY'},
    {position: [4634.64, -886.61, 1629.95], pointTo: 3, panoramaIndex: 5, hoverText: 'HALLWAY'},
    {position: [4088.3, -1312.64, 2543.89], pointTo: 4, panoramaIndex: 3, hoverText: 'HALLWAY'},
    {position: [4366.79, -2106.14, 1183.62], pointTo: 5, panoramaIndex: 4, hoverText: 'HALLWAY'},
    {position: [4768.68, -1335.28, -625.74], pointTo: 5, panoramaIndex: 3, hoverText: 'HALLWAY'},
    {position: [2071.76, -1871.37, 4139.14], pointTo: 6, panoramaIndex: 4, hoverText: 'HALLWAY'},
    {position: [-2593.76, -1566.07, 3968.63], pointTo: 4, panoramaIndex: 6, hoverText: 'HALLWAY'},
    {position: [3090.75, -1022.69, -3781.56], pointTo: 3, panoramaIndex: 4, hoverText: 'HALLWAY'},
    {position: [-3598.72, -2088.63, -2758.01], pointTo: 3, panoramaIndex: 14, hoverText: 'HALLWAY'},
    {position: [-505.79, -2392.79, -4354.72], pointTo: 14, panoramaIndex: 3, hoverText: 'HALLWAY'},
    {position: [-4685.89, -93.59, 1715.61], pointTo: 10, panoramaIndex: 14, arrowUp:true, floor:'second-floor', hoverText: 'HALLWAY'},
    {position: [3354.22, -3554.3, 1045.06], pointTo: 14, panoramaIndex: 10, arrowUp:true, floor:'first-floor', hoverText: 'HALLWAY'},

  ],
  panoramas: [
    new ImagePanorama(floor1_245), //0
    new ImagePanorama(floor1_246), //1
    new ImagePanorama(floor1_247), //2

    new ImagePanorama(floor2_241), //3
    new ImagePanorama(floor2_242), //4
    new ImagePanorama(floor2_243), //5
    new ImagePanorama(floor2_244), //6

    new ImagePanorama(floor3_233),//7
    new ImagePanorama(floor3_234),//8
    new ImagePanorama(floor3_235),//9
    new ImagePanorama(floor3_236),//10
    new ImagePanorama(floor3_237),//11
    new ImagePanorama(floor3_238),//12
    new ImagePanorama(floor3_239),//13

    new ImagePanorama(floor2_240),//14

  ],
  floors: [
    {
      defaultPanorama: 0,
      value: 'basement',
      title: 'Basement',
      img: plan,
      dotPosition: [
        {top: 169, left: 93, pointTo: 0, hoverText: 'hover'},
        {top: 168, left: 67, pointTo: 1, hoverText: 'hover'},
        {top: 58, left: 81, pointTo: 2, hoverText: 'hover'}
      ]
    },
    {
      defaultPanorama: 5,
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: [
        {top: 76, left: 97, pointTo: 5, hoverText: 'hover'},
        {top: 59, left: 37, pointTo: 4, hoverText: 'hover'},
        {top: 141, left: 49, pointTo: 3, hoverText: 'hover'},
        {top: 39, left: 95, pointTo: 6, hoverText: 'hover'},
        {top: 161, left: 96, pointTo: 14, hoverText: 'hover'},
      ]
    },
    {
      defaultPanorama: 10,
      value: 'second-floor',
      title: 'Second floor',
      img: plan3,
      dotPosition: [
        {top: 80, left: 92, pointTo: 10, hoverText: 'hover'},
        { top: 40, left: 48, pointTo: 7, hoverText: 'hover'},
        { top: 82, left: 51, pointTo: 8, hoverText: 'hover'},
        { top: 125, left: 49, pointTo: 9, hoverText: 'hover'},
        { top: 147, left: 76, pointTo: 11, hoverText: 'hover'},
        { top: 154, left: 56, pointTo: 12, hoverText: 'hover'},
        { top: 197, left: 73, pointTo: 13, hoverText: 'hover'},
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
    {value: 'first-floor', label: 'First floor'},
    {value: 'second-floor', label: 'Second floor'},
  ],
}
