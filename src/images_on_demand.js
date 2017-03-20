import smallDemand from '../assets/small.jpeg';
import bigDemand from '../assets/big.jpeg';

export default () => {
  const br = document.createElement('br');

  let image = document.createElement('img');
  image.src = smallDemand;
  document.body.appendChild(br);
  document.body.appendChild(image);
  document.body.appendChild(br);


  image = document.createElement('img');
  image.src = bigDemand;
  document.body.appendChild(image);
  document.body.appendChild(br);

}
