
const BenefitsSection = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl  text-gray-900">Here are some of the benefits <br />of your offer</h2>
          <p className="mt-4 text-lg text-gray-600">
 Explain what make your product or service great. Talk about features in a way <br /> that highlights the real value people get out of them
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  
          <div className="flex flex-col items-center  bg-gray-100 p-6  ">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
              alt="Benefit 1"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Benefit 1 </h3>
            <p className="mt-2 text-base text-gray-500 text-center">
              For example, restaurant and bakeries could outline the health benefits of their all natural ingredients.
            </p>
          </div>

      
          <div className="flex flex-col items-center  bg-gray-100 p-6">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
              alt="Benefit 2"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Benefit 2</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
            For example, restaurant and bakeries could outline the health benefits of their all natural ingredients.
            </p>
          </div>

          <div className="flex flex-col items-center  bg-gray-100 p-6">
            <img
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
              alt="Benefit 3"
              className="h-16 w-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">Benefit 3</h3>
            <p className="mt-2 text-base text-gray-500 text-center">
            For example, restaurant and bakeries could outline the health benefits of their all natural ingredients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
