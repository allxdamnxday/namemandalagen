import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function DisplayBox({ text, textColor, backgroundColor, fontFamily, fontSize }) {
  const svgRef = useRef();

  useEffect(() => {
    if (!text) {
      console.log("No text provided for DisplayBox.");
      return;
    }

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove(); // Clear SVG content before rendering new

    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;

    // Central pivot point for rotation
    const cx = width / 2;
    const cy = height / 2;

    // Create group for text manipulation
    const textGroup = svg.append('g')
                         .attr('transform', `translate(${cx}, ${cy})`)
                         .style('font-family', fontFamily) // Use fontFamily prop
                         .style('font-size', `${fontSize}px`); // Apply font size

    // Apply text color
    textGroup.style('fill', textColor);

    // Apply background color
    svg.style('background-color', backgroundColor);

    // Original text
    const originalText = textGroup.append('text')
                                   .text(text)
                                   .attr('text-anchor', 'middle')
                                   .attr('dominant-baseline', 'central');

    // Mirrored text
    const mirroredText = textGroup.append('text')
                                  .text(text)
                                  .attr('transform', `scale(-1, 1)`)
                                  .attr('text-anchor', 'middle')
                                  .attr('dominant-baseline', 'central');

    // Rotation and duplication
    for (let i = 0; i < 24; i++) {
      textGroup.append('text')
                .text(text)
                .attr('transform', `rotate(${15 * i}, 0, 0)`)
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'central');

      textGroup.append('text')
                .text(text)
                .attr('transform', `scale(-1, 1) rotate(${15 * i}, 0, 0)`)
                .attr('text-anchor', 'middle')
                .attr('dominant-baseline', 'central');
    }


// After the for loop that creates the text elements
let maxTextLength = 0;
textGroup.selectAll('text').each(function() {
  let textLength = this.getComputedTextLength();
  if (textLength > maxTextLength) {
    maxTextLength = textLength;
  }
});

let radius = maxTextLength / 2 + 5; // Radius of the circle path, reduce the additional space to 5

// Create a static circle
const staticCircle = textGroup.append('circle')
                              .attr('r', radius) // Radius of the circle
                              .attr('fill', 'none') // No fill color
                              .attr('stroke', textColor) // Stroke color same as the text color
                              .attr('stroke-width', 4); // Stroke width

console.log("DisplayBox updated with new text, color, font, font size, and font family.");

    console.log("DisplayBox updated with new text, color, font, font size, and font family.");

  }, [text, textColor, backgroundColor, fontFamily, fontSize]); // Add fontFamily to the dependency array

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '500px' }} xmlns="http://www.w3.org/2000/svg">
    </svg>
  );
}

export default DisplayBox;