import {ImagePanorama} from "panolens";
import bedroom2 from "../media/unit_2/1_floor/bedroom2.jpg";
import hallway3 from "../media/unit_2/1_floor/hallway-view3.jpg";
import bedroom1 from "../media/unit_2/1_floor/bedroom1.jpg";
import hallway1 from "../media/unit_2/1_floor/hallway-view1.jpg";
import hallwayBathroom from "../media/unit_2/1_floor/hallway-bathroom.jpg";
import hallway2 from "../media/unit_2/1_floor/hallway-view2.jpg";
import laundry from "../media/unit_2/1_floor/laundry.jpg";
import MBView1 from "../media/unit_2/1_floor/MB-view1.jpg";
import MBView2 from "../media/unit_2/1_floor/MB-view2.jpg";
import MBView3 from "../media/unit_2/1_floor/MB-enter-to-bathroom.jpg";
import MBClosed from "../media/unit_2/1_floor/MBClosed.jpg";
import bathroomMR from "../media/unit_2/1_floor/bathroomMR.jpg";


import basement_210 from "../media/unit_2/basement/210_entry_stairs to the 2nd level (2).jpg";
import basement_213 from "../media/unit_2/basement/213_garage (2).jpg";
import basement_212 from "../media/unit_2/basement/212_kitchen_living _dining (3).jpg";

import plan from "../media/unit_2/1_floor/plan.jpg";
import plan2 from "../media/unit_2/basement/plan.jpg";
import {
    airswitcher, baseboards, bathroomLighting, bedroomLighting, cabinetsData, carpet, closets,
    countertop, countertopsData, dishwasher, doorHardware, doors, dryer, faucets, flooringData,
    fridge, garageLighting, garbageDisposal,
    handleless,
    handlelessMaterial, hardware, hardwood, hood, hvac, kitchenPackageData, lightsData,
    microwave, microwaveData, mirrors,
    oven, ovenData,
    plumbing, rails, refrigeratorsData, showers, sinks, toilets, washer,
} from "./data_options";


