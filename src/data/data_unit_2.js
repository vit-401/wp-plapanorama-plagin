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


import basement_210 from "../media/unit_2/basement/210.jpg";
import basement_213 from "../media/unit_2/basement/213.jpg";
import basement_212 from "../media/unit_2/basement/212.jpg";

import plan from "../media/unit_2/1_floor/plan.jpg";
import plan2 from "../media/unit_2/basement/plan.jpg";


export const dataUnit2 = {
  title: "Example 01",
  infospotsData: [
    {position: [-3944.75, -1092.23, -2867.28], pointTo: 1, panoramaIndex: 0, hoverText: 'HALLWAY'},
    {position: [-1671.56, -1820.95, -4336.10], pointTo: 0, panoramaIndex: 1, hoverText: 'BEDROOM 1'},
    {position: [-2836.86, -2040.29, 3563.51], pointTo: 3, panoramaIndex: 1, hoverText: 'HALLWAY 2'},
    {position: [-2245.67, -1923.21, -4028.08], pointTo: 1, panoramaIndex: 3, hoverText: 'HALLWAY'},
    {position: [-2008.23, -1053.31, -4451.25], pointTo: 4, panoramaIndex: 3, hoverText: 'HALLWAY BATHROOM'},
    {position: [-4397.06, -2255.63, -719.76], pointTo: 1, panoramaIndex: 4, hoverText: 'HALLWAY '},
    {position: [2754.37, -2278.29, -3488.25], pointTo: 4, panoramaIndex: 1, hoverText: 'HALLWAY BATHROOM'},
    {position: [-4854.49, -1079.57, -473.11], pointTo: 3, panoramaIndex: 4, hoverText: 'HALLWAY 2'},
    {position: [-4598.75, -1927.29, -271.99], pointTo: 2, panoramaIndex: 1, hoverText: 'BEDROOM 2'},
    {position: [4779.88, -1274.36, -664.69], pointTo: 1, panoramaIndex: 2, hoverText: 'HALLWAY'},
    {position: [3924.77, -2843.90, -1205.13], pointTo: 5, panoramaIndex: 3, hoverText: 'HALLWAY 3'},
    {position: [4116.16, -2609.59, 1093.73], pointTo: 3, panoramaIndex: 5, hoverText: 'HALLWAY 2'},
    {position: [-822.6, -3296.41, 3663.35], pointTo: 6, panoramaIndex: 5, hoverText: 'LAUNDRY'},
    {position: [2279.53, -3006.44, -3272.88], pointTo: 5, panoramaIndex: 6, hoverText: 'HALLWAY 3'},
    {position: [4605.93, -1286.28, -1439.86], pointTo: 7, panoramaIndex: 3, hoverText: 'MASTER BEDROOM VIEW1'},
    {position: [-4679.95, -1702.50, -329.22], pointTo: 7, panoramaIndex: 5, hoverText: 'MASTER BEDROOM VIEW1'},
    {position: [4652.86, -1017.83, -1508.94], pointTo: 3, panoramaIndex: 7, hoverText: 'HALLWAY 2'},
    {position: [4570.24, -1397.33, -1452.25], pointTo: 5, panoramaIndex: 7, hoverText: 'HALLWAY 3'},
    {position: [851.73, -1585.63, 4657.94], pointTo: 8, panoramaIndex: 7, hoverText: 'MASTER BEDROOM VIEW2'},
    {position: [2557.85, -951.05, 4179.26], pointTo: 11, panoramaIndex: 7, hoverText: 'MASTER BEDROOM BATHROOM'},
    {position: [-2601.3, -2376.44, -3541.58], pointTo: 7, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW1'},
    {position: [4448.65, -2253.95, 262.58], pointTo: 9, panoramaIndex: 8, hoverText: 'MASTER BEDROOM VIEW3'},
    {position: [4551.17, -1641.90, 1224.84], pointTo: 11, panoramaIndex: 8, hoverText: 'MASTER BEDROOM BATHROOM'},
    {position: [4713.58, -1332.85, -978.00], pointTo: 10, panoramaIndex: 8, hoverText: 'MASTER BEDROOM CLOSED'},
    {position: [-4350.37, -1041.30, -2211.49], pointTo: 7, panoramaIndex: 9, hoverText: 'MASTER BEDROOM VIEW1'},
    {position: [-4506.57, -2150.25, 69.48], pointTo: 8, panoramaIndex: 9, hoverText: 'MASTER BEDROOM VIEW2'},
    {position: [2183.78, -2574.50, -3683.49], pointTo: 10, panoramaIndex: 9, hoverText: 'MASTER BEDROOM CLOSED'},
    {position: [2772.55, -3826.14, 1628.59], pointTo: 11, panoramaIndex: 9, hoverText: 'MASTER BEDROOM BATHROOM'},
    {position: [535.55, -2828.41, -4079.73], pointTo: 9, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW3'},
    {position: [98.89, -1575.87, -4738.74], pointTo: 8, panoramaIndex: 11, hoverText: 'MASTER BEDROOM VIEW2'},
    {position: [2209.86, -1120.79, 4333.48], pointTo: 9, panoramaIndex: 7, hoverText: 'MASTER BEDROOM VIEW3'},
    {position: [3007.7, -2284.48, -3272.55], pointTo: 9, panoramaIndex: 10, hoverText: 'MASTER BEDROOM VIEW3'},
  ],
  panoramas: [
    new ImagePanorama(bedroom2), //0
    new ImagePanorama(hallway3), //1
    new ImagePanorama(bedroom1), //2
    new ImagePanorama(hallway1), //3
    new ImagePanorama(hallwayBathroom), //4
    new ImagePanorama(hallway2), //5
    new ImagePanorama(laundry), //6
    new ImagePanorama(MBView1), //7
    new ImagePanorama(MBView2), //8
    new ImagePanorama(MBView3), //9
    new ImagePanorama(MBClosed), //10
    new ImagePanorama(bathroomMR), //11

    new ImagePanorama(basement_210), //12
    new ImagePanorama(basement_213), //13
    new ImagePanorama(basement_212), //14
  ],

  floors: [
    {
      value: 'first-floor',
      title: 'First floor',
      img: plan,
      dotPosition: [
        {top: 43, left: 30, pointTo: 0, hoverText: 'bedroom 1'},
        {top: 82, left: 64, pointTo: 1, hoverText: 'hallway'},
        {top: 43, left: 90, pointTo: 2, hoverText: 'bedroom 2'},
        {top: 89, left: 110, pointTo: 3, hoverText: 'hallway 2'},
        {top: 82, left: 24, pointTo: 4, hoverText: 'hallway bathroom'},
        {top: 116, left: 110, pointTo: 5, hoverText: 'hallway bathroom'},
        {top: 125, left: 87, pointTo: 6, hoverText: 'laundry'},
        {top: 181, left: 110, pointTo: 7, hoverText: 'master bedroom view1'},
        {top: 187, left: 64, pointTo: 8, hoverText: 'master bedroom view2'},
        {top: 171, left: 45, pointTo: 9, hoverText: 'master bedroom view3'},
        {top: 133, left: 52, pointTo: 10, hoverText: 'master bedroom closed'},
        {top: 159, left: 19, pointTo: 11, hoverText: 'master bedroom bathroom'},
      ]
    },
    {
      defaultPanorama: 0,
      value: 'basement',
      title: 'Basement',
      img: plan2,
      dotPosition: [
        {top: 104, left: 13, pointTo: 12, hoverText: 'bedroom 1'},
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
  ],
}
