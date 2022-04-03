import Filter from "../components/Filter";

const Home = () => {
    return (
        <>
            <section className="relative bg-blue-secondary pt-52 pb-36">
                <div className="layout grid grid-cols-2 gap-x-8 ">
                    <div className="flex flex-col justify-center space-y-4 col-span-1">
                        <h1 className="text-4xl font-bold">
                            Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h1>
                        <p className="text-sm font-light">
                            Selamat datang di Binar Car Rental. Kami menyediakan
                            mobil kualitas terbaik dengan harga terjangkau.
                            Selalu siap melayani kebutuhanmu untuk sewa mobil
                            selama 24 jam.
                        </p>
                    </div>
                </div>
                <Filter />
                {/* ======== car image ======== */}
                <img
                    className="absolute bottom-0 right-container h-407px "
                    src="./images/img_car.png"
                    alt="car"
                />
            </section>
        </>
    );
};

export default Home;
