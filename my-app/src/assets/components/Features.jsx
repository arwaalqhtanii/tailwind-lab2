
const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {/*  1 */}
          <div className="feature">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6765ae81-freshgoods-feature1_10go0b20go09e00000001o.jpg"
              alt="Feature 1"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Feature 1</h3>
            <p className="mt-2 text-base text-gray-500">
              Talk about some of the details of your offer with a focus on the value people get back.
            </p>
          </div>

          {/*  2 */}
          <div className="feature">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/bf92a2f6-freshgoods-feature2_10go0ku0go09e00009e01o.jpg"
              alt="Feature 2"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Feature 2</h3>
            <p className="mt-2 text-base text-gray-500">
              Is there a pain point that your product or service resolves? Tell visitors about it here.
            </p>
          </div>

          {/*  3 */}
          <div className="feature">
            <img
              className="w-full h-48 object-cover rounded-lg"
              src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/f55dfcfa-freshgoods-feature3_10go0b40go09e00000601o.jpeg" 
              alt="Feature 3"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Feature 3</h3>
            <p className="mt-2 text-base text-gray-500">
              Alternatively, you could use this section to address some frequently asked questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
