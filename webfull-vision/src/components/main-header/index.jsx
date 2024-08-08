const MainHeader = () => {
    const contactInfo = [
        { id: 1, src: '/svg/location-dot-solid.svg', alt: 'location', title1: 'Our Location', title2: '6th Avenue, NeHoland' },
        { id: 2, src: '/svg/phone-solid.svg', alt: 'phone', title1: 'Call Us', title2: '+123-123-1234' },
    ]
    return (
        <div className="container">
            <div className="flex justify-between items-center px-48 p-2">
                <div className=" flex items-center space-x-4 list-none py-5 ">
                    <img src="/img/webful-vision-logo.png" alt="logo" className="w-[360px]" />
                </div>
                <div className=" flex items-center space-x-4 list-none ">
                    {contactInfo.map((items) => (
                        <div key={items.id} className="relative flex px-2">
                            <div className="p-3 flex items-center justify-center rounded-full border border-[#CE6021]">
                                <div className="flex items-center justify-center bg-white rounded-full ">
                                    <img src={items.src} alt={items.alt} className="w-7 h-7" />
                                </div>
                            </div>

                            <div className="px-5 py-1 flex flex-col font-customFont">
                                <div className="font-light ">{items.title1}</div>
                                <div className="font-semibold text-sm">{items.title2}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
export default MainHeader;