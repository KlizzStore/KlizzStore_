const WA_NUMBER = "6289668141956";

const hargaGame = {
  ml: [
    ["86 Diamond", 17000],
    ["172 Diamond", 34000]
  ],
  ff: [
    ["70 Diamond", 10000],
    ["140 Diamond", 19000]
  ],
  pubg: [
    ["60 UC", 13000],
    ["325 UC", 65000]
  ],
  roblox: [
    ["80 Robux", 15000],
    ["400 Robux", 75000]
  ],
  hok: [
    ["80 Token", 15000],
    ["240 Token", 45000]
  ]
};

const game = document.getElementById("game");
const paket = document.getElementById("paket");
const playerId = document.getElementById("playerId");
const btn = document.getElementById("orderBtn");

game.addEventListener("change", function() {
  paket.innerHTML = `<option value="">-- Pilih Paket --</option>`;
  
  if (!game.value) return;
  
  const data = hargaGame[game.value];
  if (!data) return;
  
  data.forEach(item => {
    const harga = item[1] + 1000; // admin 1k
    const opt = document.createElement("option");
    opt.value = `${item[0]} - Rp ${harga}`;
    opt.textContent = `${item[0]} - Rp ${harga.toLocaleString()}`;
    paket.appendChild(opt);
  });
});

btn.addEventListener("click", function(e) {
  if (!game.value || !paket.value || !playerId.value.trim()) {
    e.preventDefault();
    alert("Lengkapi data dulu!");
    return;
  }
  
  const gameName = game.options[game.selectedIndex].text;
  
  const pesan =
    `ORDER KLIZZSTORE
Game: ${gameName}
Paket: ${paket.value}
User ID: ${playerId.value}
Admin: Rp1.000`;
  
  btn.href =
    "https://wa.me/" +
    WA_NUMBER +
    "?text=" +
    encodeURIComponent(pesan);
});