import { Carousel } from "antd";

const Banner = () => {
  return (
    <>
      <div className="bg-white rounded-xl my-10">
        <div className="flex flex-row items-center">
          <div className="w-full md:pl-3 p-2">
            <Carousel autoplay draggable>
              <img src="https://png.pngtree.com/background/20210711/original/pngtree-world-reading-day-hand-painted-e-commerce-book-banner-picture-image_1118336.jpg" />

              <img src="https://bookbuy.vn/Res/Images/Album/95ea3a7e-8d5c-4046-b1ad-676412ed9cd2.jpg?w=880&scale=both&h=320&mode=crop" />

              <img src="https://cdn0.fahasa.com/media/magentothem/banner7/Fahasa_saleT3_Tuan2_mainbanner_banner_840x320.jpg" />

              <img src="https://png.pngtree.com/background/20210711/original/pngtree-graduation-season-banner-picture-image_1070775.jpg" />

              <img src="https://bookbuy.vn/Res/Images/Album/342cb2af-6244-4d62-b2fd-b44a76093b52.jpg?w=880&scale=both&h=320&mode=crop" className="rounded-xl" />
            </Carousel>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default Banner;
