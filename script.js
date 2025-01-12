// Hiragana characters
const hiragana = [
  { char: "あ", romaji: "a" }, { char: "い", romaji: "i" }, { char: "う", romaji: "u" },
  { char: "え", romaji: "e" }, { char: "お", romaji: "o" }, { char: "か", romaji: "ka" },
  { char: "き", romaji: "ki" }, { char: "く", romaji: "ku" }, { char: "け", romaji: "ke" },
  { char: "こ", romaji: "ko" }, { char: "さ", romaji: "sa" }, { char: "し", romaji: "shi" },
  { char: "す", romaji: "su" }, { char: "せ", romaji: "se" }, { char: "そ", romaji: "so" },
  { char: "た", romaji: "ta" }, { char: "ち", romaji: "chi" }, { char: "つ", romaji: "tsu" },
  { char: "て", romaji: "te" }, { char: "と", romaji: "to" }, { char: "な", romaji: "na" },
  { char: "に", romaji: "ni" }, { char: "ぬ", romaji: "nu" }, { char: "ね", romaji: "ne" },
  { char: "の", romaji: "no" }, { char: "は", romaji: "ha" }, { char: "ひ", romaji: "hi" },
  { char: "ふ", romaji: "fu" }, { char: "へ", romaji: "he" }, { char: "ほ", romaji: "ho" },
  { char: "ま", romaji: "ma" }, { char: "み", romaji: "mi" }, { char: "む", romaji: "mu" },
  { char: "め", romaji: "me" }, { char: "も", romaji: "mo" }, { char: "や", romaji: "ya" },
  { char: "ゆ", romaji: "yu" }, { char: "よ", romaji: "yo" }, { char: "ら", romaji: "ra" },
  { char: "り", romaji: "ri" }, { char: "る", romaji: "ru" }, { char: "れ", romaji: "re" },
  { char: "ろ", romaji: "ro" }, { char: "わ", romaji: "wa" }, { char: "を", romaji: "wo" },
  { char: "ん", romaji: "n" }
];

// Kanji characters
const kanji = [
  { char: "一", romaji: "ichi", meaning: "one" },
  { char: "二", romaji: "ni", meaning: "two" },
  { char: "三", romaji: "san", meaning: "three" },
  { char: "四", romaji: "shi", meaning: "four" },
  { char: "五", romaji: "go", meaning: "five" },
  { char: "六", romaji: "roku", meaning: "six" },
  { char: "七", romaji: "shichi", meaning: "seven" },
  { char: "八", romaji: "hachi", meaning: "eight" },
  { char: "九", romaji: "kyuu", meaning: "nine" },
  { char: "十", romaji: "juu", meaning: "ten" },
  { char: "百", romaji: "hyaku", meaning: "hundred" },
  { char: "千", romaji: "sen", meaning: "thousand" },
  { char: "万", romaji: "man", meaning: "ten thousand" },
  { char: "父", romaji: "chichi", meaning: "father" },
  { char: "母", romaji: "haha", meaning: "mother" },
  { char: "友", romaji: "tomo", meaning: "friend" },
  { char: "女", romaji: "onna", meaning: "woman" },
  { char: "男", romaji: "otoko", meaning: "man" },
  { char: "人", romaji: "hito", meaning: "person" },
  { char: "子", romaji: "ko", meaning: "child" },
  { char: "日", romaji: "hi", meaning: "sun, day" },
  { char: "月", romaji: "tsuki", meaning: "moon, month" },
  { char: "火", romaji: "hi", meaning: "fire" },
  { char: "水", romaji: "mizu", meaning: "water" },
  { char: "木", romaji: "ki", meaning: "tree, wood" },
  { char: "金", romaji: "kane", meaning: "gold, money" },
  { char: "土", romaji: "tsuchi", meaning: "earth, soil" },
  { char: "本", romaji: "hon", meaning: "book" },
  { char: "語", romaji: "go", meaning: "language" },
  { char: "年", romaji: "nen", meaning: "year" },
  { char: "和", romaji: "wa", meaning: "harmony" },
  { char: "命", romaji: "mei", meaning: "life, command" },
  { char: "勝", romaji: "shou", meaning: "win" },
  { char: "園", romaji: "en", meaning: "garden" },
  { char: "全", romaji: "zen", meaning: "all" },
  { char: "喜", romaji: "ki", meaning: "joy" }
];

