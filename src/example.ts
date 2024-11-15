// Create a div element with id 'target' to attach the map to
import './style.css';
const container = document.createElement('div');
container.id = 'target';
container.style.width = '100%';
container.style.height = '100%';
document.querySelector<HTMLDivElement>('#app')!.appendChild(container)


// EXAMPLES

// Example: Importing the class --------------------------------------------------------


// Example: Instantiating the class -----------------------------------------------------
// const view = new StatMapDisplay({
//     id: 'target',
//     country: Country.FINLAND,
//     administrativeLevel: AdministrativeLevel.MUNICIPALITY,
//     resolution: ResolutionLevel.LEVEL_1,
// });


// const downloadLink = document.createElement('a');
// downloadLink.href = URL.createObjectURL(svgBlob);
// downloadLink.download = 'map_export.svg';
// downloadLink.click();

// svgButton.addEventListener('click', () => {
//     const svg = view.getMapSVG();
//     if (svg) {
//         const downloadLink = document.createElement('a');
//         downloadLink.href = URL.createObjectURL(svg);
//         downloadLink.download = 'map_export.svg';
//         downloadLink.click();
//     }
//     else {
//         console.log('SVG not found');
//     }
// });