import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function DisplayBox({ text, textColor, backgroundColor, font, fontSize }) {
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
                         .style('font-family', font)
                         .style('fill', textColor)
                         .style('font-size', `${fontSize}px`); // Apply font size

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

    console.log("DisplayBox updated with new text, color, font, and font size.");

  }, [text, textColor, backgroundColor, font, fontSize]); // Add fontSize to the dependency array

  return (
    <svg ref={svgRef} style={{ width: '100%', height: '500px', backgroundColor: backgroundColor }} xmlns="http://www.w3.org/2000/svg">
    </svg>
  );
}

export default DisplayBox;