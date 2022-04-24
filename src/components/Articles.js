import '../scss/Articles.scss';

function Articles() {
    const listItems = articles.map((article) =>
        <article>
            <div>
                <a href={article.link}>
                    <h4>{article.title}</h4>
                    <img width={100} height={100} src={article.img} alt={article.title}/>
                </a>
            </div>
            <div>
                <section>
                    <p>{article.description}</p>
                </section>
            </div>
        </article>
    );
    return (
        <div className={'articles'}>
            <h3>Popular web browsers</h3>
            <div>
                {listItems}
            </div>
        </div>
    )
}
const articles = [
    {
        title: "Mozilla Firefox",
        description: "Firefox, pełna nazwa Mozilla Firefox – wieloplatformowa przeglądarka internetowa o otwartym kodzie źródłowym oparta na silniku Gecko, stworzona i rozwijana przez Mozilla Foundation, Mozilla Corporation oraz wolontariuszy.",
        link: "https://www.mozilla.org/pl/firefox/new/",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1024px-Firefox_logo%2C_2019.svg.png"
    },
    {
        title: "Google Chrome",
        description: "Google Chrome, wymowa: – darmowa przeglądarka internetowa rozwijana przez Google. Jej kod został napisany w oparciu o rozwiązania open source częściowo oparte na innych aplikacjach, z wyjątkiem wersji na iOS. Od wydania wersji 28 przeglądarka wykorzystuje silnik Blink.",
        link: "https://www.google.pl/chrome/?brand=YTUH&gclid=Cj0KCQjw6pOTBhCTARIsAHF23fLjACSwWxGiIXcZln5qNcrskIsiz1iSZxi0Sh3izfaOVpdmRm4L7KYaAoxrEALw_wcB&gclsrc=aw.ds",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1024px-Google_Chrome_icon_%28February_2022%29.svg.png"
    },
    {
        title: "Microsoft Edge",
        description: "Microsoft Edge – przeglądarka internetowa firmy Microsoft. Oficjalnie zaprezentowana 21 stycznia 2015 roku, a pierwszy raz wydana w wersji testowej 30 marca 2015 roku. Dostępna dla systemu Windows 10, którego premiera odbyła się 29 lipca 2015 roku.",
        link: "https://www.microsoft.com/pl-pl/edge",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Microsoft_Edge_logo_%282019%29.png"
    }
];

export default Articles;
