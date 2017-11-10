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
                title: "Storybook",
                src: "https://www.dropbox.com/s/d1jwjj2k0u5e9ew/1-Cover.jpg?dl=1",
                images: [
                    {
                        title: "Cover",
                        src: "https://www.dropbox.com/s/d1jwjj2k0u5e9ew/1-Cover.jpg?dl=1",
                        description: 'Children\'s Board Book\
                                    <br/>Adapted from the Aesop\'s fable "The Crow & The Pitcher"\
                                    <br/><br/>Pen & Ink on Bristol, final editing done in Photoshop.'
                    },
                    {
                        title: "Pages 1 & 2",
                        src: "https://www.dropbox.com/s/3fjq9de3atp1rkc/Spread-1-2.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 3 & 4",
                        src: "https://www.dropbox.com/s/m0v0vpj0hu4ipnu/Spread-3-4.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 5 & 6",
                        src: "https://www.dropbox.com/s/6sfslc1he859su7/Spread-5-6.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 7 & 8",
                        src: "https://www.dropbox.com/s/hewjp2gw4jokjm4/Spread-7-8.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 9 & 10",
                        src: "https://www.dropbox.com/s/0uw8rpiwu7o464d/Spread-9-10.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 11 & 12",
                        src: "https://www.dropbox.com/s/39tmfxb3ixqjl8k/Spread-11-12.jpg?dl=1",
                        description: ""
                    },
                    {
                        title: "Pages 13 & 14",
                        src: "https://www.dropbox.com/s/zd1qtj1bbto4vm8/Spread-13-14.jpg?dl=1",
                        description: ""
                    },
                ]
            },
            {
                title: "Randinnan Shimmermoon",
                src: "https://www.dropbox.com/s/yhchtt7q4sv8l37/2%20Randinnan.jpg?dl=1",
                images: [
                    {
                        title: "Randinnan Shimmermoon",
                        src: "https://www.dropbox.com/s/yhchtt7q4sv8l37/2%20Randinnan.jpg?dl=1",
                        description: "Project concentrating on character design and creation\
                                    <br/><br/>Photoshop."
                    },
                    {
                        title: "Randinnan Shimmermoon (Walk-Cycle)",
                        src: "https://www.dropbox.com/s/vujxh9fid7slvt4/2a%20Randinnan.gif?dl=1",
                        description: "Animation drawn frame by frame of a walk cycle that is true\
                                to the personality and form of the character. Inspired by slow motion\
                                footage of the cheetah\
                                <br/><br/>Photoshop and After Effects."
                    }
                ]
            },
            {
                title: "Mute",
                src: "https://www.dropbox.com/s/29m1792bi72dr36/4%20Illustration.jpg?dl=1",
                images: [
                    {
                        title: "Mute",
                        src: "https://www.dropbox.com/s/29m1792bi72dr36/4%20Illustration.jpg?dl=1",
                        description: "This is the cover of a short story done in response to the prompt \"After\"\
                                <br/><br/>Photoshop."
                    }
                ]
            },
            {
                title: "Synthetic Storm",
                src: "https://www.dropbox.com/s/bcexy7qqrklazdr/3%20Synthetic%20Storm.jpg?dl=1",
                images: [
                    {
                        title: "Synthetic Storm",
                        src: "https://www.dropbox.com/s/bcexy7qqrklazdr/3%20Synthetic%20Storm.jpg?dl=1",
                        description: "Application of the basics of 3D modeling to create a dynamic creature\
                                <br/><br/>Maya, final editing done in Photoshop."
                    }
                ]
            },
            {
                title: "Angels of Heaven",
                src: "https://www.dropbox.com/s/8f6w5lldb2wmd5u/5%20Angels%20of%20Heaven.jpg?dl=1",
                images: [
                    {
                        title: "Angels Of Heaven",
                        src: "https://www.dropbox.com/s/8f6w5lldb2wmd5u/5%20Angels%20of%20Heaven.jpg?dl=1",
                        description: "Illustration done exploring color and depression\
                                <br/><br/>Pen & Ink on Bristol, color done in Photoshop"
                    },
                    {
                        title: "Angels Of Heaven (Inks)",
                        src: "https://www.dropbox.com/s/0czc4weeti06d13/5a%20Angels%20of%20Heaven.jpg?dl=1",
                        description: ""
                    }
                ]
            },
            {
                title: "Gown removed carelessly, head not so much. -Joss Whedon",
                src: "https://www.dropbox.com/s/uit7iqbu3u1kcm6/6%20Micronovel.png?dl=1",
                images: [
                    {
                        title: "Gown removed carelessly, head not so much. -Joss Whedon",
                        src: "https://www.dropbox.com/s/uit7iqbu3u1kcm6/6%20Micronovel.png?dl=1",
                        description: "Illustration done based on a micronovel, a 6-word story, written by Joss Whedon.\
                                <br/><br/>Photoshop."
                    }
                ]
            },
            {
                title: "Glass Ocean",
                src: "https://www.dropbox.com/s/abwhje4qursx6yz/7%20Glass%20Ocean.png?dl=1",
                images: [
                    {
                        title: "Glass Ocean",
                        src: "https://www.dropbox.com/s/abwhje4qursx6yz/7%20Glass%20Ocean.png?dl=1",
                        description: "Pattern and color exploration based on the ocean\
                                <br/><br/>Photoshop and Illustrator."
                    }
                ]
            },
            {
                title: "Tropical",
                src: "https://www.dropbox.com/s/e4uqr7v23bnf390/8%20Tile.jpg?dl=1",
                images: [
                    {
                        title: "Tropical",
                        src: "https://www.dropbox.com/s/e4uqr7v23bnf390/8%20Tile.jpg?dl=1",
                        description: "Tile pattern based on shapes, forms, and patterns present in nature\
                                <br/><br/>Pen & Ink on Bristol."
                    }
                ]
            },
            {
                title: "The Two Brothers",
                src: "https://www.dropbox.com/s/dvru0rbh0vvm5ci/9%20Speedpaint.jpg?dl=1",
                images: [
                    {
                        title: "The Two Brothers",
                        src: "https://www.dropbox.com/s/dvru0rbh0vvm5ci/9%20Speedpaint.jpg?dl=1",
                        description: "Exploration of positive/negative space and light/shadow\
                                <br/><br/>Black and white gesso on Bristol board."
                    }
                ]
            },
            {
                title: "Coffee Space",
                src: "https://www.dropbox.com/s/s9b5h5w5viq8jmv/10%20Coffee.jpg?dl=1",
                images: [
                    {
                        title: "Coffee Space",
                        src: "https://www.dropbox.com/s/s9b5h5w5viq8jmv/10%20Coffee.jpg?dl=1",
                        description: "Spontaneous exercise based on creating a space out of random coffee splashes\
                                <br/><br/>Coffee, graphite, white correction pen."
                    }
                ]
            },
            {
                title: "Stepping Forth",
                src: "https://www.dropbox.com/s/7s136soypg2q19e/11%20Wire.jpg?dl=1",
                images: [
                    {
                        title: "Stepping Forth",
                        src: "https://www.dropbox.com/s/7s136soypg2q19e/11%20Wire.jpg?dl=1",
                        description: "Exploration of how rigid, hard wire can be transformed into soft, billowing forms\
                                <br/><br/>Wire, wood base."
                    }
                ]
            },
            {
                title: "Dragonfly",
                src: "https://www.dropbox.com/s/ivlfokgij43upta/12.jpg?dl=1",
                images: [
                    {
                        title: "Dragonfly",
                        src: "https://www.dropbox.com/s/ivlfokgij43upta/12.jpg?dl=1",
                        description: "Using found objects and small pieces, the goal was to assemble a unified living creature. It is the same size as a real-life dragonfly.\
                        <br/><br/>Screws, computer parts, electric wire, wire, metal scraps."
                    }
                ]
            },
            {
                title: "Descent",
                src: "https://www.dropbox.com/s/cl1pz3ddtcn9cv6/13.jpg?dl=1",
                images: [
                    {
                        title: "Descent",
                        src: "https://www.dropbox.com/s/cl1pz3ddtcn9cv6/13.jpg?dl=1",
                        description: "Exploration of form and dynamic movement inspired by dragons\
                                <br/><br/>Bronze cast from cuttlefish shell, wood base."
                    }
                ]
            },
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
