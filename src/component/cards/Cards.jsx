import { Link } from "react-router-dom";
import Sidemenu from "../Sidemenudata/Sidemenu";

const data = [
  { img: '/Cardsimg/1.png', link: "https://www.india.gov.in/" },
  { img: '/Cardsimg/2.png', link: "https://sbmurban.org/" },
  { img: '/Cardsimg/3.png', link: "https://aaplesarkar.maharashtra.gov.in/en/" },
  { img: '/Cardsimg/4.png', link: "https://rti.gov.in/" },
  { img: '/Cardsimg/5.png', link: "https://www.maharashtra.gov.in/" },
  { img: '/Cardsimg/6.png', link: "https://socialjustice.gov.in/" },

];
const Sidedata = [
  { id: 1, label: 'Name', value: 'John Doe' },
  { id: 2, label: 'Age', value: '30' },
  { id: 3, label: 'City', value: 'New York' },
];
const Cards = () => {
  return (
    <><div className="p-5">

      <h1 className="text-[20px] font-semibold text-gray-500">Importants Links</h1>

      <div className=" flex gap-1 justify-between ">

        {data.map((item) => (
          <div key={item.id} className="relative group">
            <Link to={item.link} target="_blank">
              <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(to_right,#2ab998_0%,#2989d8_30%,#428dcb_33%,#c2579b_67%,#c2579b_67%,#c2579b_75%,#ec7026_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 group-hover:shadow-md"></div>
              <img
                src={item.img}
                alt={item.name}
                className="h-24 border mt-2 rounded-2xl relative z-10"
              />
            </Link>
          </div>
        ))}
        {/* <div className="flex h-screen">
        <Sidemenu Sidedata={Sidedata} />

        </div> */}

      </div>
    </div>
    </>
  );
};

export default Cards
