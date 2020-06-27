import './style.css';
import _ from 'lodash';
import Icon from './src/download.jpg';
import fooString from './foo';
import bar from './bar-cjs';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['lolo', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);
  return element;
}

document.body.appendChild(component());