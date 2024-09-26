
const Information = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div className="w-full">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg" 
              alt="Business Owner"
            />
          </div>


          <div>
            <h2 className="text-3xl md:text-4xl  text-gray-700">
              Some more <br /> information about <br /> your business
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Share a little about yourself as a business owner, or maybe <br />
              describe what makes your product or service unique. Give <br /> visitors
              one more reason to care about your offer and want <br /> to buy from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
