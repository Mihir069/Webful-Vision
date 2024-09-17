import PriceServiceCard from "../common/price-service-card";
const Price = () => (
  <div className="px-4 py-5 md:px-12 lg:px-48">
    <div className="relative overflow-hidden w-full">
      <div className="text-center mb-5">
        <div className="py-2 text-xl md:text-2xl lg:text-3xl font-semibold uppercase font-customFont">
          Our <span className="text-[#CE6021]">Prices</span>
        </div>
        <div className="text-xs md:text-sm lg:text-base text-slate-700">
          We Have Wide Range Of Glasses And Lenses
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <PriceServiceCard
          title="Consultation"
          price="$20.20"
          items={[
            { text: "Lorem ipsum dolor sit amet", isPositive: true },
            { text: "Consectetur adipiscing elit, sed do", isPositive: true },
            {
              text:
                <span className="font-semibold">Eiusmod</span> +
                " tempor incididunt",
              isPositive: true,
            },
            { text: "Ut labore et dolore magna aliqua", isPositive: false },
            { text: "Ut enim ad minim veniam", isPositive: false },
          ]}
        />
        <PriceServiceCard
          title="Medication"
          price="$200.20"
          items={[
            { text: "Lorem ipsum dolor sit amet", isPositive: true },
            { text: "Consectetur adipiscing elit, sed do", isPositive: true },
            {
              text:
                <span className="font-semibold">Eiusmod</span> +
                " tempor incididunt",
              isPositive: true,
            },
            { text: "Ut labore et dolore magna aliqua", isPositive: false },
            { text: "Ut enim ad minim veniam", isPositive: false },
          ]}
        />
        <PriceServiceCard
          title="Surgery"
          price="$200.20"
          items={[
            { text: "Lorem ipsum dolor sit amet", isPositive: true },
            { text: "Consectetur adipiscing elit, sed do", isPositive: true },
            {
              text:
                <span className="font-semibold">Eiusmod</span> +
                " tempor incididunt",
              isPositive: true,
            },
            { text: "Ut labore et dolore magna aliqua", isPositive: false },
            { text: "Ut enim ad minim veniam", isPositive: false },
          ]}
        />
      </div>
    </div>
  </div>
);
export default Price;
