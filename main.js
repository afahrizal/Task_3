const isi = document.querySelector('div.isi p')
isi.innerHTML='High-End Samsung Device with Snapdragon 8 Gen 1 and 108MP Rear Camera with Stunning image processing and 10x telephoto zoom. With Smoother video recording at 4K 60FPS and OIS for more stability on recording video. And integrated S-Pen built-in for writing notes or remote control for Camera.'

const tombol = document.querySelector('div.buttonbuy')
const isitombol = document.createElement('a')
isitombol.innerHTML = 'See Details!'
isitombol.setAttribute('href', '#')
tombol.append(isitombol)

tombol.onclick = function () {
    const details = document.getElementById('details')
    details.innerHTML = 'Spesification :<ul><li>5G Network</li><li>IP68 Dust/Water Resistant</li><li>Stylus, 2.8ms latency</li><li>Dynamic AMOLED 2x 120Hz HDR10+</li><li>Snapdragon 8 Gen 1 4nm</li><li>Rear Camera 108MP OIS, 10MP OIS Telephoto, 10MP OIS, 12MP Ultrawide, LED Flash, Auto-HDR. Recording up to 8K @24FPS.</li><li>Front Camera 40MP Wide PDAF, Auto-HDR. Recording up to 4K @30/60FPS.</li><li>Stereo Speaker tuned by AKG.</li></ul>'
}