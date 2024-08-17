const WelcomeMessage = () => (
  <div className="container px-4 sm:px-8 lg:px-48 pt-10 sm:pt-20">
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img
          src="/img/doctors-team.jpg"
          alt="doctor team"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 w-full lg:w-1/2 flex flex-col">
        <div className="text-2xl sm:text-3xl lg:text-4xl font-customFont uppercase">
          Welcome To <span className="text-[#CE6021]">Webful Vision</span>
        </div>
        <p className="text-lg sm:text-xl font-customFont py-2">
          Best Optometrist In Town Are Ready To Help You!
        </p>
        <p className="text-sm sm:text-sm py-2 leading-6 text-slate-600">
          At Webful Vision Clinic, we have the best optometrists in town who are
          ready to provide great consultation and advice to help you get rid of
          glasses or find new lenses. Don’t delay—contact us today so we can
          offer you the best services. Once things are working well, we will
          ensure good value for our customers so they can achieve excellent eye
          health at a lower cost. This is our priority, and we are dedicated to
          caring for you.
        </p>
        <div className="flex flex-col sm:flex-row w-full border-t-2 border-gray-200 mt-4">
          <div className="flex w-full sm:w-auto justify-center items-center py-2">
            <img
              src="/img/award1.png"
              alt="award1"
              className="w-1/2 sm:w-24 lg:w-24 mx-2"
            />
            <img
              src="/img/award2.png"
              alt="award2"
              className="w-1/2 sm:w-24 lg:w-24 mx-2"
            />
          </div>
          <div className="border-t-2 sm:border-t-0 sm:border-l-2 border-gray-200 mt-4 sm:mt-0 sm:ml-4 pt-2 sm:pt-4 px-2">
            <div className="text-xs sm:text-sm font-medium">Dr. Johne Doe</div>
            <p className="text-xs sm:text-sm">
              Is the best doctor for optometry in Jacksonville. He is passionate
              about helping patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;
