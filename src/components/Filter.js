import { useLocation } from "react-router-dom";
import CustomListbox from "./Listbox";

const Filter = () => {
  const location = useLocation();
  const driverType = {
    label: "Tipe Driver",
    options: [
      { name: "Pilih Tipe Driver", default: true },
      { name: "Dengan Sopir" },
      { name: "Tanpa Sopir" },
    ],
    // prettier-ignore
    icon: (
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M1.25 1.75L5.75 6.25L10.25 1.75" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
  };
  const pickupTime = {
    label: "Waktu Jemput/Ambil",
    options: [
      { name: "Pilih Waktu", default: true },
      { name: "08.00 WIB" },
      { name: "09.00 WIB" },
      { name: "10.00 WIB" },
      { name: "11.00 WIB" },
      { name: "12.00 WIB" },
    ],
    // prettier-ignore
    icon: (
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M1.25 1.75L5.75 6.25L10.25 1.75" stroke="#8A8A8A" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
  };
  return (
    <div
      className="w-11/12 rounded-lg p-6 bg-white absolute -bottom-16 z-10 left-1/2 -translate-x-1/2"
      style={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.15)",
        maxWidth: "1047px",
      }}
    >
      {location.pathname === "/search" ? (
        <span className="block mb-4 font-bold text-sm">Pencarianmu</span>
      ) : null}
      {location.pathname === "/payment" ? (
        <span className="block mb-4 font-bold text-sm">Detail Pesananmu</span>
      ) : null}
      <div className="flex justify-between space-x-4">
        {location.pathname === "/payment" ? (
          <>
            <div className="text-sm space-y-2">
              <h1 className="font-light">Tipe Driver</h1>
              <h2 className="text-gray-placeholder">Dengan Sopir</h2>
            </div>
            <div className="text-sm space-y-2">
              <h1 className="font-light">Tanggal</h1>
              <h2 className="text-gray-placeholder">27 Mar 2022</h2>
            </div>
            <div className="text-sm space-y-2">
              <h1 className="font-light">Waktu Jemput/Antar</h1>
              <h2 className="text-gray-placeholder">10.00 WIB</h2>
            </div>
            <div className="text-sm space-y-2">
              <h1 className="font-light">Jumlah Penumpang (opsional)</h1>
              <h2 className="text-gray-placeholder">-</h2>
            </div>
          </>
        ) : (
          <>
            <CustomListbox
              label={driverType.label}
              icon={driverType.icon}
              options={driverType.options}
            />
            <div className="flex flex-col space-y-1 pt-2 w-full">
              <label className="text-xs font-light">Tanggal</label>
              <input
                type="date"
                placeholder="Pilih Tanggal"
                className="border w-full focus:outline-none focus:border-green-primary py-1 rounded-sm pl-3 pr-1 text-sm font-light truncate"
              />
            </div>
            <CustomListbox
              label={pickupTime.label}
              icon={pickupTime.icon}
              options={pickupTime.options}
            />
            <div className="flex flex-col space-y-1 pt-2 w-full">
              <label className="text-xs font-light">
                Jumlah Penumpang (optional)
              </label>
              <input
                type="text"
                placeholder="Jumlah Penumpang"
                className="border w-full focus:outline-none focus:border-green-primary py-1.5 rounded-sm pl-3 pr-1 text-sm font-light truncate"
              />
            </div>
            <div className="flex items-end">
              {location.pathname === "/" ? (
                <button className="text-sm px-3 py-2 font-bold bg-green-primary text-white hover:bg-green-secondary hover:text-green-primary transition-all duration-200 rounded-sm">
                  Cari Mobil
                </button>
              ) : null}
              {location.pathname === "/search" ? (
                <button className="text-sm px-3 py-2 font-bold border border-blue-primary text-blue-primary hover:bg-blue-secondary transition-all duration-200 rounded-sm">
                  Edit
                </button>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