// Katakana characters
const katakana = [
  { char: "ア", romaji: "a" }, { char: "イ", romaji: "i" }, { char: "ウ", romaji: "u" },
  { char: "エ", romaji: "e" }, { char: "オ", romaji: "o" }, { char: "カ", romaji: "ka" },
  { char: "キ", romaji: "ki" }, { char: "ク", romaji: "ku" }, { char: "ケ", romaji: "ke" },
  { char: "コ", romaji: "ko" }, { char: "サ", romaji: "sa" }, { char: "シ", romaji: "shi" },
  { char: "ス", romaji: "su" }, { char: "セ", romaji: "se" }, { char: "ソ", romaji: "so" },
  { char: "タ", romaji: "ta" }, { char: "チ", romaji: "chi" }, { char: "ツ", romaji: "tsu" },
  { char: "テ", romaji: "te" }, { char: "ト", romaji: "to" }, { char: "ナ", romaji: "na" },
  { char: "ニ", romaji: "ni" }, { char: "ヌ", romaji: "nu" }, { char: "ネ", romaji: "ne" },
  { char: "ノ", romaji: "no" }, { char: "ハ", romaji: "ha" }, { char: "ヒ", romaji: "hi" },
  { char: "フ", romaji: "fu" }, { char: "ヘ", romaji: "he" }, { char: "ホ", romaji: "ho" },
  { char: "マ", romaji: "ma" }, { char: "ミ", romaji: "mi" }, { char: "ム", romaji: "mu" },
  { char: "メ", romaji: "me" }, { char: "モ", romaji: "mo" }, { char: "ヤ", romaji: "ya" },
  { char: "ユ", romaji: "yu" }, { char: "ヨ", romaji: "yo" }, { char: "ラ", romaji: "ra" },
  { char: "リ", romaji: "ri" }, { char: "ル", romaji: "ru" }, { char: "レ", romaji: "re" },
  { char: "ロ", romaji: "ro" }, { char: "ワ", romaji: "wa" }, { char: "ヲ", romaji: "wo" },
  { char: "ン", romaji: "n" }
];
// Show About Us section
function showAboutUs() {
  const content = document.getElementById('content');
  content.innerHTML = `
    <h2>About Us</h2>
    <p><strong>App Developer:</strong> Saroj</p>
    <p>Learn Hiragana, Katakana, and Kanji easily from this app.</p>
  `;
}
// Function to show About Us section
function showAboutUs() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('section').style.display = 'none';
  document.getElementById('about-us').style.display = 'block';
}

// Back button functionality
function goBack() {
  document.getElementById('about-us').style.display = 'none';
  document.getElementById('section').style.display = 'none';
  document.getElementById('home').style.display = 'block';
}

// Ensure initial visibility
document.getElementById('about-us').style.display = 'none';
document.getElementById('section').style.display = 'none';

// Event listeners
document.getElementById("hiragana-btn").addEventListener("click", () => showCharacters(hiragana));
document.getElementById("katakana-btn").addEventListener("click", () => showCharacters(katakana));
document.getElementById("kanji-btn").addEventListener("click", () => showCharacters(kanji));

document.getElementById("back-btn").addEventListener("click", () => {
  document.getElementById("home").style.display = "block";
  document.getElementById("section").style.display = "none";
});

// Function to show characters
function showCharacters(characters) {
  document.getElementById("home").style.display = "none";
  document.getElementById("section").style.display = "block";
  
  const charactersDiv = document.getElementById("characters");
  charactersDiv.innerHTML = ''; // Clear previous content

  characters.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("character-card");
    card.innerHTML = `<span>${character.char}</span><div>${character.romaji}</div>`;
    charactersDiv.appendChild(card);
  });
}
