import branchPartners from "../../../../data/branchPartner.json";

const BranchPartner = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {branchPartners.map((partner) => (
          <div
            key={partner.id}
            className="flex items-center justify-center border hover:border-[#15568E] ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.alt}
              className="w-full h-auto max-h-16 md:max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BranchPartner;
