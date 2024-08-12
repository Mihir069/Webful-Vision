const WelcomeMessage = () => (
  <div className="container px-48 pt-20">
    <div className="flex">
      <div className="w-1/2">
        <img src="/img/doctors-team.jpg" alt="doctor team" />
      </div>
      <div className="px-5 w-1/2 flex-col">
        <div className="text-3xl font-customFont uppercase">
          Welcome To <span className="text-[#CE6021]">Webful vision</span>
        </div>
        <p className="text-xl font-customFont py-2">
          Best Optometrist In Town Are Ready To Help You!
        </p>
        <p className="text-sm py-2 leading-6 text-slate-600">
          At webful vision clinic we have best optometrist in town who are ready
          to give great consultation and advices to get rid of glasses or get
          new lense of glasses suggestion. Dont delay contact us today so we cna
          provide you best features. once things start working nicely we will
          adjust good profits for our customers so they can get good eyes in
          less money. This is only we care and we want to care.
        </p>
        <div className="flex w-full border-t-2">
          <div className="py-2 flex w-24 ">
            <img src="/img/award1.png" alt="award1" className="w-full" />
            <img src="/img/award2.png" alt="award2" className="w-full" />
          </div>
          <div className="border-l-2 ml-20 pl-2 py-2">
            <div className="text-sm font-medium">Dr.Johne Doe</div>
            <p className="text-sm">
              Is best Doctor for the Optometrists in Jacksonville. He is really
              passionate to help patients.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default WelcomeMessage;
