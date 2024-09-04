import {ImagePanorama} from "panolens";
import floor1_227 from "../media/unit_16/1_floor/227.jpg";
import floor1_228 from "../media/unit_16/1_floor/228.jpg";
import floor1_229 from "../media/unit_16/1_floor/229.jpg";
import floor1_230 from "../media/unit_16/1_floor/230.jpg";
import floor1_231 from "../media/unit_16/1_floor/231.jpg";


import floor2_225 from "../media/unit_16/2_floor/225.jpg";
import floor2_226 from "../media/unit_16/2_floor/226.jpg";
import floor2_232 from "../media/unit_16/2_floor/232.jpg";

import floor2_223_f from "../media/unit_16/2_floor/223_kitchen.jpg";
import floor2_224_f from "../media/unit_16/2_floor/224_living_dining.jpg";

import floor3_214 from "../media/unit_16/3_floor/214_entry to the primary bathroom.jpg";
import floor3_215 from "../media/unit_16/3_floor/215_primary bedroom.jpg";
import floor3_216 from "../media/unit_16/3_floor/216_primary bathroom.jpg";
import floor3_217 from "../media/unit_16/3_floor/217_hallway.jpg";
import floor3_218 from "../media/unit_16/3_floor/218_hallway_laundry.jpg";
import floor3_219 from "../media/unit_16/3_floor/219_hallway_stairs to the 2nd floor.jpg";
import floor3_220 from "../media/unit_16/3_floor/220_bathroom.jpg";
import floor3_221 from "../media/unit_16/3_floor/221_bedroom.jpg";
import floor3_222 from "../media/unit_16/3_floor/222_stairs to the 3rd and to the 2nd floor.jpg";

import plan1 from "../media/unit_16/1_floor/plan.jpg";
import plan2 from "../media/unit_16/2_floor/plan.jpg";
import plan3 from "../media/unit_16/3_floor/plan.jpg";


