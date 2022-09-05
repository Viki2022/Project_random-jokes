let quotes = [
	{
		"text-be": "Людзьмі звацца",
		"author-be": "Янка Купала",
		"text-en": "People are called",
        "author-en": "Yanka Kupala" 
	},
	{
		"text-be": "Добра быць у дарозе, якую ты сам сабе выбіраеш",
		"author-be": "Якуб Колас",
		"text-en": "It's good to be on the path you choose for yourself",
        "author-en": "Jakub Kolas"
	},
	{
		"text-be": "Дружнасць – першы крок свабоды,  Згода – сіла грамады",
		"author-be": "Якуб Колас",
		"text-en": "Friendship is the first step of freedom, Consent is the strength of community",
        "author-en": "Jakub Kolas"
	},
	{
		"text-be": "Заўсёды наперад!  Ніколі назад!",
		"author-be": "Янка Купала",
		"text-en": "Always forward! Never back!",
        "author-en": "Yanka Kupala"
	},
	{
		"text-be": "А там, за светам, на чужыне Ніхто цябе, ой, не прыхіне! ",
		"author-be": "Янка Купала",
		"text-en": "And there, outside the world, in a foreign land No one will hide you, oh!",
        "author-en": "Yanka Kupala"
	},
	{
		"text-be": "Мой родны кут, як ты мне мілы!.. ",
		"author-be": "Янка Купала",
		"text-en": "My native corner, how dear you are to me! ..",
        "author-en": "Yanka Kupala"
	},
	{
		"text-be": "Хто забыў сваіх продкаў ‒ сябе губляе, Хто забыў сваю мову ‒ усё згубіў",
		"author-be": "Уладзімер Караткевіч",
		"text-en": "He who forgets his ancestors loses himself, He who forgets his language loses everything",
        "author-en": "Vladimir Karatkevich"
	},
	{
		"text-be": "Уся паэзія – ад кахання",
		"author-be": "Уладзімер Караткевіч",
		"text-en": "All poetry is from love",
        "author-en": "Vladimir Karatkevich"
	},
	{
		"text-be": "Вечна тваім застанецца толькі тое, што ты аддаў",
		"author-be": "Уладзімер Караткевіч",
		"text-en": "Only what you have given will remain yours forever",
        "author-en": "Vladimir Karatkevich"
	},
	{
		"text-be": "Лепей за ўсё смяяцца з сябе. Ніхто не крыўдуе",
		"author-be": "Уладзімер Караткевіч",
		"text-en": "It's best to laugh at yourself. No one is offended",
        "author-en": "Vladimir Karatkevich"
	},
	{
		"text-be": "Ва ўсіх нас ёсць толькі адзін жорсткі суд – суд над сабою",
		"author-be": "Уладзімер Караткевіч",
		"text-en": "We all have only one cruel court - the court over itself",
        "author-en": "Vladimir Karatkevich"
	},
];
 
// Change quote
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const button = document.querySelector('.button-quote');
const body = document.body;
let lang = 'be'

function showQuote() {
	let random = Math.floor(Math.random() * quotes.length);
	quote.innerHTML = '"' + quotes[random]['text-' + lang] + '"';
	author.innerHTML = quotes[random]['author-' + lang];
	body.style.backgroundColor = '#' + random + '5' + random + '5';
}

button.addEventListener('click', showQuote);
 
// Change language
const buttonEn = document.querySelector('.en');
const buttonBe = document.querySelector('.be');

buttonEn.addEventListener('click', () => {
    buttonEn.classList.add('active')
    buttonBe.classList.remove('active')
    lang = 'en'
    showQuote()
    button.innerHTML = 'Show more quote'
    localStorage.setItem('button-len', 1)
})

buttonBe.addEventListener('click', () => {
    buttonEn.classList.remove('active')
	buttonBe.classList.add('active')
    lang = 'be'
    showQuote()
    button.innerHTML = 'Паказаць яшчэ цытату'
    localStorage.setItem('button-len', 2)
})

if(localStorage.getItem('button-len') == 1) {
    buttonEn.classList.add('active')
    buttonBe.classList.remove('active')
    lang = 'en'
    showQuote()
    button.innerHTML = 'Show more quote'
} 

if(localStorage.getItem('button-len') == 2) {
    buttonBe.classList.add('active')
    buttonEn.classList.remove('active')
    lang = 'be'
    showQuote()
    button.innerHTML = 'Паказаць яшчэ цытату'
} 
