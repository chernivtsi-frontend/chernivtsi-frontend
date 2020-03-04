'use strict';

var data = { title: "ChernivtsiJS",
  titleMinJS: "chernivtsi.min.js",
  description: "Let's talk about JavaScript?",
  date: "June 22, 2019",
  action: { link: "https://2event.com/en/events/1662800",
    title: "Buy Tickets" },
  speakesAction: { link: "#speakers",
    ankor: "speakers",
    title: "Our Speakers" },
  actionMin: { link: "https://docs.google.com/forms/d/e/1FAIpQLScGTebKC6xlMubAYkZADmw_Hwaxx5wX_i7J51IJjuhLJUrB5g/viewform",
    title: "Register" },
  place: { adress: "Chernivtsi National University, <br> Kotsyubyns'koho St, 2 <br> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.297188,
      longitude: 25.9242539 } },
  placeMin: { adress: "Belle Vue <br /> Kobylyanska St, 2 <br /> Chernivtsi, Ukraine",
    url: "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    coords: { latitude: 48.291658,
      longitude: 25.935338 } },
  navigation: [{ link: "/code-of-conduct",
    title: "Code Of Conduct" }, { link: "/city-guide",
    title: "City Guide" }, { link: "/archive/2018",
    title: 2018 }, { link: "/archive/2017",
    title: 2017 }],
  social: [{ link: "//t.me/chernivtsijs",
    icon: "/images/icons/telegram.png" }, { link: "//www.facebook.com/chernivtsijs",
    icon: "/images/icons/facebook.png" }, { link: "//twitter.com/chernivtsijs",
    icon: "/images/icons/twitter.png" }, { link: "//instagram.com/chernivtsijs",
    icon: "/images/icons/instagram.png" }, { link: "//github.com/chernivtsijs",
    icon: "/images/icons/github.png" }],
  speakers: [{ name: "Andrey Listochkin",
    photo: "/images/speakers/andrei-listochkin.jpg",
    work: "Wix, Kyiv, Ukraine",
    topic: "🤫 Secret Topic 🤫",
    lightning: false }, { name: "Sasha Shynkevich",
    photo: "/images/speakers/sasha-shynkevich.jpg",
    work: "Minsk, Belarus",
    topic: "Development Standards: A Step-by-step guide to implement it without pain",
    lightning: false }, { name: "Yuriy Artyukh",
    photo: "/images/speakers/yuriy-artyukh.jpg",
    work: "Coderiver, Kyiv, Ukraine",
    topic: "Case of One Animation",
    lightning: false }, { name: "Sergiy Babich",
    photo: "/images/speakers/sergiy-babich.jpg",
    work: "GlobalCSS, Lviv, Ukraine",
    topic: "Як навчитися робити прості речі просто",
    lightning: false }, { name: "Roman Liutikov",
    photo: "/images/speakers/roman-liutikov.jpg",
    work: "Pitch, Kyiv, Ukraine",
    topic: "On Desktop UIs and Web Tech",
    lightning: false }, { name: "Vitalii Rybka",
    photo: "/images/speakers/vitalii-rybka.jpg",
    work: "EPAM, Dnipro, Ukraine",
    topic: "Switching Between Frameworks Without Pain",
    lightning: false }, { name: "Dmitry Barabash",
    photo: "/images/speakers/dima-barabash.jpg",
    work: "Youwe, Kyiv, Ukraine",
    topic: "Как мы строили дизайн систему",
    lightning: false }, { name: "Khrystyna Landvytovych",
    photo: "/images/speakers/khrystyna-landvytovych.jpg",
    work: "ChainSystem, Kyiv, Ukraine",
    topic: "TensorFlow in Action",
    lightning: true }, { name: "Oleksandr Oleksiv",
    photo: "/images/speakers/oleksandr-oleksiv.jpg",
    work: "Scalac, Ternopil, Ukraine",
    topic: "React Hooks",
    lightning: true }],
  schedule: [{ name: "Registration & breakfast",
    time: "9:00-9:50",
    tech: false }, { name: "👋🏻 Opening talk",
    time: "9:00-9:50",
    tech: false }, { name: "Dmytro Barabash",
    topic: "Как мы строили дизайн систему",
    time: "10:00-10:40",
    tech: true }, { name: "Sasha Shynkevich",
    topic: "Development Standards: A Step-by-step guide to implement it without pain",
    time: "10:40-11:20",
    tech: true }, { name: "☕️ Coffeebreak",
    time: "11:20-11:50",
    tech: false }, { name: "🗣 Interview session",
    time: "11:50-12:00",
    tech: false }, { name: "Roman Liutikov",
    topic: "On Desktop UIs and Web Tech",
    time: "12:00-12:40",
    tech: true }, { name: "Vitalii Rybka",
    topic: "Switching Between Frameworks Without Pain",
    time: "12:40-13:20",
    tech: true }, { name: "🍽 Lunch",
    time: "13:20-14:50",
    tech: false }, { name: "Khrystyna Landvytovych",
    topic: "TensorFlow in Action",
    time: "14:50-15:05",
    tech: true }, { name: "Oleksandr Oleksiv",
    topic: "React Hooks",
    time: "15:05-15:20",
    tech: true }, { name: "Yuriy Artyukh",
    topic: "Case of One Animation",
    time: "15:20-16:00",
    tech: true }, { name: "☕️ Coffeebreak",
    time: "16:00-16:30",
    tech: false }, { name: "🗣 Interview session",
    time: "16:30-16:40",
    tech: false }, { name: "Sergiy Babich",
    topic: "Як навчитися робити прості речі просто",
    time: "16:40-17:20",
    tech: true }, { name: "Andrey Listochkin",
    topic: "🤫 Secret Topic 🤫",
    time: "17:20-18:00",
    tech: true }, { name: "🎤 QA-session",
    topic: "Panel discussion with speakers",
    time: "18:00-18:40",
    tech: true }, { name: "🏁 Closing talk",
    time: "18:40-19:00",
    tech: false }, { name: "🍸 Afterparty",
    time: "21:00-∞",
    tech: false }],
  partners: { platinum: [{ name: "Chernivtsi National University",
      logo: "/images/partners/chnu.png",
      link: "//www.chnu.edu.ua" }, { name: "Bizico",
      logo: "/images/partners/bizico.svg",
      link: "//bizico.io/" }],
    gold: [{ name: "AMC Bridge",
      logo: "/images/partners/amc-bridge.png",
      link: "//amcbridge.com.ua/ua" }, { name: "SoftServe",
      logo: "/images/partners/softserve.svg",
      link: "//www.softserveinc.com/" }, { name: "ASD",
      logo: "/images/partners/asd.png",
      link: "//asd-team.com/" }, { name: "Wix Engineering",
      logo: "/images/partners/wix.svg",
      link: "//wix.engineering" }, { name: "ImproveIT",
      logo: "/images/partners/improveit.svg",
      link: "//improveit.solutions" }],
    silver: [{ name: "DOU",
      logo: "/images/partners/dou.png",
      link: "//dou.ua/" }, { name: "Scalac",
      logo: "/images/partners/scalac.png",
      link: "https://scalac.io/" }, { name: "Owlygon",
      logo: "/images/partners/owlygon.png",
      link: "//bohdanov.com" }],
    info: [{ name: "KharkivCSS",
      logo: "/images/partners/kharkivcss.svg",
      link: "http://kharkivcss.org/" }, { name: "FWDays",
      logo: "/images/partners/fwdays.png",
      link: "https://fwdays.com/" }, { name: "KharkivFrontend",
      logo: "/images/partners/kharkivfrontend.png",
      link: "//kharkivfrontend.org/" }, { name: "Kottans",
      logo: "/images/partners/kottans.png",
      link: "//kottans.org/" }, { name: "OdessaJS",
      logo: "/images/partners/odessajs.svg",
      link: "//odessajs.org" }, { name: "KyivJS",
      logo: "/images/partners/kyivjs.svg",
      link: "//kyivjs.org" }, { name: "Zlit",
      logo: "/images/partners/zlit.png",
      link: "//zlit.events" }, { name: "OdessaFrontend",
      logo: "/images/partners/odessafrontend.svg",
      link: "//odessafrontend.org/" }, { name: "BeerJS Kyiv",
      logo: "/images/partners/beerjskyiv.png",
      link: "//www.meetup.com/BeerJSKyiv" }, { name: "<Input />",
      logo: "/images/partners/input-conf.png",
      link: "//inputconf.org/" }, { name: "TernopilJS",
      logo: "/images/partners/ternopiljs.png",
      link: "//youtube.com/c/ternopiljs" }, { name: "TechMagic",
      logo: "/images/partners/tech_magic.svg",
      link: "https://www.techmagic.co/" }, { name: "FrontSpot",
      logo: "/images/partners/frontspot.png",
      link: "//www.facebook.com/groups/FrontSpot" }, { name: "Відділ комп’ютерних технологій ІФТКН ЧНУ",
      logo: "/images/partners/dct.png",
      link: "//ptcsi.chnu.edu.ua" }, { name: "NodeSchool Chernivtsi",
      logo: "/images/partners/nodeschool.png",
      link: "//nodeschool.io/chernivtsi" }, { name: "Ivano-Frankivsk IT-cluster",
      logo: "/images/partners/if-cluster.png",
      link: "//it-cluster.if.ua" }, { name: "Vinnytsia JavaScript Community",
      logo: "/images/partners/vinjs-community.png",
      link: "//t.me/joinchat/JDqM1A9BbYqG5OsdsrP9RA?fbclid=IwAR0uygUKJ1U4m9fsf8soKlGivXC6UiHd1uTk2YYCIYKCLjIhPDPB_GcSQbs" }, { name: "VinnytsiaJS",
      logo: "/images/partners/vinjs.png",
      link: "//vinnytsiajs.org/" }, { name: "InventorSoft",
      logo: "/images/partners/inventor-soft.svg",
      link: "//inventorsoft.co/" }, { name: "BeerJS Zhytomyr",
      logo: "/images/partners/zhytomyr-beerjs.jpg",
      link: "//www.facebook.com/groups/beerJSZhytomyr/" }, { name: "Nexteum",
      logo: "/images/partners/nexteum.png",
      link: "//nexteum.com/" }, { name: "css-minsk-js",
      logo: "/images/partners/css-minsk-js-logo-2019.svg",
      link: "//css-minsk-js.by" }] },
  venue: ["/images/venue/1.jpg", "/images/venue/2.jpg", "/images/venue/3.jpg", "/images/venue/4.jpg", "/images/venue/5.jpg"],
  tweets: ["1010494117187588098", "873981443910840322", "1010640903357247488"],
  contacts: [{ name: "Denys Dovhan",
    email: "denysdovhan@gmail.com",
    fb: "https://www.facebook.com/denysdovhan",
    phone: "+380 (95) 11 00 392" }, { name: "Denis Zavgorodny",
    email: "denis.zavgorodny@gmail.com",
    fb: "https://www.facebook.com/denis.zavgorodny",
    phone: "+380 (50) 76 28 045" }],
  speakersMin: [{ name: "Anastasiia Nedbailo",
    photo: "/images/min.js/2019/Anastasiia_Nedbailo.jpg",
    work: "Ukraine, Chernivtsi",
    topic: "Secret topic",
    lightning: false }, { name: "Denys Mohylin",
    photo: "/images/min.js/2019/Denys_Mohylin.jpg",
    work: "Ukraine, Chernivtsi",
    topic: "Your architectural hell",
    lightning: false }, { name: "Denis Zavgorodny",
    photo: "/images/min.js/2019/Denis_Zavgorodny.jpg",
    work: "Ukraine, Kyiv",
    topic: "What about Biometric and U2F Token Web Authentication?",
    lightning: false }, { name: "Denys Dovhan",
    photo: "/images/min.js/2019/denys_dovhan.jpg",
    work: "Ukraine, Kyiv",
    topic: "Як писати пет-проекти",
    lightning: false }],
  scheduleMin: [{ name: "Registration",
    time: "11:30-12:00",
    tech: true }, { name: "👋🏻 Opening talk",
    time: "12:00-12:05",
    tech: true }, { name: "🗣 First talks section",
    time: "12:05-13:45",
    tech: true }, { name: "☕️ Break",
    time: "13:45-15:00",
    tech: true }, { name: "🗣 Second talks section",
    time: "15:00-17:00",
    tech: true }, { name: "🏁 Closing talk",
    time: "17:00-17:20",
    tech: true }, { name: "🍸 Afterparty",
    time: "20:00-∞",
    tech: true }],
  assets: [{ version: 1 }] };

/* eslint no-undef: 0 */
/**
 * Map
 */

var _config$place$coords = data.place.coords;
var latitude = _config$place$coords.latitude;
var longitude = _config$place$coords.longitude;
var _config$placeMin$coor = data.placeMin.coords;
var latitudeMin = _config$placeMin$coor.latitude;
var longitudeMin = _config$placeMin$coor.longitude;

if (document.body.querySelector('#embedded-map')) {
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
}

if (document.body.querySelector('#embedded-map-min')) {
    var mapMin = L.map('embedded-map-min', {
        scrollWheelZoom: false,
        dragging: !L.Browser.mobile,
        tap: false
    }).setView([latitudeMin, longitudeMin], 16);

    L.tileLayer(data.placeMin.url, {
        maxZoom: 20,
        id: 'mapbox.streets'
    }).addTo(mapMin);

    L.marker([latitudeMin, longitudeMin]).addTo(mapMin).openPopup();
}

/**
 * Tweets from last year
 */

if (data.tweets && data.tweets.length > 0) {
    var tweetsContainer = document.getElementById('tweets-container');

    data.tweets.forEach(function (tweetId) {
        return twttr.widgets.createTweet(tweetId, tweetsContainer, { linkColor: 'red' });
    });
}
