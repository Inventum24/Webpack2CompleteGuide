import small from '../assets/small.jpg'
import '../styles/image_viewer.css'

export default () =>
{
    const imageSmall = document.createElement('img');
    imageSmall.src = small;
    document.body.appendChild(imageSmall);
}
