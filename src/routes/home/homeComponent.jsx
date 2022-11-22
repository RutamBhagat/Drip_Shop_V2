import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "sneakers",
      imageUrl: "https://source.unsplash.com/76w_eDO1u1E/500x300",
    },
    {
      id: 2,
      title: "suits",
      imageUrl: "https://source.unsplash.com/Ws4wd-vJ9M0/500x300",
    },
    {
      id: 3,
      title: "mens",
      imageUrl: "https://source.unsplash.com/tmtizwShVRo",
    },
    {
      id: 4,
      title: "hats",
      imageUrl: "https://source.unsplash.com/DdOl2jwEVls/500x300",
    },
    {
      id: 5,
      title: "jackets",
      imageUrl: "https://source.unsplash.com/qIQE6X0rVsU/500x300",
    },
    {
      id: 6,
      title: "womens",
      imageUrl: "https://source.unsplash.com/8a95EVm0ovQ",
    },
  ];
  return <Directory categories={categories} />;
};

export default Home;
