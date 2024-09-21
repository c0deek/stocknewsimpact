import axios from 'axios';

const fetchNews = async () => {
    try {
// import cheerio from 'cheerio';
// import cheerio from 'cheerio';
        const response = await axios.get('https://saurav.tech/NewsAPI/top-headlines/category/business/in.json');
        const data = await response.data;
        const top10data = data.articles?.slice(0, 10);
        // const $ = cheerio.load(html);

        console.log('Parsing Money Control...', top10data);
    } catch (error) {
        console.log(error);
    }
}

export default fetchNews;