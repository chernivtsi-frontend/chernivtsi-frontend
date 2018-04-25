'use strict';

var data = { title: "ChernivtsiJS",
  description: "Let's talk about JavaScript?",
  date: "June 23, 2018",
  action: { link: "https://2event.com/events/1384395",
    title: "Buy Tickets" },
  place: { adress: "Chernivtsi National University, <br> Kotsyubyns'koho St, 2 <br> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.297188,
      longitude: 25.9242539 } },
  navigation: [{ link: "/code-of-conduct",
    title: "Code Of Conduct" }, { link: "/city-guide",
    title: "City Guide" }, { link: "/2017",
    title: 2017 }],
  social: [{ link: "//telegram.me/joinchat/Bq7KYT8X1sdwJ5WB8k-kOg",
    icon: "/images/icons/telegram.png" }, { link: "//www.facebook.com/chernivtsijs",
    icon: "/images/icons/facebook.png" }, { link: "//twitter.com/chernivtsijs",
    icon: "/images/icons/twitter.png" }, { link: "//instagram.com/chernivtsijs",
    icon: "/images/icons/instagram.png" }, { link: "//github.com/chernivtsijs",
    icon: "/images/icons/github.png" }],
  speakers: [{ name: "Alex Migutsky",
    photo: "/images/speakers/alex-migutsky.jpg",
    work: "Microsoft, Berlin, Germany",
    topic: "How Microsoft uses React in their products",
    lightning: false }, { name: "Aleksandar Simovic",
    photo: "/images/speakers/aleksandar-simovic.jpg",
    work: "Effortless Serverless, Belgrade, Serbia",
    topic: "Serverless for frontend developers",
    lightning: false }, { name: "Vasilika Klimova",
    photo: "/images/speakers/vasilika-klimova.jpg",
    work: "Artec3D, Gostingen, Luxembourg",
    topic: "This terrible word Deadline",
    lightning: false }, { name: "Ivan Jovanović",
    photo: "/images/speakers/ivan-jovanovic.jpg",
    work: "nearForm, Belgrade, Serbia",
    topic: "Thinking Reactive in JavaScript",
    lightning: false }, { name: "Sergey Rubanov",
    photo: "/images/speakers/sergey-rubanov.jpg",
    work: "Exantech, Oryol, Russia",
    topic: "Просто о WebAssembly",
    lightning: false }, { name: "Anton Nemtsev",
    photo: "./images/speakers/anton-nemtsev.jpg",
    work: "TemplateMonster, Kyiv",
    topic: "Make checkout great again",
    lightning: false }, { name: "Anton Yatseniuk",
    photo: "/images/speakers/anton-yatseniuk.jpg",
    work: "Rolique, Lviv, Ukraine",
    topic: "How to adopt a project with stack which you don't know",
    lightning: false }, { name: "Artem Denysov",
    photo: "/images/speakers/artem-denysov.jpg",
    work: "Vinnytsia, Ukraine",
    topic: "Make your thread grate again!",
    lightning: false }, { name: "Anastasiia Nedbailo",
    photo: "/images/speakers/anastasiia-nedbailo.jpg",
    work: "YUKON, Chernivtsi, Ukraine",
    topic: "Angular applications with Redux",
    lightning: true }],
  partners: { special: [{ name: "AlterEGO",
      logo: "/images/partners/alterego.png",
      link: "//alterego.digital" }, { name: "Chernivtsi National University",
      logo: "/images/partners/chnu.png",
      link: "//chnu.edu.ua" }],
    platinum: [{ name: "Bizico",
      logo: "/images/partners/bizico.svg",
      link: "//bizico.com" }],
    gold: null,
    silver: null },
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["873561355571408896", "873485295160885248", "873569566961565701", "873450367668936704", "852477975811547136", "873485917213913089"],
  contacts: [{ name: "Denys Dovhan",
    email: "denysdovhan@gmail.com",
    fb: "https://www.facebook.com/denysdovhan",
    phone: "+380 (95) 11 00 392" }, { name: "Denis Zavgorodny",
    email: "denis.zavgorodny@gmail.com",
    fb: "https://www.facebook.com/denis.zavgorodny",
    phone: "+380 (50) 76 28 045" }] };

/* eslint no-undef: 0 */
/**
 * Map
 */

var _config$place$coords = data.place.coords;
var latitude = _config$place$coords.latitude;
var longitude = _config$place$coords.longitude;


var map = L.map('embedded-map', {
  scrollWheelZoom: false,
  dragging: !L.Browser.mobile,
  tap: false
}).setView([latitude, longitude], 16);

L.tileLayer(data.place.url, {
  maxZoom: 18,
  id: 'mapbox.streets'
}).addTo(map);

L.marker([latitude, longitude]).addTo(map).openPopup();

/**
 * Tweets from last year
 */

if (data.tweets && data.tweets.length > 0) {
  var tweetsContainer = document.getElementById('tweets-container');

  data.tweets.forEach(function (tweetId) {
    return twttr.widgets.createTweet(tweetId, tweetsContainer, { linkColor: 'red' });
  });
}
