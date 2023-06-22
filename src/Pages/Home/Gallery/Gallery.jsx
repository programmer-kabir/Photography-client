import React from "react";

const Gallery = () => {
  return (

    <div>
      <h2 className="text-3xl font-bold text-slate-500 text-center mt-24">Our Gallery</h2>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/FXZZtmL/349123285-610136997549907-9067795196713913548-n.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/kym0Vcn/348377580-1402486870515478-45563120304829542-n.jpg"
            />
          </div>
          {/* sm:h-[145px] md:h-[288px] */}
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block  w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/BZkbFXf/348382732-128916066876092-3256504983926059262-n.jpg"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block w-full md:h-[288px] h-28 rounded-lg object-cover object-center"
              src="https://i.ibb.co/DkL1YLz/348388810-3547229202262286-3880667738530378472-n.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/KKyS44f/348378336-928420458371664-7665619206256878097-n.jpg"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src="https://i.ibb.co/Vw5WYCm/353355882-953817239275238-2965967172738892755-n.jpg"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
