import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';
import Logo from '../assets/holberton-logo.jpg';

$('body').append('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

$('#logo').css({
  'background-image': `url(${Logo})`,
  'background-size': '200px 200px',
  width: '200px',
  height: '200px',
});

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));

