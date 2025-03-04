export async function parseSVG(svgUrl) {
  const response = await fetch(svgUrl);
  const svgText = await response.text();
  const parser = new DOMParser();

  return parser.parseFromString(svgText, "image/svg+xml");
}

export function encodeSVG(svgDoc) {
  const svgElement = svgDoc.documentElement;
  console.log(svgDoc);
  const svgString = new XMLSerializer().serializeToString(svgElement);

  // Encode as Data URL
  const encodedSVG = encodeURIComponent(svgString)
    .replace(/'/g, "%27")
    .replace(/"/g, "%22");

  return encodedSVG;
  // const dataURL = `url("data:image/svg+xml,${encodedSVG}")`;

  // // Set as background-image
  // element.style.backgroundImage = dataURL;
}
