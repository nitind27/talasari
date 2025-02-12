
const data = [
  { img: '/public/Img/img5.jpeg' },
  { img: '/public/Img/img6.jpg' },
  { img: '/public/Img/img7.png' },
  { img: '/public/Img/img8.jpg' },
  { img: '/public/Img/img7.png' },
  { img: '/public/Img/img8.jpg' },

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