// All conversion values
export const conversionValues = {
  // Conversions for area to square meters
  Area: {
    // Taiwanese
    "坪 - Píng": 400 / 121,
    "畝 - Mǔ": 12000 / 121,
    "分 - Fēn": 117360 / 121,
    "甲 - Jiǎ": 1173600 / 121,
    "犁 - Lí": 5868000 / 121,
    // Foreign
    "平方公尺 - Square Meter": 1,
    "平方英尺 - Square Foot": 0.09290341,
    "英畝 - Acre": 4046.873,
    "公頃 - Hectare": 10000,
  },
  // Conversions for length to meters
  Length: {
    // Taiwanese
    "分 - Fēn": 1 / 330,
    "寸 - Cùn": 1 / 33,
    "尺 - Chǐ": 10 / 33,
    "丈 - Zhàng": 100 / 33,
    // Foreign
    "公尺 - Meter": 1,
    "英寸 - Inch": 0.0254,
    "英尺 - Foot": 0.3048,
    "碼 - Yard": 0.9144,
    "英里 - Mile": 1609.344,
    "公里 - Kilometer": 1000,
  },
  // Conversions for mass to kilograms
  Mass: {
    // Taiwanese
    "釐 - Lí": 3 / 80000,
    "分 - Fēn": 3 / 8000,
    "錢 - Qián": 3 / 800,
    "兩 - Liǎng": 3 / 80,
    "斤 - Jīn": 3 / 5,
    "擔 - Dàn": 60,
    // Foreign
    "公斤 - Kilogram": 1,
    "公克 - Gram": 1 / 1000,
    "盎司 - Ounce": 0.028349523125,
    "磅 - Pound": 0.45359237,
    "噸 - Ton": 907.18474,
    "公噸 - MetricTon": 1000,
  },
};

export function convertMeasure(measure, fromUnit, toUnit, unitType, precision) {
  // Check all arguments provided
  if (!measure || !fromUnit || !toUnit || !unitType) return undefined;

  // Check unit type is a valid type
  if (!conversionValues.hasOwnProperty(unitType)) return undefined;

  // Check units are both from the unitType
  if (
    !conversionValues[unitType].hasOwnProperty(fromUnit) ||
    !conversionValues[unitType].hasOwnProperty(toUnit)
  )
    return undefined;

  // If all is valid, perform the conversion
  const convertedValue =
    measure *
    conversionValues[unitType][fromUnit] *
    (1 / conversionValues[unitType][toUnit]);

  return +convertedValue.toFixed(precision);
}
