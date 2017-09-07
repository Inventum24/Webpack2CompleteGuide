import big from '../assets/big.jpg'
import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

// const image = document.createElement('img');
// image.src = 'http://lorempixel.com/400/400';
// document.body.appendChild(image);

const imageSmall = document.createElement('img');
imageSmall.src = small;
document.body.appendChild(imageSmall);

const imageBig = document.createElement('img');
imageBig.src = big;
document.body.appendChild(imageBig);