export const dataUnit2 = {
    title: "Cascade",
    infospotsData: [
        {
            position: [-4405.43, -788.04, 2214.23],
            panoramaIndex: 3,
            hoverText: '',
            isItPopup: true,
            popupData: [
                { category: "Closet", data: closets }
            ]
        },

        {
            position: [3339.21, -875.75, 3608.94],
            panoramaIndex: 5,
            hoverText: '',
            isItPopup: true,
            popupData: [
                { category: "Closet", data: closets }
            ]
        },
        {
            position: [-2562.91, 1782.51, -3893.58],
            panoramaIndex: 5,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"HVAC", data:hvac },
            ]
        },
        {
            position: [-3002.97, 3930.34, 693.99],
            panoramaIndex: 5,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lighting", data: bedroomLighting},
            ]
        },
        {
            position: [3942.61, -2947.43, -867.69],
            panoramaIndex: 5,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Carpet", data: carpet},
            ]
        },
        {
            position: [3800.93, 1742.62, -2732.56],
            panoramaIndex: 3,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"HVAC", data:hvac },
            ]
        },
        {
            position: [2323.28, 4396.28, 491.75],
            panoramaIndex: 3,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lighting", data: bedroomLighting},
            ]
        },
        {
            position: [-2654.69, -3099.34, -2879.49],
            panoramaIndex: 3,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Carpet", data: carpet},
            ]
        },
        {
            position: [3022, -2893.13, 2733.99],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Toilets", data:toilets },
            ]
        },
        {
            position: [4288.66, -2367.94, -972.1],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Sinks", data: sinks },
            ]
        },
        {
            position: [4881.55, 860.64, -604.96],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Mirrors", data: mirrors},
            ]
        },
        {
            position: [4733.99, -1285.87, -933.69],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Faucets", data: faucets},
            ]
        },
        {
            position: [476.68, -777.69, 4913.99],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Showers", data: showers},
            ]
        },
        {
            position: [4098.17, 2783.91, -608.95],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lighting", data: bathroomLighting},
            ]
        },
        {
            position: [1247.37, -4815.77, 458.41],
            panoramaIndex: 7,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Hardwood", data: hardwood},
            ]
        },
        {
            position:[982.24, -1463.34, -4675.7] ,
            panoramaIndex: 4,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Doors", data: doors},
                {category:"Baseboards", data: baseboards},
                {category: "Hardware", data: doorHardware},
            ]
        },

        {
            position: [-3360.34, -1306.7, 3450.37],
            panoramaIndex: 13,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Closets", data: closets},
            ]
        },
        {
            position: [1392.75, -2738.74, 3935.39],
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Toilets", data: toilets},
            ]
        },
        {
            position: [-3513.3, -2289.62, 2713.38],
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Sinks", data: sinks},
            ]
        },
        {
            position:[-2604.35, 908.93, 4159.04] ,
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Mirrors", data:mirrors },
            ]
        },
        {
            position:  [-4652.43, -1275.65, 1277.9],
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Faucets", data: faucets},
            ]
        },
        {
            position:[4430.42, -706.13, 2187.55] ,
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Showers", data:showers },
            ]
        },
        {
            position: [-1805.79, 3030.54, 3532.64],
            panoramaIndex: 14,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lighting", data: bathroomLighting},
            ]
        },

        {
            position: [-2922.53, -190.39, -4046.83],
            panoramaIndex: 6,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Doors", data: doors},
                {category:"Baseboards", data: baseboards},
                {category: "Hardware", data: doorHardware},
            ]
        },
        {
            position: [639.64, -3661.32, -3335.81],
            panoramaIndex: 6,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category: "Carpet", data: carpet},
            ]
        },
        {
            position: [-138.37, -3302.72, 3743.49],
            panoramaIndex: 8,
            hoverText: '',
            isItPopup: true,
            popupData:flooringData
        },
        {
            position: [-2459.37, -1492.82, 4082.67],
            panoramaIndex: 8,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Washer", data: washer},
                {category:"Dryer", data: dryer},
            ]
        },
        {
            position: [-3493.34, -1678.92, -3152.69],
            panoramaIndex: 9,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Dryer", data: dryer},
            ]

        },
        {
            position: [-4242.43, -2609.04, 433.32],
            panoramaIndex: 9,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Washer", data: washer},
            ]
        },
        {
            position:  [666.96, 953.04, 4853.15],
            panoramaIndex: 10,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"HVAC", data: hvac},
            ]
        },
        {
            position: [2395.88, 2338.31, 3703.25],
            panoramaIndex: 10,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lights", data: bedroomLighting},
            ]
        },
        {
            position: [2891.2, -3098.81, 2643.57],
            panoramaIndex: 10,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Carpet", data: carpet},
            ]
        },

        {
            position: [-1326.5, -2126.77, -4318.68],
            panoramaIndex: 11,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Carpet", data: carpet},
            ]
        },
        {
            position: [765.6, 3859.01, -3077.32],
            panoramaIndex: 11,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lights", data: bedroomLighting},
            ]
        },
        {
            position: [2306.76, 1942.5, 3986.46],
            panoramaIndex: 11,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"HVAC", data: hvac},
            ]
        },

        {
            position: [-4087.36, -2498.45, 1409.89],
            panoramaIndex: 12,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Carpet", data: carpet},
            ]
        },
        {
            position: [-4196.96, 2041.75, -1774.13],
            panoramaIndex: 12,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"Lights", data: bedroomLighting},
            ]
        },
        {
            position: [-2806.05, 2064.65, 3574.03],
            panoramaIndex: 12,
            hoverText: '',
            isItPopup: true,
            popupData:[
                {category:"HVAC", data: hvac},
            ]
        },

        {
            position: [4328.24, -835.66, 2344.9],
            panoramaIndex: 0,
            hoverText: '',
            isItPopup: true,
            popupData:[ {category:"Rails", data: rails}]
        },
        {
            position: [870.13, -2896.02, 3978.53],
            panoramaIndex: 0,
            hoverText: '',
            isItPopup: true,
            popupData:flooringData
        },
        {
            position: [4347.97, -2295.15, 897.48],
            panoramaIndex: 0,
            hoverText: '',
            isItPopup: true,
            popupData:[{category:"Carpet", data: carpet}]
        },
        {
            position: [3187.33, -1480.03, -3553.04],
            panoramaIndex: 0,
            hoverText: '',
            isItPopup: true,
            popupData:[{category:"Doors", data: doors}]
        },
        {
         position: [3847.58, 3167.57, -329.33],
         panoramaIndex: 1,
            hoverText: '',
            isItPopup: true,
            popupData:[{category:"Garage Lighting", data: garageLighting}]
        },

        {
            position: [3757.36, 1364.52, 2986.71],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: [{category:"HVAC", data: hvac}]
        },

        {
            position: [2695.15, -712.77, 4139.88],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: [{category:"Doors", data: doors}]
        },


        {
            position: [-996.3, -1610.45, 4624.4],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: kitchenPackageData
        },
        {
            position: [1587.79, -1164.75, 4591.64],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: refrigeratorsData
        },

