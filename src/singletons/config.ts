import {GalleryObject} from '../entities/galleryObject';
import {GalleryGroup} from '../entities/galleryGroup';
import {IconRow} from '../components/iconRow';
export class Config {
    public tiles : Array<GalleryGroup>;
    public aboutText: string;
    public aboutSrc: string;
    public contactText: string;
    public resumeHtml: string;
    public headerImgSrc: string; 
    public siteHeader: string;
    public resumeSrc: string;
    public iconList: Array<IconRow>;
    
    constructor() {

        this.headerImgSrc = "https://orig00.deviantart.net/619c/f/2016/241/f/1/f1cc10d2ba5ce3b7af0c54b96f57e375-dafqme5.png";
        this.siteHeader = "Foxwaffles";
        //const testSrc = "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg";
        this.resumeSrc = "https://www.dropbox.com/s/2djzjbmzyws67r0/Resume2017.png?dl=1";
        //"https://dl.dropboxusercontent.com/content_link/YwprMa1nJTPOKjQV0DJYJIAYKMRPEQk056kcXqpScGT5BUOgnnvXdFqq8cMZnanO/file?dl=0";

        this.iconList = [
            new IconRow("#", "deviantart", "Art, WIPs, commissions, adoptables, and more! All art hubb."),
            new IconRow("#", "twitch", "Art streams on Saturdays, video game streams on Sundays, Tuesdays, and Thursdays. Come chat with me and ask me anything!"),
            new IconRow("#", "youtube", "Stream highlights, speedpaints, tutorials, Q&A's, and more!"),
            new IconRow("#", "wordpress", "Blog posts of game reviews, philosophy, art, everything and The Kitchen Sink!"),
            new IconRow("#", "tumblr", "Art, WIPs, Q&A's, and more!"),
            new IconRow("#", "twitter", "Bite-sized posts of my art and gaming life, along with the occasional cat.")
        ];

        this.aboutSrc = "https://www.dropbox.com/s/6u0pdnltjkfznw5/AboutMe.png?dl=1";
        this.aboutText = "Just a fox who loves art, animation, video games,\
                        and sharing them all with the world! Her favorite\
                        genre of games is the Japanese RPG. Follow her\
                        elsewhere on the Find Me page to see what she\
                        is up to.\
                        <br/><br/>\
                        To be clear, foxwaffles appreciates the\
                        subtle nuances of both waffles and pancakes\
                        equally.";

        const tileConfig = [
            {
                title: "Immolation",
                src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                images: [
                    {
                        title: "immolation Object",
                        src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                        description: "This is a gallery object"
                    },
                    {
                        title: "immolation Object 2",
                        src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                        description: "This is a gallery object 2"
                    },
                ]
            },
            {
                title: "Immolation 2",
                src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                images: [
                    {
                        title: "immolation Object 3",
                        src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                        description: "This is a gallery object 3"
                    },
                    {
                        title: "immolation Object 4",
                        src: "https://img00.deviantart.net/6de1/i/2015/347/7/d/immolation_by_aquashiram14-d9k0yod.jpg",
                        description: "This is a gallery object 2"
                    },
                ]
            }
        ]


        this.tiles = [];

        for(let tile of tileConfig) {
            let group = new GalleryGroup(tile.src, tile.title);
            for(let image of tile.images) {
                let imageObject = new GalleryObject(image.src, image.title, image.description);
                group.addGalleryObject(imageObject);
            }
            this.tiles.push(group);
        }
    }
}

let config = new Config();
export class ConfigFactory {
    async getConfig() {
        return config;
    }
}
