import Directory from "./directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://storge.pic2.me/upload/785/5f920252ddb8a1.64949369.jpg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://w.wallha.com/ws/5/Nsjfw7Ll.jpg",
    },
    {
      id: 3,
      title: "womens",
      imageUrl: "https://img.bumppy.com/bumppy/2017/06/14-3.jpg",
    },
    {
      id: 4,
      title: "sneakers",
      imageUrl: "https://i.pinimg.com/originals/3e/3d/5c/3e3d5c2808fe93e995c6fcfba310cb3f.jpg",
    },
    {
      id: 5,
      title: "suits",
      imageUrl: "https://www.thesun.co.uk/wp-content/uploads/2019/08/NINTCHDBPICT000512044899-2.jpg",
    },
    {
      id: 6,
      title: "mens",
      imageUrl: "https://www.thefearlessman.com/wp-content/uploads/2017/07/alpha-male.jpg",
    }
  ];
  return <Directory categories={categories} />;
};

export default Home;
