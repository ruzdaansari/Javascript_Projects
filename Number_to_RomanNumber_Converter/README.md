# Roman Number Converter

This is a simple web-based application that converts numbers into Roman numerals.

## Features
- Converts numbers (1-4999) into Roman numerals dynamically.
- Displays an error message for out-of-range inputs.
- Minimal and responsive user interface.
- Built with HTML, CSS, and JavaScript.

## Live Demo
You can host the project locally or deploy it to any static hosting service.

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/ruzdaansari/Roman_number_converter.git
   ```
2. Navigate to the project directory:
   ```sh
   cd roman-converter
   ```
3. Open `index.html` in a browser.

## Usage
1. Enter a number in the input field.
2. The corresponding Roman numeral appears instantly.
3. If the number is out of range (less than 1 or greater than 4999), an error message is displayed.

## File Structure
- `index.html` - The main structure of the application.
- `index.css` - Styles for the UI.
- `index.js` - Handles conversion logic and interactions.

## Roman Numeral Conversion Logic
The conversion is based on a mapping of Roman numeral values, iterating from highest to lowest, subtracting from the given number, and appending the corresponding Roman numeral until the number reaches zero.

## Contributing
Feel free to fork this repository and submit pull requests for improvements or new features.

## License
This project is open-source and available under the MIT License.