// Oven
        {
            position: [-2081.34, -1071.64, 4409.92],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: ovenData
        },

// Microwave
        {
            position: [-2171.37, -20.02, 4496.69],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: microwaveData
        },

// Light
        {
            position: [-2380.69, 1912.97, 3954.61],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: lightsData
        },

// Table
        {
            position: [-2869.32, -2420.32, 3292.97],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: countertopsData
        },

// Flooring
        {
            position: [1860.09, -2895.66, 3618.32],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData:flooringData
        },

// Cabinet
        {
            position: [-3490.75, 236.11, 3557.53],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: cabinetsData
        },
        {
            position: [4767.34, -1438.1, 345.59],
            pointTo: 0,
            panoramaIndex: 2,
            hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'
        },
        {position: [2422.45, -1064.18, 4237.77], pointTo: 2, panoramaIndex: 0, hoverText: 'KITCHEN LIVING DINING'},
        {position: [4214.16, -938.69, -2508.61], pointTo: 1, panoramaIndex: 0, hoverText: 'GARAGE'},
        {
            position: [4653.19, -1293.66, -1255.49],
            pointTo: 0,
            panoramaIndex: 1,
            hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'
        },
        {
            position: [4945.09, -18.76, 691.7],
            pointTo: 6,
            panoramaIndex: 0,
            arrowUp: true,
            floor: 'first-floor',
            hoverText: 'STAIRS TO THE 2ND LEVEL'
        },
        {
            position: [-377.47, -2910.73, -4044.14],
            pointTo: 0,
            panoramaIndex: 6,
            arrowUp: true,
            floor: 'basement',
            hoverText: 'STAIRS TO THE BASEMENT'
        },

        {position: [-3944.75, -1092.23, -2867.28], pointTo: 4, panoramaIndex: 3, hoverText: 'HALLWAY'},
        {position: [-1671.56, -1820.95, -4336.10], pointTo: 3, panoramaIndex: 4, hoverText: 'BEDROOM 1'},
        {position: [-2836.86, -2040.29, 3563.51], pointTo: 6, panoramaIndex: 4, hoverText: 'HALLWAY 2'},
        {position: [-2245.67, -1923.21, -4028.08], pointTo: 4, panoramaIndex: 6, hoverText: 'HALLWAY'},
        {position: [-2008.23, -1053.31, -4451.25], pointTo: 7, panoramaIndex: 6, hoverText: 'HALLWAY BATHROOM'},
        {position: [-4397.06, -2255.63, -719.76], pointTo: 4, panoramaIndex: 7, hoverText: 'HALLWAY '},
        {position: [2754.37, -2278.29, -3488.25], pointTo: 7, panoramaIndex: 4, hoverText: 'HALLWAY BATHROOM'},
        {position: [-4854.49, -1079.57, -473.11], pointTo: 6, panoramaIndex: 7, hoverText: 'HALLWAY 2'},
        {position: [-4598.75, -1927.29, -271.99], pointTo: 5, panoramaIndex: 4, hoverText: 'BEDROOM 2'},
        {position: [4779.88, -1274.36, -664.69], pointTo: 4, panoramaIndex: 5, hoverText: 'HALLWAY'},
        {position: [3924.77, -2843.90, -1205.13], pointTo: 8, panoramaIndex: 6, hoverText: 'HALLWAY 3'},
        {position: [4116.16, -2609.59, 1093.73], pointTo: 6, panoramaIndex: 8, hoverText: 'HALLWAY 2'},
        {position: [-822.6, -3296.41, 3663.35], pointTo: 9, panoramaIndex: 8, hoverText: 'LAUNDRY'},
        {position: [2279.53, -3006.44, -3272.88], pointTo: 8, panoramaIndex: 9, hoverText: 'HALLWAY 3'},
        {position: [4605.93, -1286.28, -1439.86], pointTo: 10, panoramaIndex: 6, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [-4679.95, -1702.50, -329.22], pointTo: 10, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [4652.86, -1017.83, -1508.94], pointTo: 6, panoramaIndex: 10, hoverText: 'HALLWAY 2'},
        {position: [4570.24, -1397.33, -1452.25], pointTo: 8, panoramaIndex: 10, hoverText: 'HALLWAY 3'},
        {position: [851.73, -1585.63, 4657.94], pointTo: 11, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2557.85, -951.05, 4179.26], pointTo: 14, panoramaIndex: 10, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [-2601.3, -2376.44, -3541.58], pointTo: 10, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [4448.65, -2253.95, 262.58], pointTo: 12, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [4551.17, -1641.90, 1224.84], pointTo: 14, panoramaIndex: 11, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [4713.58, -1332.85, -978.00], pointTo: 13, panoramaIndex: 11, hoverText: 'MASTER BEDROOM CLOSED'},
        {position: [-4350.37, -1041.30, -2211.49], pointTo: 10, panoramaIndex: 12, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [-4506.57, -2150.25, 69.48], pointTo: 11, panoramaIndex: 12, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2183.78, -2574.50, -3683.49], pointTo: 13, panoramaIndex: 12, hoverText: 'MASTER BEDROOM CLOSED'},
        {position: [2772.55, -3826.14, 1628.59], pointTo: 14, panoramaIndex: 12, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [535.55, -2828.41, -4079.73], pointTo: 12, panoramaIndex: 14, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [98.89, -1575.87, -4738.74], pointTo: 11, panoramaIndex: 14, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2209.86, -1120.79, 4333.48], pointTo: 12, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [3007.7, -2284.48, -3272.55], pointTo: 12, panoramaIndex: 13, hoverText: 'MASTER BEDROOM VIEW3'},
    ],

    panoramas: [
        {panorama: new ImagePanorama(basement_210), initialView: [3717.78, -1138.01, 3143.73]},   // ENTRY STAIRS TO THE 2ND LEVEL
        {panorama: new ImagePanorama(basement_213), initialView: [2997.2, -1474.13, -3720.71]},   // GARAGE
        {panorama: new ImagePanorama(basement_212), initialView: [-3051.69, -1365.7, 3717.8]},   // KITCHEN LIVING DINING
        {panorama: new ImagePanorama(bedroom2), initialView: [4853.41, -1201.69, -19.22]},       // BEDROOM 2
        {panorama: new ImagePanorama(hallway3), initialView: [-3923.36, -1436.74, -2746.45]},       // HALLWAY 3
        {panorama: new ImagePanorama(bedroom1), initialView: [-4425.41, -1165.06, -2014.54]},       // BEDROOM 1
        {panorama: new ImagePanorama(hallway1), initialView: [-430.29, -1073.29, -4864.45]},       // HALLWAY 1
        {panorama: new ImagePanorama(hallwayBathroom), initialView: [4619.74, -1864.84, 424.74]},// HALLWAY BATHROOM
        {panorama: new ImagePanorama(hallway2), initialView: [-4892.47, -758.3, 699.1]},       // HALLWAY 2
        {panorama: new ImagePanorama(laundry), initialView: [-3901.16, -2763.47, -1464.31]},        // LAUNDRY
        {panorama: new ImagePanorama(MBView1), initialView: [769.86, -720.9, 4887.5]},        // MASTER BEDROOM VIEW 1
        {panorama: new ImagePanorama(MBView2), initialView: [3237.08, -1492.15, -3506.39]},        // MASTER BEDROOM VIEW 2
        {panorama: new ImagePanorama(MBView3), initialView: [-4579.52, -795.52, -1842.6]},        // MASTER BEDROOM VIEW 3
        {panorama: new ImagePanorama(MBClosed), initialView: [-3143.74, -925.52, 3776.29]},       // MASTER BEDROOM CLOSED
        {panorama: new ImagePanorama(bathroomMR), initialView: [-1184.46, -1437.97, 4639.97]},     // BATHROOM MASTER
    ],

    floors: [
        {
            defaultPanorama: 6,
            value: 'first-floor',
            title: 'First floor',
            img: plan,
            dotPosition: [
                {top: 43, left: 30, pointTo: 3, hoverText: 'BEDROOM 1'},
                {top: 82, left: 64, pointTo: 4, hoverText: 'HALLWAY'},
                {top: 43, left: 90, pointTo: 5, hoverText: 'BEDROOM 2'},
                {top: 89, left: 110, pointTo: 6, hoverText: 'HALLWAY 2'},
                {top: 82, left: 24, pointTo: 7, hoverText: 'HALLWAY BATHROOM'},
                {top: 116, left: 110, pointTo: 8, hoverText: 'HALLWAY BATHROOM'},
                {top: 125, left: 87, pointTo: 9, hoverText: 'LAUNDRY'},
                {top: 181, left: 110, pointTo: 10, hoverText: 'MASTER BEDROOM VIEW1'},
                {top: 187, left: 64, pointTo: 11, hoverText: 'MASTER BEDROOM VIEW2'},
                {top: 171, left: 45, pointTo: 12, hoverText: 'MASTER BEDROOM VIEW3'},
                {top: 133, left: 52, pointTo: 13, hoverText: 'MASTER BEDROOM CLOSED'},
                {top: 159, left: 19, pointTo: 14, hoverText: 'MASTER BEDROOM BATHROOM'},
            ]
        },
        {
            defaultPanorama: 0,
            value: 'basement',
            title: 'Basement',
            img: plan2,
            dotPosition: [
                {top: 104, left: 13, pointTo: 0, hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'},
                {top: 170, left: 79, pointTo: 1, hoverText: 'GARAGE'},
                {top: 42, left: 62, pointTo: 2, hoverText: 'KITCHEN LIVING DINING'},
            ]
        },
    ],
    rooms: {
        0: "ENTRY STAIRS TO THE 2ND LEVEL",
        1: "GARAGE",
        2: "KITCHEN LIVING DINING",
        3: "BEDROOM 1",
        4: "HALLWAY",
        5: "BEDROOM 2",
        6: "HALLWAY",
        7: "HALLWAY BATHROOM",
        8: "HALLWAY",
        9: "LAUNDRY",
        10: "MASTER BEDROOM",
        11: "MASTER BEDROOM",
        12: "MASTER BEDROOM",
        13: "MB CLOSED",
        14: "MB BATHROOM",
    },
    options: [
        {value: 'basement', label: 'BASEMENT'},
        {value: 'first-floor', label: 'FIRST FLOOR'},
    ],
}


