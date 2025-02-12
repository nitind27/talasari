
const data = [
  { img: '/Img/img5.jpeg' },
  { img: '/Img/img6.jpg' },
  { img: '/Img/img7.png' },
  { img: '/Img/img8.jpg' },
  { img: '/Img/img7.png' },
  { img: '/Img/img8.jpg' },

];
const Cards = () => {
  return (
    <div className="container flex gap-2 p-5 justify-center items-center">
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.img} alt={item.name} className="h-44 " />

        </div>
      ))}
    </div>
  );
};


export default Cards