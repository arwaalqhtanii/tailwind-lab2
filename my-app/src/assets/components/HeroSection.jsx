

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">

      <img
        src="https://early-wildflower-281.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Ffb56a855-0c74-4a0d-84dc-3fb7c76ae0b3%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=fff185a2-dff1-81af-bc73-de1e521c36bc&spaceId=fb56a855-0c74-4a0d-84dc-3fb7c76ae0b3&width=1420&userId=&cache=v2"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />


      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-8 md:p-20">

        <h1 className="text-white text-3xl md:text-4xl font-bold ">
          Fresh<span className="font-light">Goods</span>
        </h1>




        <p className="text-white text-xl md:text-5xl mt-5 leading-tight">
          Concisely <br />
          describe your <br />
          product or service
        </p>


        <p className="text-gray-300 text-sm md:text-lg mt-7 max-w-xs md:max-w-lg">
          No need to get clever. Tell people exactly what you are offering, then
          use this space to communicate your key value proposition.
        </p>


        <button className="mt-8 bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg text-sm md:text-lg hover:bg-yellow-600 transition">
          ORDER NOW
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