export const dataUnit16 = {
  title: "Unit #16",
  infospotsData: [
    {position: [4487.7, -1755.3, 1300.27], pointTo: 3, panoramaIndex: 0, hoverText: 'BEDROOM'},
    {position: [-3765.2, -1762.11, -2769.18], pointTo: 1, panoramaIndex: 0, hoverText: 'ENTER TO GARAGE'},
    {position: [-2499.57, -3058.14, 3053.04], pointTo: 2, panoramaIndex: 1, hoverText: 'GARAGE'},
    {position: [4132.25, -2272.15, -1646.09], pointTo: 1, panoramaIndex: 2, hoverText: 'ENTER TO GARAGE'},
    {position: [-4864.01, -1140.45, -60.43], pointTo: 3, panoramaIndex: 1, hoverText: 'BEDROOM'},
    {position: [-4601.09, -1944.05, -79.83], pointTo: 0, panoramaIndex: 1, hoverText: 'ENTER TO THE FIRST FLOOR'},
    {position: [4263.08, -2197.75, -1401.46], pointTo: 0, panoramaIndex: 3, hoverText: 'ENTER TO THE FIRST FLOOR'},
    {position: [3714.84, -2426, 2287.99], pointTo: 4, panoramaIndex: 3, hoverText: 'BATHROOM'},
    {position: [-3810.38, -2241.28, -2325.35], pointTo: 3, panoramaIndex: 4, hoverText: 'BEDROOM'},
    {
      position: [2301.44, -1059.1, -4300.57],
      pointTo: 5,
      panoramaIndex: 0,
      hoverText: 'STAIRS TO THE 2ND FLOOR',
      arrowUp: true,
    }, // on first floor
    {
      position: [349.39, -3694.77, -3344.97],
      pointTo: 0,
      panoramaIndex: 5,
      hoverText: 'ENTER TO THE FIRST FLOOR',
      arrowUp: true,
      floor: 'basement'
    },
    {
      position: [4790.49, -1395.38, -133.83],
      pointTo: 7,
      panoramaIndex: 5,
      hoverText: 'STAIRS TO THE BASEMENT',
      floor: 'first-floor'
    },
    {position: [3522.44, -3527.54, -377.11], pointTo: 5, panoramaIndex: 7, hoverText: 'STAIRS TO THE 2ND FLOOR'},
    {position: [2966.07, -1747.15, 3612.85], pointTo: 9, panoramaIndex: 7, hoverText: 'ENTER TO UP-STAIRS'},
    {position: [4669.1, -1399.4, -1081.03], pointTo: 8, panoramaIndex: 9, hoverText: 'KITCHEN ROOM'},
    {position: [-1388.61, -2008.78, 4358.27], pointTo: 9, panoramaIndex: 8, hoverText: 'ENTER TO UP-STAIRS'},
    {position: [-1347.92, -1747.25, 4478], pointTo: 6, panoramaIndex: 7, hoverText: 'LIVING ROOM'},
    {position: [3105.45, -1392.2, 3651.18], pointTo: 9, panoramaIndex: 6, hoverText: 'ENTER TO UP-STAIRS'},
    {position: [4388.92, -2272.55, -719.73], pointTo: 7, panoramaIndex: 6, hoverText: 'STAIRS TO THE BASEMENT'},
    {position: [-1074.5, -1789.12, -4535.29], pointTo: 7, panoramaIndex: 9, hoverText: 'STAIRS TO THE BASEMENT'},
    {position: [-4140.25, -1215.57, -2514.08], pointTo: 6, panoramaIndex: 9, hoverText: 'LIVING ROOM'},
    {position: [-4643.17, -1825.7, 163.9], pointTo: 14, panoramaIndex: 17, hoverText: 'HALLWAY LAUNDRY'},

    {
      position: [2359.37, -1885.29, -3980.61],
      pointTo: 18,
      panoramaIndex: 9,
      hoverText: 'STAIRS',
      arrowUp: true,
      floor: 'second-floor'
    },
    {
      position: [2645.59, -4225.6, 332.96],
      pointTo: 9,
      panoramaIndex: 18,
      hoverText: 'ENTER TO UP-STAIRS',
      arrowUp: true,
      floor: 'first-floor'
    },


    {position: [68.48, -710.09, 4943.38], pointTo: 15, panoramaIndex: 18, hoverText: 'DOWN STAIRS'},
    {position: [150.31, -3966.76, -3030.4], pointTo: 18, panoramaIndex: 15, arrowUp: true, hoverText: 'STAIRS'},
    {position: [-138.59, -3311.09, 3735.74], pointTo: 16, panoramaIndex: 15, hoverText: 'BATHROOM'},
    {position: [-3934.89, -3077.19, -22.96], pointTo: 15, panoramaIndex: 14, hoverText: 'DOWN STAIRS'},
    {position: [4018.97, -2918.34, 535.63], pointTo: 14, panoramaIndex: 15, hoverText: 'HALLWAY LAUNDRY'},

    {position: [-170.28, -1693.03, 4691.78], pointTo: 17, panoramaIndex: 14, hoverText: 'MASTER BEDROOM'},
    {position: [4288.45, -2555.98, -122.21], pointTo: 13, panoramaIndex: 14, hoverText: 'HALLWAY'},
    {position: [57.88, -3072.97, -3936.38], pointTo: 15, panoramaIndex: 16, hoverText: 'DOWN STAIRS'},

    {position: [4677.7, -1705.41, 351.74], pointTo: 13, panoramaIndex: 15, hoverText: 'HALLWAY'},
    {position: [4655.19, -1786.07, 213.39], pointTo: 10, panoramaIndex: 11, hoverText: 'HALLWAY'},
    {position: [4544.09, -2061.44, 134.78], pointTo: 11, panoramaIndex: 10, hoverText: 'MASTER BEDROOM'},
    {position: [-4145.77, -1591.89, -2285.53], pointTo: 13, panoramaIndex: 10, hoverText: 'HALLWAY'},
    {position: [2037.06, -2265.75, -3957.39], pointTo: 12, panoramaIndex: 10, hoverText: 'BATHROOM'},
    {position: [4244.47, -2512.16, 775.09], pointTo: 10, panoramaIndex: 12, hoverText: 'HALLWAY'},

    {position: [87.65, -912.88, -4907.85], pointTo: 11, panoramaIndex: 13, hoverText: 'MASTER BEDROOM'},
    {position: [118.19, -1631.18, -4717.33], pointTo: 10, panoramaIndex: 13, hoverText: 'HALLWAY'},
    {position: [-4238.69, -2645.97, -40.87], pointTo: 14, panoramaIndex: 13, hoverText: 'HALLWAY LAUNDRY'},
    {position: [-4699.23, -1675.85, -148.99], pointTo: 15, panoramaIndex: 13, hoverText: 'DOWN STAIRS'},
  ],
  panoramas: [
    new ImagePanorama(floor1_227), //0 ENTER TO THE FIRST FLOOR
    new ImagePanorama(floor1_228), //1 ENTER TO GARAGE
    new ImagePanorama(floor1_229), //2 GARAGE
    new ImagePanorama(floor1_230), //3 BEDROOM
    new ImagePanorama(floor1_231), //4 BATHROOM

    new ImagePanorama(floor2_226), //5 STAIRS TO THE 2ND FLOOR
    new ImagePanorama(floor2_224_f), //6 LIVING-ROOM
    new ImagePanorama(floor2_225), //7 STAIRS TO THE BASEMENT
    new ImagePanorama(floor2_223_f), //8 KITCHEN ROOM
    new ImagePanorama(floor2_232), //9 ENTER TO UP-STAIRS

    new ImagePanorama(floor3_214), //10 HALLWAY
    new ImagePanorama(floor3_215), //11 MASTER-BEDROOM
    new ImagePanorama(floor3_216), //12 BATHROOM
    new ImagePanorama(floor3_217), //13 HALLWAY
    new ImagePanorama(floor3_218), //14 HALLWAY-LAUNDRY
    new ImagePanorama(floor3_219), //15 DOWN-STAIRS
    new ImagePanorama(floor3_220), //16 BATHROOM
    new ImagePanorama(floor3_221), //17 MASTER-BEDROOM
    new ImagePanorama(floor3_222), //18 STAIRS
  ],
  floors: [
    {
      defaultPanorama: 18,
      value: 'second-floor',
      title: 'Second floor',
      img: plan3,
      dotPosition: [
        {top: 39, left: 44, pointTo: 11, hoverText: 'MASTER BEDROOM'},
        {top: 96, left: 92, pointTo: 18, hoverText: 'STAIRS'},
        {top: 129, left: 90, pointTo: 15, hoverText: 'DOWN STAIRS'},
        {top: 157, left: 93, pointTo: 16, hoverText: 'BATHROOM'},
        {top: 135, left: 64, pointTo: 14, hoverText: 'HALLWAY LAUNDRY'},
        {top: 171, left: 59, pointTo: 17, hoverText: 'MASTER BEDROOM'},
        {top: 74, left: 33, pointTo: 10, hoverText: 'HALLWAY'},
        {top: 132, left: 33, pointTo: 13, hoverText: 'HALLWAY'},
        {top: 76, left: 68, pointTo: 12, hoverText: 'BATHROOM'},
      ]
    },

    {
      defaultPanorama: 7,
      value: 'first-floor',
      title: 'First floor',
      img: plan2,
      dotPosition: [
        {top: 95, left: 91, pointTo: 5, hoverText: 'STAIRS TO THE 2ND FLOOR'},
        {top: 122, left: 93, pointTo: 7, hoverText: 'STAIRS TO THE BASEMENT'},
        {top: 156, left: 37, pointTo: 6, hoverText: 'LIVING ROOM'},
        {top: 95, left: 36, pointTo: 9, hoverText: 'ENTER TO UP-STAIRS'},
        {top: 63, left: 76, pointTo: 8, hoverText: 'KITCHEN ROOM'},
      ]
    },

    {
      defaultPanorama: 0,
      value: 'basement',
      title: 'Basement',
      img: plan1,
      dotPosition: [
        {top: 97, left: 35, pointTo: 0, hoverText: 'ENTER TO THE FIRST FLOOR'},
        {top: 164, left: 36, pointTo: 1, hoverText: 'ENTER TO GARAGE'},
        {top: 28, left: 46, pointTo: 3, hoverText: 'BEDROOM'},
        {top: 93, left: 92, pointTo: 5, hoverText: 'STAIRS TO THE 2ND FLOOR'},
        {top: 65, left: 72, pointTo: 4, hoverText: 'BATHROOM'},
        {top: 124, left: 71, pointTo: 2, hoverText: 'GARAGE'},

      ]
    },
  ],
  rooms: {
    0: "ENTER TO THE FIRST FLOOR",   // 0 ENTER TO THE FIRST FLOOR
    1: "ENTER TO GARAGE",            // 1 ENTER TO GARAGE
    2: "GARAGE",                     // 2 GARAGE
    3: "BEDROOM",                    // 3 BEDROOM
    4: "BATHROOM",                   // 4 BATHROOM
    5: "STAIRS TO THE 2ND FLOOR",    // 5 STAIRS TO THE 2ND FLOOR
    6: "LIVING ROOM",                // 6 LIVING-ROOM
    7: "STAIRS TO THE BASEMENT",     // 7 STAIRS TO THE BASEMENT
    8: "KITCHEN ROOM",               // 8 KITCHEN ROOM
    9: "ENTER TO UP-STAIRS",         // 9 ENTER TO UP-STAIRS
    10: "HALLWAY",                   // 10 HALLWAY
    11: "MASTER BEDROOM",            // 11 MASTER-BEDROOM
    12: "BATHROOM",                  // 12 BATHROOM
    13: "HALLWAY",                   // 13 HALLWAY
    14: "HALLWAY LAUNDRY",           // 14 HALLWAY-LAUNDRY
    15: "DOWN STAIRS",               // 15 DOWN-STAIRS
    16: "BATHROOM",                  // 16 BATHROOM
    17: "MASTER BEDROOM",            // 17 MASTER-BEDROOM
    18: "STAIRS",                    // 18 STAIRS
  },
  options: [
    {value: 'basement', label: 'BASEMENT'},
    {value: 'first-floor', label: 'FIRST FLOOR', disabled: false},
    {value: 'second-floor', label: 'SECOND FLOOR', disabled: false},
  ],
}