export const testUnit = {
    title: "Cascade",
    infospotsData: [
        {
            position: [3757.36, 1364.52, 2986.71],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: hvac
        },
        {
            position: [-996.3, -1610.45, 4624.4],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: kitchenPackageData
        },
        {
            position: [1587.79, -1164.75, 4591.64],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: refrigeratorsData
        },

// Oven
        {
            position: [-2081.34, -1071.64, 4409.92],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: ovenData
        },

// Microwave
        {
            position: [-2171.37, -20.02, 4496.69],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: microwaveData
        },

// Light
        {
            position: [-2380.69, 1912.97, 3954.61],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: lightsData
        },

// Table
        {
            position: [-2869.32, -2420.32, 3292.97],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: countertopsData
        },

// Flooring
        {
            position: [1860.09, -2895.66, 3618.32],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData:flooringData
        },

// Cabinet
        {
            position: [-3490.75, 236.11, 3557.53],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: cabinetsData
        },
        {
            position: [4767.34, -1438.1, 345.59],
            pointTo: 0,
            panoramaIndex: 2,
            hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'
        },
        {position: [2422.45, -1064.18, 4237.77], pointTo: 2, panoramaIndex: 0, hoverText: 'KITCHEN LIVING DINING'},
        {position: [4214.16, -938.69, -2508.61], pointTo: 1, panoramaIndex: 0, hoverText: 'GARAGE'},
        {
            position: [4653.19, -1293.66, -1255.49],
            pointTo: 0,
            panoramaIndex: 1,
            hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'
        },
        {
            position: [4945.09, -18.76, 691.7],
            pointTo: 6,
            panoramaIndex: 0,
            arrowUp: true,
            floor: 'first-floor',
            hoverText: 'STAIRS TO THE 2ND LEVEL'
        },
        {
            position: [-377.47, -2910.73, -4044.14],
            pointTo: 0,
            panoramaIndex: 6,
            arrowUp: true,
            floor: 'basement',
            hoverText: 'STAIRS TO THE BASEMENT'
        },

        {position: [-3944.75, -1092.23, -2867.28], pointTo: 4, panoramaIndex: 3, hoverText: 'HALLWAY'},
        {position: [-1671.56, -1820.95, -4336.10], pointTo: 3, panoramaIndex: 4, hoverText: 'BEDROOM 1'},
        {position: [-2836.86, -2040.29, 3563.51], pointTo: 6, panoramaIndex: 4, hoverText: 'HALLWAY 2'},
        {position: [-2245.67, -1923.21, -4028.08], pointTo: 4, panoramaIndex: 6, hoverText: 'HALLWAY'},
        {position: [-2008.23, -1053.31, -4451.25], pointTo: 7, panoramaIndex: 6, hoverText: 'HALLWAY BATHROOM'},
        {position: [-4397.06, -2255.63, -719.76], pointTo: 4, panoramaIndex: 7, hoverText: 'HALLWAY '},
        {position: [2754.37, -2278.29, -3488.25], pointTo: 7, panoramaIndex: 4, hoverText: 'HALLWAY BATHROOM'},
        {position: [-4854.49, -1079.57, -473.11], pointTo: 6, panoramaIndex: 7, hoverText: 'HALLWAY 2'},
        {position: [-4598.75, -1927.29, -271.99], pointTo: 5, panoramaIndex: 4, hoverText: 'BEDROOM 2'},
        {position: [4779.88, -1274.36, -664.69], pointTo: 4, panoramaIndex: 5, hoverText: 'HALLWAY'},
        {position: [3924.77, -2843.90, -1205.13], pointTo: 8, panoramaIndex: 6, hoverText: 'HALLWAY 3'},
        {position: [4116.16, -2609.59, 1093.73], pointTo: 6, panoramaIndex: 8, hoverText: 'HALLWAY 2'},
        {position: [-822.6, -3296.41, 3663.35], pointTo: 9, panoramaIndex: 8, hoverText: 'LAUNDRY'},
        {position: [2279.53, -3006.44, -3272.88], pointTo: 8, panoramaIndex: 9, hoverText: 'HALLWAY 3'},
        {position: [4605.93, -1286.28, -1439.86], pointTo: 10, panoramaIndex: 6, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [-4679.95, -1702.50, -329.22], pointTo: 10, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [4652.86, -1017.83, -1508.94], pointTo: 6, panoramaIndex: 10, hoverText: 'HALLWAY 2'},
        {position: [4570.24, -1397.33, -1452.25], pointTo: 8, panoramaIndex: 10, hoverText: 'HALLWAY 3'},
        {position: [851.73, -1585.63, 4657.94], pointTo: 11, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2557.85, -951.05, 4179.26], pointTo: 14, panoramaIndex: 10, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [-2601.3, -2376.44, -3541.58], pointTo: 10, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [4448.65, -2253.95, 262.58], pointTo: 12, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [4551.17, -1641.90, 1224.84], pointTo: 14, panoramaIndex: 11, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [4713.58, -1332.85, -978.00], pointTo: 13, panoramaIndex: 11, hoverText: 'MASTER BEDROOM CLOSED'},
        {position: [-4350.37, -1041.30, -2211.49], pointTo: 10, panoramaIndex: 12, hoverText: 'MASTER BEDROOM VIEW1'},
        {position: [-4506.57, -2150.25, 69.48], pointTo: 11, panoramaIndex: 12, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2183.78, -2574.50, -3683.49], pointTo: 13, panoramaIndex: 12, hoverText: 'MASTER BEDROOM CLOSED'},
        {position: [2772.55, -3826.14, 1628.59], pointTo: 14, panoramaIndex: 12, hoverText: 'MASTER BEDROOM BATHROOM'},
        {position: [535.55, -2828.41, -4079.73], pointTo: 12, panoramaIndex: 14, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [98.89, -1575.87, -4738.74], pointTo: 11, panoramaIndex: 14, hoverText: 'MASTER BEDROOM VIEW2'},
        {position: [2209.86, -1120.79, 4333.48], pointTo: 12, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW3'},
        {position: [3007.7, -2284.48, -3272.55], pointTo: 12, panoramaIndex: 13, hoverText: 'MASTER BEDROOM VIEW3'},
    ],
    panoramas: [
        {panorama: new ImagePanorama(basement_210), initialView: [3717.78, -1138.01, 3143.73]},   // ENTRY STAIRS TO THE 2ND LEVEL
        {panorama: new ImagePanorama(basement_213), initialView: [2997.2, -1474.13, -3720.71]},   // GARAGE
        {panorama: new ImagePanorama(basement_212), initialView: [-3051.69, -1365.7, 3717.8]},   // KITCHEN LIVING DINING
        {panorama: new ImagePanorama(bedroom2), initialView: [4853.41, -1201.69, -19.22]},       // BEDROOM 2
        {panorama: new ImagePanorama(hallway3), initialView: [-3923.36, -1436.74, -2746.45]},       // HALLWAY 3
        {panorama: new ImagePanorama(bedroom1), initialView: [-4425.41, -1165.06, -2014.54]},       // BEDROOM 1
        {panorama: new ImagePanorama(hallway1), initialView: [-430.29, -1073.29, -4864.45]},       // HALLWAY 1
        {panorama: new ImagePanorama(hallwayBathroom), initialView: [4619.74, -1864.84, 424.74]},// HALLWAY BATHROOM
        {panorama: new ImagePanorama(hallway2), initialView: [-4892.47, -758.3, 699.1]},       // HALLWAY 2
        {panorama: new ImagePanorama(laundry), initialView: [-3901.16, -2763.47, -1464.31]},        // LAUNDRY
        {panorama: new ImagePanorama(MBView1), initialView: [769.86, -720.9, 4887.5]},        // MASTER BEDROOM VIEW 1
        {panorama: new ImagePanorama(MBView2), initialView: [3237.08, -1492.15, -3506.39]},        // MASTER BEDROOM VIEW 2
        {panorama: new ImagePanorama(MBView3), initialView: [-4579.52, -795.52, -1842.6]},        // MASTER BEDROOM VIEW 3
        {panorama: new ImagePanorama(MBClosed), initialView: [-3143.74, -925.52, 3776.29]},       // MASTER BEDROOM CLOSED
        {panorama: new ImagePanorama(bathroomMR), initialView: [-1184.46, -1437.97, 4639.97]},     // BATHROOM MASTER
    ],

    floors: [
        {
            defaultPanorama: 6,
            value: 'first-floor',
            title: 'First floor',
            img: plan,
            dotPosition: [
                {top: 43, left: 30, pointTo: 3, hoverText: 'BEDROOM 1'},
                {top: 82, left: 64, pointTo: 4, hoverText: 'HALLWAY'},
                {top: 43, left: 90, pointTo: 5, hoverText: 'BEDROOM 2'},
                {top: 89, left: 110, pointTo: 6, hoverText: 'HALLWAY 2'},
                {top: 82, left: 24, pointTo: 7, hoverText: 'HALLWAY BATHROOM'},
                {top: 116, left: 110, pointTo: 8, hoverText: 'HALLWAY BATHROOM'},
                {top: 125, left: 87, pointTo: 9, hoverText: 'LAUNDRY'},
                {top: 181, left: 110, pointTo: 10, hoverText: 'MASTER BEDROOM VIEW1'},
                {top: 187, left: 64, pointTo: 11, hoverText: 'MASTER BEDROOM VIEW2'},
                {top: 171, left: 45, pointTo: 12, hoverText: 'MASTER BEDROOM VIEW3'},
                {top: 133, left: 52, pointTo: 13, hoverText: 'MASTER BEDROOM CLOSED'},
                {top: 159, left: 19, pointTo: 14, hoverText: 'MASTER BEDROOM BATHROOM'},
            ]
        },
        {
            defaultPanorama: 0,
            value: 'basement',
            title: 'Basement',
            img: plan2,
            dotPosition: [
                {top: 104, left: 13, pointTo: 0, hoverText: 'ENTRY STAIRS TO THE 2ND LEVEL'},
                {top: 170, left: 79, pointTo: 1, hoverText: 'GARAGE'},
                {top: 42, left: 62, pointTo: 2, hoverText: 'KITCHEN LIVING DINING'},
            ]
        },
    ],
    rooms: {
        0: "ENTRY STAIRS TO THE 2ND LEVEL",
        1: "GARAGE",
        2: "KITCHEN LIVING DINING",
        3: "BEDROOM 1",
        4: "HALLWAY",
        5: "BEDROOM 2",
        6: "HALLWAY",
        7: "HALLWAY BATHROOM",
        8: "HALLWAY",
        9: "LAUNDRY",
        10: "MASTER BEDROOM",
        11: "MASTER BEDROOM",
        12: "MASTER BEDROOM",
        13: "MB CLOSED",
        14: "MB BATHROOM",
    },
    options: [
        {value: 'basement', label: 'BASEMENT'},
        {value: 'first-floor', label: 'FIRST FLOOR'},
    ],
}
