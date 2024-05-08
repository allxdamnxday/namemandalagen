import * as d3 from 'd3';

// Utility function to apply a solid color to SVG elements
export const setSolidColor = (element, color) => {
  try {
    element.style('fill', color);
    console.log(`Solid color ${color} applied.`);
  } catch (error) {
    console.error('Error applying solid color:', error.message, error.stack);
  }
};

// Utility function to create and apply a gradient (linear or radial) to SVG elements
export const createApplyGradient = (svg, element, colorConfig) => {
  try {
    const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
    let gradient;

    if (colorConfig.type === 'linear-gradient') {
      gradient = svg.append('defs')
                    .append('linearGradient')
                    .attr('id', gradientId)
                    .attr('x1', '0%').attr('y1', '0%')
                    .attr('x2', '100%').attr('y2', '0%'); // INPUT_REQUIRED {config_description} Adjust gradient direction if needed
    } else if (colorConfig.type === 'radial-gradient') {
      gradient = svg.append('defs')
                    .append('radialGradient')
                    .attr('id', gradientId)
                    .attr('cx', '50%').attr('cy', '50%').attr('r', '50%'); // INPUT_REQUIRED {config_description} Adjust gradient shape if needed
    }

    colorConfig.colors.forEach((color, index) => {
      gradient.append('stop')
              .attr('offset', `${index / (colorConfig.colors.length - 1) * 100}%`)
              .attr('stop-color', color);
    });

    element.style('fill', `url(#${gradientId})`);
    console.log(`${colorConfig.type} with ID ${gradientId} applied.`);
  } catch (error) {
    console.error('Error creating or applying gradient:', error.message, error.stack);
  }
};