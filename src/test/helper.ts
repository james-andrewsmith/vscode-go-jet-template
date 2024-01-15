export const ConvertToReadableFormat = (uint32Array: any) => {
  const readableArray = [];
  for (let i = 0; i < uint32Array.length; i += 5) {
    readableArray.push({
      lineDelta: uint32Array[i],
      charDelta: uint32Array[i + 1],
      length: uint32Array[i + 2],
      tokenType: uint32Array[i + 3], // You might want to convert this to a string representation
      tokenModifiers: uint32Array[i + 4], // Convert to string if needed
    });
  }
  return readableArray;
};
