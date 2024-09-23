export const mapFloorsToSelectOptions = (floors) => {
  return floors.map(floor => ({
    value: floor.pointTo,
    label: floor.hoverText
  }));
};