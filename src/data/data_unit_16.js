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
import {
  bathroomLighting,
  bedroomLighting, cabinetsData,
  carpet,
  closets,
  countertop, countertopsData,
  doors, dryer, faucets, flooringData, floorTiles, garageLighting,
  hardwood,
  hvac, kitchenPackageData, lightsData, microwaveData, mirrors, ovenData,
  rails, refrigeratorsData,
  showers, sinks,
  toilets, washer
} from "./data_options";
import {sin} from "three/tsl";


export const dataUnit16 = {
  title: "Windthrow",
  infospotsData: [
    // {
    //     position: ,
    //     panoramaIndex: ,
    //     hoverText: '',
    //     isItPopup: true,
    //     popupData:[
    //         {category:"", data: },
    //     ]
    // },
    {
      position: [-3642.21, 1700.21, -2957.3],
      panoramaIndex: 0,
      hoverText: '',
      isItPopup: true,
      popupData: [
        { category: "Lighting", data: bedroomLighting }
      ]
    },
    {
      position: [2579.73, -1938.16, -3811.58],
      panoramaIndex: 0,
      hoverText: '',
      isItPopup: true,
      popupData: [
        { category: "Rails", data: rails }
      ]
    },
    {
      position: [4570.46, -1663.05, -1122.71],
      panoramaIndex: 0,
      hoverText: '',
      isItPopup: true,
      popupData: [
        { category: "Doors", data: doors }
      ]
    },
    {
      position: [2612.65, -4211.27, 629.42],
      panoramaIndex: 0,
      hoverText: '',
      isItPopup: true,
      popupData: [
        { category: "Hardwood", data: hardwood }
      ]
    },
    {
      position: [-3292.66, -792.72, -3676.84],
      panoramaIndex: 0,
      hoverText: '',
      isItPopup: true,
      popupData: [
        { category: "Doors", data: doors }
      ]
    },

      // Bedroom - Panorama Index 3
      {
        position: [1897.26, 2587.77, 3826.96],
        panoramaIndex: 3,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BedroomLighting", data: bedroomLighting }
        ]
      },
      {
        position: [3858.59, -3162.4, -196.98],
        panoramaIndex: 3,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }

        ]
      },
      {
        position: [4768.57, 1472.72, 135.94],
        panoramaIndex: 3,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },
      {
        position: [-372.35, -2149.63, -4490.99],
        panoramaIndex: 3,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Closets", data: closets }
        ]
      },

      // Bathroom - Panorama Index 4
      {
        position: [2728.69, -3681.56, -1989.98],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Countertop", data: countertop }
        ]
      },
      {
        position: [2102.05, -4291.78, 1459.71],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Toilets", data: toilets }
        ]
      },
      {
        position: [1641.12, -2241.71, 4149.4],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Showers", data: showers }
        ]
      },
      {
        position: [4749.95, 165.2, -1539.94],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Mirrors", data: mirrors }
        ]
      },
      {
        position: [4074.71, 2184.31, -1889.39],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BathroomLighting", data: bathroomLighting }
        ]
      },
      {
        position: [-173.7, -4992.39, -85.12],
        panoramaIndex: 4,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "FloorTiles", data: floorTiles }
        ]
      },

      // Hall - Panorama Index 1
      {
        position: [-4784.11, 1426.67, 87.13],
        panoramaIndex: 1,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HallLighting", data: bedroomLighting }
        ]
      },
      {
        position: [-4256.24, -2610.02, 159.35],
        panoramaIndex: 1,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood }
        ]
      },
      {
        position: [-4159.39, -1909.94, 2000.71],
        panoramaIndex: 1,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },

      // Garage - Panorama Index 2
      {
        position: [4459.25, 1391.99, 1754.66],
        panoramaIndex: 2,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "GarageLighting", data: garageLighting }
        ]
      },

      // Upstairs - Panorama Index 5
      {
        position: [4459.25, 1391.99, 1754.66],
        panoramaIndex: 5,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Rails", data: rails }
        ]
      },
      {
        position: [1466.63, -4697.38, -862.4],
        panoramaIndex: 5,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },

      // Living Room - Panorama Index 7
      {
        position: [-1194.04, -2956.72, 3847.6],
        panoramaIndex: 7,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood },
          { category: "Carpet", data: carpet }

        ]
      },
      {
        position: [-2129.99, 1764.92, 4153.48],
        panoramaIndex: 7,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "LivingRoomLighting", data: bedroomLighting }
        ]
      },
      {
        position: [-4885.8, 764.5, 691.1],
        panoramaIndex: 7,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },

      // Living Room - Panorama Index 6
      {
        position: [4053.02, -2674.32, 1163.71],
        panoramaIndex: 6,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood },
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [3421.03, 909.67, 3517.59],
        panoramaIndex: 6,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "LivingRoomLighting", data: bedroomLighting }
        ]
      },
      {
        position: [-991.94, 949.99, -4802.29],
        panoramaIndex: 6,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },

      // Living Room - Panorama Index 9
      {
        position: [-1561.93, -2630.9, -3947.52],
        panoramaIndex: 9,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood },
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [-3263.52, 1278.18, -3558.55],
        panoramaIndex: 9,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "LivingRoomLighting", data: bedroomLighting }
        ]
      },
      {
        position: [-2768.24, 340.61, -4139.99],
        panoramaIndex: 9,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },
      {
        position: [3390.6, -710.41, -3595.83],
        panoramaIndex: 9,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Rails", data: rails }
        ]
      },
      {
        position: [1711.36, -2779.6, -3781.01],
        panoramaIndex: 9,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },




      // Kitchen - Panorama Index 8
      {
        position: [-518.11, -125, -4967.94],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: microwaveData
      },
      {
        position: [-2702.13, 280.85, -4185.72],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: cabinetsData
      },
      {
        position: [-3512.09, -3280.28, -1360.35],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: flooringData
      },
      {
        position: [1825.98, -4231.04, 1931.55],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: countertopsData
      },
      {
        position: [1566.05, 2778.37, -3840.54],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: lightsData
      },
      {
        position: [-410.62, -2092.7, -4515.23],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: ovenData
      },
      {
        position: [-4180.75, -1598.18, -2211.78],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: refrigeratorsData
      },
      {
        position: [-1748.22, -3321.3, 3293.77],
        panoramaIndex: 8,
        hoverText: '',
        isItPopup: true,
        popupData: kitchenPackageData
      },


      // Panorama Index 18
      {
        position: [1597.88, -4724.32, 310.57],
        panoramaIndex: 18,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [2564.9, -3950.55, 1658.98],
        panoramaIndex: 18,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Rails", data: rails }
        ]
      },

      // Panorama Index 15
      {
        position: [3229.13, -3807.12, 222.34],
        panoramaIndex: 15,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [4257.89, -1751.61, -1935.88],
        panoramaIndex: 15,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },
      {
        position: [4340.44, 2432.28, 451.97],
        panoramaIndex: 15,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BedroomLighting", data: bedroomLighting }
        ]
      },
      {
        position: [-5.53, -3828.21, 3213.74],
        panoramaIndex: 15,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood }
        ]
      },

      // Panorama Index 16 (Bathroom)
      {
        position: [3650.01, -2597.03, -2212.2],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData:[
          { category: "sinks", data: sinks }
        ]
      },
      {
        position: [4470.53, -1169.66, -1900.02],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Faucets", data: faucets }
        ]
      },
      {
        position: [4722.5, 795.45, -1419.73],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Mirrors", data: mirrors }
        ]
      },
      {
        position: [3772.31, 3054.15, -1178.66],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BathroomLighting", data: bathroomLighting }
        ]
      },
      {
        position: [3055.26, -3267.15, 2231.07],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Toilets", data: toilets }
        ]
      },
      {
        position: [1694.82, -1485.2, 4454.1],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Showers", data: showers }
        ]
      },
      {
        position: [-190.51, -4775.4, 1459.92],
        panoramaIndex: 16,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood }
        ]
      },



      // Panorama Index 14
      {
        position: [3778.73, -3261.16, 199.07],
        panoramaIndex: 14,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [-1415.17, -2086.8, -4312.53],
        panoramaIndex: 14,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Washer", data: washer }
        ]
      },
      {
        position: [1065.67, -2357.73, -4269.5],
        panoramaIndex: 14,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Dryer", data: dryer }
        ]
      },
      {
        position: [3908.32, 3105.41, 105.37],
        panoramaIndex: 14,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BedroomLighting", data: bedroomLighting }
        ]
      },

      // Panorama Index 17
      {
        position: [-4190.56, 2220.26, -1561.47],
        panoramaIndex: 17,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },
      {
        position: [-3432.91, -3434.91, 1168.29],
        panoramaIndex: 17,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [2223.96, 4397.65, -817.37],
        panoramaIndex: 17,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Lighting", data: bedroomLighting }
        ]
      },
      {
        position: [1778.38, -749.06, 4604.07],
        panoramaIndex: 17,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Closets", data: closets }
        ]
      },
      {
        position: [-4700.12, -508.19, 1607.61],
        panoramaIndex: 17,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },

      // Panorama Index 13
      {
        position: [-3562.12, -3456.64, 544.99],
        panoramaIndex: 13,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [-4520.65, 2121.7, 52.13],
        panoramaIndex: 13,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Lighting", data: bedroomLighting }
        ]
      },
      {
        position: [-4660.16, -1234.22, -1294.14],
        panoramaIndex: 13,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },

      // Panorama Index 10
      {
        position: [-3602.46, -2681.41, -2185.12],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [-4670.73, -209.3, -1742.44],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },
      {
        position: [-3120.1, -892.16, -3791.16],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Closets", data: closets }
        ]
      },
      {
        position: [-3621.27, 2860.1, -1906.56],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Lighting", data: bedroomLighting }
        ]
      },
      {
        position: [4630.27, 1104.26, 1520.67],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },
      {
        position: [4300.8, -2226.24, 1216.29],
        panoramaIndex: 10,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },

      // Panorama Index 12 (Bathroom)
      {
        position: [1778.43, -3299.18, -3301.3],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Sinks", data: sinks }
        ]
      },
      {
        position: [1242.51, -1532.3, -4587.08],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Faucets", data: faucets }
        ]
      },
      {
        position: [1327.57, 1656.13, -4518.21],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Mirrors", data: mirrors }
        ]
      },
      {
        position: [-3005.58, -3364.83, -2143.77],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Toilets", data: toilets }
        ]
      },
      {
        position: [-4426.89, -1761.45, -1496.2],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Showers", data: showers }
        ]
      },
      {
        position: [939.35, 3388.53, -3544.03],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BathroomLighting", data: bathroomLighting }
        ]
      },
      {
        position: [3252.08, -3741.82, 612.33],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Hardwood", data: hardwood }
        ]
      },
      {
        position: [4184.1, -973.1, 2542.36],
        panoramaIndex: 12,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Doors", data: doors }
        ]
      },

      // Panorama Index 11 (Master Bedroom)
      {
        position: [3448.77, -3554, -667.55],
        panoramaIndex: 11,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "Carpet", data: carpet }
        ]
      },
      {
        position: [-946.12, 2438.79, -4254.6],
        panoramaIndex: 11,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "HVAC", data: hvac }
        ]
      },
      {
        position: [4539.32, 2064.34, 200.36],
        panoramaIndex: 11,
        hoverText: '',
        isItPopup: true,
        popupData: [
          { category: "BedroomLighting", data: bedroomLighting }
        ]
      },



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
    { panorama: new ImagePanorama(floor1_227), initialView: [4562.1, -552.63, -1970.25] }, // ENTER TO THE FIRST FLOOR
    { panorama: new ImagePanorama(floor1_228), initialView: [-4199.51, -1492.04, 2266.71] }, // ENTER TO GARAGE
    { panorama: new ImagePanorama(floor1_229), initialView: [4255.12, -2072.75, 1611.73] }, // GARAGE
    { panorama: new ImagePanorama(floor1_230), initialView: [799.12, -1635.38, 4656.92] }, // BEDROOM
    { panorama: new ImagePanorama(floor1_231), initialView: [4315.12, -2442.56, 643.14] }, // BATHROOM

    { panorama: new ImagePanorama(floor2_226), initialView: [3220.66, -2888.68, -2506.57] }, // STAIRS TO THE 2ND FLOOR
    { panorama: new ImagePanorama(floor2_224_f), initialView: [4443, -1110.01, 2006.89] }, // LIVING-ROOM
    { panorama: new ImagePanorama(floor2_225), initialView: [-766.58, -1238.3, 4783.2] }, // STAIRS TO THE BASEMENT
    { panorama: new ImagePanorama(floor2_223_f), initialView: [1697.73, -1510.12, -4453.9] }, // KITCHEN ROOM
    { panorama: new ImagePanorama(floor2_232), initialView: [4773.9, -1036.41, -1065.71] }, // ENTER TO UP-STAIRS

    { panorama: new ImagePanorama(floor3_214), initialView: [3518.75, -1201.73, -3342.79] }, // HALLWAY
    { panorama: new ImagePanorama(floor3_215), initialView: [317.09, -888.42, 4910.21] }, // MASTER-BEDROOM
    { panorama: new ImagePanorama(floor3_216), initialView: [-75.57, -1599.67, -4736.6] }, // BATHROOM
    { panorama: new ImagePanorama(floor3_217), initialView: [-2468.74, -1917.07, -3902.59] }, // HALLWAY
    { panorama: new ImagePanorama(floor3_218), initialView: [2619.31, -1812.12, 3854.28] }, // HALLWAY-LAUNDRY
    { panorama: new ImagePanorama(floor3_219), initialView: [2967.14, -2409.51, 3223.4] }, // DOWN-STAIRS
    { panorama: new ImagePanorama(floor3_220), initialView: [4714.23, -1599.6, 466.2] }, // BATHROOM
    { panorama: new ImagePanorama(floor3_221), initialView: [-720.5, -1812.23, -4603.99] }, // MASTER-BEDROOM
    { panorama: new ImagePanorama(floor3_222), initialView: [2532.67, -2673.83, 3381.75] }  // STAIRS
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
