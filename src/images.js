import small from '../assets/small.jpeg';
import big from '../assets/big.jpeg';

const br = document.createElement('br');

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);
document.body.appendChild(br);


image = document.createElement('img');
image.src = big;
document.body.appendChild(image);
document.body.appendChild(br);
