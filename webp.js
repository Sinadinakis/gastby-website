/*
* Transform images from .jpg to .webp format 
* Run script with 'node webp.js'
*/
const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

(async () => {
	await imagemin(['./src/assets/images/*.{jpg,png}'], {
		destination: './src/assets/images',
		plugins: [
			imageminWebp({quality: 50})
		]
	});
})();