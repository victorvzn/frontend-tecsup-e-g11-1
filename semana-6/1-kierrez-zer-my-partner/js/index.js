'use strict';

const documentReady = () => {
  const yesButton = document.getElementById('yesButton');
  const noButton = document.getElementById('noButton');

  const getPartner = () => {
    alert('💞 NoW ZoMoS PartNer 💞');
    alert('♥ U Me DaZ LuZ & EsPerrAnZa A My Laif ♥');
    alert('😱 OuR VoDa Is MaÑaNa 😱');
    location.href = 'https://youtu.be/mos84UqOU3M?t=53';
  };

  const brokenHeart = () => {
    noButton.style.top = Math.random() * innerHeight + 'px';
    noButton.style.left = Math.random() * innerWidth + 'px';
  };

  yesButton.addEventListener('click', getPartner);
  noButton.addEventListener('mouseover', brokenHeart);
};

document.addEventListener('DOMContentLoaded', documentReady);