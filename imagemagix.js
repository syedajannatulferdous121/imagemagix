// ImageMagix class
class ImageMagix {
  constructor(image) {
    this.image = image;
    this.modifications = [];
  }

  resize() {
    const width = prompt("Enter the new width:");
    const height = prompt("Enter the new height:");
    console.log(`Resizing image to ${width}x${height}`);
    // Implementation logic for resizing the image
    this.modifications.push(`Resized to ${width}x${height}`);
  }

  applyFilter() {
    const filter = prompt("Enter the filter to apply:");
    console.log(`Applying ${filter} filter to the image`);
    // Implementation logic for applying the specified filter to the image
    this.modifications.push(`Applied ${filter} filter`);
  }

  crop() {
    const x = prompt("Enter the x-coordinate for cropping:");
    const y = prompt("Enter the y-coordinate for cropping:");
    const width = prompt("Enter the width for cropping:");
    const height = prompt("Enter the height for cropping:");
    console.log(`Cropping image at (${x}, ${y}) with width ${width} and height ${height}`);
    // Implementation logic for cropping the image
    this.modifications.push(`Cropped at (${x}, ${y}) with width ${width} and height ${height}`);
  }

  undoLastModification() {
    if (this.modifications.length > 0) {
      const lastModification = this.modifications.pop();
      console.log(`Undoing last modification: ${lastModification}`);
    } else {
      console.log("No modifications to undo.");
    }
  }

  applyWatermark() {
    const text = prompt("Enter the watermark text:");
    const fontSize = prompt("Enter the font size for the watermark:");
    const x = prompt("Enter the x-coordinate for the watermark:");
    const y = prompt("Enter the y-coordinate for the watermark:");
    console.log(`Applying watermark "${text}" at (${x}, ${y}) with font size ${fontSize}`);
    // Implementation logic for applying a watermark to the image
    this.modifications.push(`Applied watermark: "${text}" at (${x}, ${y}) with font size ${fontSize}`);
  }

  rotate() {
    const degrees = prompt("Enter the number of degrees to rotate:");
    console.log(`Rotating image by ${degrees} degrees`);
    // Implementation logic for rotating the image
    this.modifications.push(`Rotated by ${degrees} degrees`);
  }

  save() {
    console.log("Saving the modified image");
    // Implementation logic for saving the modified image
  }

  viewModifications() {
    console.log("----- Modifications -----");
    this.modifications.forEach((modification, index) => {
      console.log(`${index + 1}. ${modification}`);
    });
    console.log("-------------------------");
  }
}

// Usage example
const imageMagix = new ImageMagix("image.jpg");

while (true) {
  const action = prompt("Enter an action (resize, filter, crop, undo, watermark, rotate, save, view, exit):");

  if (action === "resize") {
    imageMagix.resize();
  } else if (action === "filter") {
    imageMagix.applyFilter();
  } else if (action === "crop") {
    imageMagix.crop();
  } else if (action === "undo") {
    imageMagix.undoLastModification();
  } else if (action === "watermark") {
    imageMagix.applyWatermark();
  } else if (action === "rotate") {
    imageMagix.rotate();
  } else if (action === "save") {
    imageMagix.save();
  } else if (action === "view") {
    imageMagix.viewModifications();
  } else if (action === "exit") {
    console.log("Exiting ImageMagix.");
    break;
  } else {
    console.log("Invalid action. Please try again.");
  }
}
