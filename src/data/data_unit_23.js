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
import {
    bathroomLighting,
    bedroomLighting, cabinetsData,
    carpet, closets, countertop,
    countertopsData,
    doors, faucets,
    flooringData, garageLighting,
    hardwood, hvac, kitchenPackageData,
    lightsData, microwaveData, mirrors, ovenData,
    plumbing,
    rails, refrigeratorsData, showers, sinks, toilets, washer
} from "./data_options";


export const dataUnit23 = {
    title: "Alpine",
    infospotsData: [
        {
            position: [4716.61, 944.17, -1327.56],
            panoramaIndex: 4,
            hoverText: '',
            isItPopup: true,
            popupData: [
                { category: "HVAC", data: hvac }
            ]
        },
        {
            position: [4047.41, 1462.54, -2529.33],
            panoramaIndex: 3,
            hoverText: '',
            isItPopup: true,
            popupData: [
                { category: "HVAC", data: hvac }
            ]
        },

        {
            position: [-2881.14, 801.02, 4004.85],
            panoramaIndex: 2,
            hoverText: '',
            isItPopup: true,
            popupData: [
                { category: "Lighting", data: garageLighting }
            ]
        },

            {
                position: [-2283.9, -1288.62, -4247.02],
                panoramaIndex: 7,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [-645.05, 2733.76, -4126.34],
                panoramaIndex: 7,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bedroomLighting }]
            },
            {
                position: [-3612.75, -3365.15, 765.22],
                panoramaIndex: 7,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: carpet }]
            },
            {
                position: [3902.68, 1433.72, -2767.09],
                panoramaIndex: 7,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "HVAC", data: hvac }]
            },
            {
                position: [453.3, -2324.64, 4400.65],
                panoramaIndex: 8,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Closet", data: closets }]
            },
            {
                position: [732.79, -2539.54, -4235.67],
                panoramaIndex: 8,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Closet", data: closets }]
            },
        {
            position: [3564.43, -3430.49, 684.74],
            panoramaIndex: 8,
            hoverText: '',
            isItPopup: true,
            popupData: [{ category: "Flooring", data: hardwood }]
        },
            {
                position: [-2665.82, -4227.4, -4.9],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: hardwood }]
            },

            {
                position: [-1569.5, -3053.82, 3627.57],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Sinks", data: sinks }]
            },
            {
                position: [150.92, -2458.11, 4341.75],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [
                    {category:"Faucets", data: faucets},
                ]
            },
            {
                position: [186.2, 2414.59, 4364.27],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bathroomLighting }]
            },
            {
                position: [-1744.88, -379.25, 4662.65],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Mirror", data: mirrors }]
            },
            {
                position: [3001.52, -3223.84, 2355.91],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Toilet", data: toilets }]
            },
            {
                position: [-2645.51, -2376.7, -3505.59],
                panoramaIndex: 9,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Shower", data: showers }]
            },



            {
                position: [-4601.69, -1103.64, -1595.47],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: countertopsData
            },
            {
                position: [-4836.3, -823.85, -937.37],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: kitchenPackageData
            },
            {
                position: [-4438.91, -722.32, -2166.69],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: ovenData
            },
            {
                position: [-2832.11, -2670.43, -3134.04],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: flooringData
            },
            {
                position: [-4441.53, 8.6, -2280.61],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: microwaveData
            },
            {
                position: [-4048.74, 282.67, -2912.94],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: cabinetsData
            },
            {
                position: [-2146.44, 1692.48, -4175.05],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: lightsData
            },
            {
                position: [-3407.96, -854.69, -3546.11],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: refrigeratorsData
            },
            {
                position: [-4891.91, -618.85, 762.61],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Rails", data: rails }]
            },
            {
                position: [-4245.03, -1708.78, 1995.87],
                panoramaIndex: 14,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Carpet", data: carpet }]
            },
            {
                position: [2841.73, -3934.93, -1176.04],
                panoramaIndex: 10,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Carpet", data: carpet }]
            },
            {
                position: [4951.79, -523.99, 328.43],
                panoramaIndex: 10,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [-143.09, -4288.46, 2559.89],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: hardwood }]
            },
            {
                position: [997.61, -2384.15, 4272.44],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Toilet", data: toilets }]
            },
            {
                position: [556.51, -737.55, 4910.34],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Shower", data: showers }]
            },
            {
                position: [-2141.82, -2533.56, 3736.38],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [3982.6, -3011.97, -93.51],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: carpet }]
            },
            {
                position: [954.33, -3017.96, -3861.91],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Washer", data: washer }]
            },
            {
                position: [4711.06, 1523.55, -650.57],
                panoramaIndex: 11,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bathroomLighting }]
            },
            {
                position: [1086.53, -3617.01, 3270.52],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Sinks", data: sinks }]
            },
            {
                position: [759.86, -2452.48, 4280.68],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [
                    {category:"Faucets", data: faucets},
                ]
            },
            {
                position: [322.01, -808.98, 4916.23],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Mirror", data: mirrors }]
            },
            {
                position: [-2269.04, -3966.02, 2020.72],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Toilet", data: toilets }]
            },
            {
                position: [-4263.79, -2079.97, 1550.92],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Shower", data: showers }]
            },
            {
                position: [807.58, 2685.15, 4133.43],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bathroomLighting }]
            },
            {
                position: [4416.7, -2026.12, 1139.72],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Washer", data: washer }]
            },
            {
                position: [911.38, -4911.26, 111.17],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: hardwood }]
            },
            {
                position: [3008.44, -3931.55, 667.61],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: carpet }]
            },
            {
                position: [2853.12, -3551.36, -2057.82],
                panoramaIndex: 12,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [-3936.88, 990.71, -2909.04],
                panoramaIndex: 13,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "HVAC", data: hvac }]
            },
            {
                position: [-3908.79, 3092.76, -286.8],
                panoramaIndex: 13,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bedroomLighting }]
            },
            {
                position: [-876.85, -3953.7, 2923.32],
                panoramaIndex: 13,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: carpet }]
            },
            {
                position: [896.8, -2586.45, 4182.32],
                panoramaIndex: 13,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [4681.99, -1710.58, 233.43],
                panoramaIndex: 13,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Closet", data: closets }]
            },


            {
                position: [-4445.27, -433.82, -2229.3],
                panoramaIndex: 0,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Rails", data: rails }]
            },
            {
                position: [-1278.59, -4824.03, -234.49],
                panoramaIndex: 0,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: hardwood }]
            },
            {
                position: [-1641.59, -2819.22, -3782.35],
                panoramaIndex: 0,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [-4457.32, -1928.19, -1162.29],
                panoramaIndex: 0,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: carpet }]
            },
            {
                position: [4910.19, 871.26, -201.01],
                panoramaIndex: 1,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: garageLighting }]
            },
            {
                position: [1896.29, -4507.84, -1019.52],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData: flooringData
            },
            {
                position: [4760.18, -1474.89, -284.32],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData:countertopsData
            },
            {
                position: [4727.78, -914.83, 1308.38],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData:kitchenPackageData
            },
            {
                position: [4922.81, 22.73, -831.39],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData: microwaveData
            },
            {
                position: [4873.71, -801.85, -729.09],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData:ovenData
            },
            {
                position: [4367.07, 215.96, -2408.83],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData: cabinetsData
            },
            {
                position: [4696.99, 1658.02, -317.36],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData:lightsData
            },
            {
                position: [4940.78, -428.88, 597.55],
                panoramaIndex: 5,
                hoverText: '',
                isItPopup: true,
                popupData: refrigeratorsData
            },
            {
                position: [3790.25, -2909.51, -1452.89],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: countertopsData
            },
            {
                position: [4648.43, -1770.21, -454.16],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData:kitchenPackageData
            },
            {
                position: [3101.16, -1856.27, 3451.73],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: ovenData
            },
            {
                position: [4017.6, -2179.01, 2006.84],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: flooringData
            },
            {
                position: [2916.61, 105.22, 4054.65],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: microwaveData
            },
            {
                position: [1372.79, 623.37, 4757.24],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: cabinetsData
            },
            {
                position: [4027.49, 1574.5, 2497.41],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: lightsData
            },
            {
                position: [-1778.76, -2438.16, 3981.25],
                panoramaIndex: 3,
                hoverText: '',
                isItPopup: true,
                popupData: refrigeratorsData
            },
            {
                position: [4197.09, -1248.82, -2406.6],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: countertopsData
            },
            {
                position: [4211.02, -760.32, -2575.28],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: kitchenPackageData
            },
            {
                position: [2655.2, -1558.09, -3932.23],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: ovenData
            },
            {
                position: [2570.52, -2898.14, -3151.37],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: flooringData
            },
            {
                position: [2298.17, 92.09, -4428.91],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: microwaveData
            },
            {
                position: [1451.54, 364.24, -4765.55],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: cabinetsData
            },
            {
                position: [3205.06, 1108.5, -3667.06],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: lightsData
            },
            {
                position: [2631.64, -367.64, -4227.44],
                panoramaIndex: 4,
                hoverText: '',
                isItPopup: true,
                popupData: refrigeratorsData
            },
            {
                position: [-3442.07, -3194.67, -1698.94],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Sinks", data: sinks }]
            },
            {
                position: [-3726.04, -2789.65, -1804.48],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [
                    {category:"Faucets", data: faucets},
                ]
            },
            {
                position: [-4548.78, -960.69, -1812.56],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Mirrors", data: mirrors }]
            },
            {
                position: [-4137.64, 2093.6, -1857.86],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Lighting", data: bathroomLighting }]
            },
            {
                position: [2323.56, -4228.55, 1300.45],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Doors", data: doors }]
            },
            {
                position: [-482.46, -4648.29, 1767.97],
                panoramaIndex: 6,
                hoverText: '',
                isItPopup: true,
                popupData: [{ category: "Flooring", data: hardwood }]
            },


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
        {
            position: [-4685.89, -93.59, 1715.61],
            pointTo: 10,
            panoramaIndex: 14,
            arrowUp: true,
            floor: 'second-floor',
            hoverText: 'HALLWAY'
        },
        {
            position: [3354.22, -3554.3, 1045.06],
            pointTo: 14,
            panoramaIndex: 10,
            arrowUp: true,
            floor: 'first-floor',
            hoverText: 'LIVING ROOM'
        },
    ],
    panoramas: [
        {panorama: new ImagePanorama(floor1_245), initialView: [-2864.47, -1934.64, -3612.76]}, // STAIRS
        {panorama: new ImagePanorama(floor1_246), initialView: [4913.6, -925.47, 0.66]}, // GARAGE
        {panorama: new ImagePanorama(floor1_247), initialView: [-3159.35, -776.94, 3796.69]}, // GARAGE

        {panorama: new ImagePanorama(floor2_241), initialView: [-3179.95, -1183.42, -3672.53]}, // KITCHEN-ROOM
        {panorama: new ImagePanorama(floor2_242), initialView: [3438.49, -2653.37, 2477.18]}, // LIVING-ROOM
        {panorama: new ImagePanorama(floor2_243), initialView: [4162.48, -1864.9, -2048.39]}, // DOWN STAIRS
        {panorama: new ImagePanorama(floor2_244), initialView: [-4478.92, -2158.04, -531.15]}, // BATHROOM

        {panorama: new ImagePanorama(floor3_233), initialView: [-2855.05, -1917.16, -3629.49]}, // MASTER BEDROOM
        {panorama: new ImagePanorama(floor3_234), initialView: [3528.14, -2376.44, 2627.69]}, // MASTER BEDROOM-CLOSED
        {panorama: new ImagePanorama(floor3_235), initialView: [-684.46, -2508.01, 4270.99]}, // BATHROOM
        {panorama: new ImagePanorama(floor3_236), initialView: [-660.02, -2003.93, -4533.06]}, // HALLWAY
        {panorama: new ImagePanorama(floor3_237), initialView: [-2434.95, -2605.28, 3504.79]}, // HALLWAY
        {panorama: new ImagePanorama(floor3_238), initialView: [-899.09, -1986.52, 4499.48]}, // BATHROOM
        {panorama: new ImagePanorama(floor3_239), initialView: [-3832.14, -2208.9, -2331.4]}, // MASTER-BEDROOM

        {panorama: new ImagePanorama(floor2_240), initialView: [-4934.42, -795.5, 136.6]}, // LIVING-ROOM
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
