import sum from './sum';
import '../styles/image.css';
// import './images';


console.log(sum(1, 2));

function loadImages() {
  System.import( './images_on_demand' ).then(module => {
    module.default();
  });
}

const br = document.createElement('br');
const button = document.createElement('button');
button.innerText = "Click to load images";
button.addEventListener('click', loadImages);
document.body.appendChild(button);
document.body.appendChild(br);

