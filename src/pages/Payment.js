import { useState } from "react";
import Accordion from "../components/Accordion";
import Filter from "../components/Filter";

const DisclosureBtn = (props) => (
  <div
    className={`flex items-center justify-between ${
      !props.open ? "pb-2" : null
    }`}
  >
    <div className="flex space-x-22px">
      <span className="font-light">Total</span>
      {props.open ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 9L12 15L6 9"
            stroke="#151515"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </div>
    <p>Rp 430.000</p>
  </div>
);
const DisclosureLists = () => (
  <>
    <div className="mb-6">
      <p className="font-bold mb-2">Harga</p>
      <ul className="list-disc pl-5">
        <li>
          <div className="flex justify-between font-light">
            <span>1 Mobil dengan supir</span>
            <span>Rp 430.000</span>
          </div>
        </li>
      </ul>
    </div>
    <div className="mb-6">
      <p className="font-bold mb-2">Biaya Lainnya</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <div className="flex justify-between font-light">
            <span>Pajak</span>
            <span className="text-green-primary">Termasuk </span>
          </div>
        </li>
        <li>
          <div className="flex justify-between font-light">
            <span>Biaya Makan</span>
            <span className="text-green-primary">Termasuk </span>
          </div>
        </li>
      </ul>
    </div>
    <div className="mb-6">
      <p className="font-bold mb-2">Biaya Lainnya</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>
          <div className="flex justify-between font-light">
            <span>Bensin</span>
          </div>
        </li>
        <li>
          <div className="flex justify-between font-light">
            <span>Tol dan parkir</span>
          </div>
        </li>
      </ul>
    </div>
  </>
);

const Payment = () => {
  const banks = ["BCA", "BNI", "Mandiri"];
  const [bankTransfer, setBankTransfer] = useState(null);
  return (
    <>
      <section className="relative bg-blue-secondary pt-133px pb-28">
        <div
          className="layout flex items-center justify-between "
          style={{ maxWidth: "1047px" }}
        >
          <div className="flex space-x-4">
            {/* prettier-ignore */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="#151515" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className="font-bold">Pembayaran</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-blue-primary text-white flex items-center justify-center items-center">
                <span className="text-xs">1</span>
              </div>
              <span>Pilih Metode</span>
            </div>
            <div className="bg-blue-primary h-0.5 w-8"></div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-white text-blue-primary border border-blue-primary flex items-center justify-center items-center">
                <span className="text-xs">2</span>
              </div>
              <span>Pilih Metode</span>
            </div>
            <div className="bg-blue-primary h-0.5 w-8"></div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-white text-blue-primary border border-blue-primary flex items-center justify-center items-center">
                <span className="text-xs">3</span>
              </div>
              <span>Tiket</span>
            </div>
          </div>
        </div>
        <Filter />
      </section>
      <section className="pt-28">
        <div
          className="layout grid grid-cols-5 gap-8"
          style={{ maxWidth: "1047px" }}
        >
          <div
            className="col-span-3 rounded-lg p-6 text-sm mb-6 h-fit"
            style={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            }}
          >
            <h1 className="font-bold mb-4">Pilih Bank Transfer</h1>
            <p>
              Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
              atau Mobile Banking
            </p>
            <ul className="mt-0.5">
              {banks.map((bank, index) => (
                <li
                  key={index}
                  onClick={() => setBankTransfer(bank)}
                  className="flex justify-between items-center text-sm font-light py-4 border-b"
                >
                  <div className="space-x-4 flex items-center">
                    <div className="block py-1.5 w-16 border rounded text-center">
                      {bank}
                    </div>
                    <span className="block">BCA Transfer</span>
                  </div>
                  {bankTransfer === bank ? (
                    <>
                      {/* prettier-ignore  */}
                      <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L6 12L1 7" stroke="#5CB85F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-span-2 rounded-lg p-6 text-sm h-fit"
            style={{
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="mb-12">
              <h1 className="text-sm font-bold mb-2">Nama/Tipe Mobil</h1>
              <ul className="flex text-sm space-x-4 font-light text-gray-placeholder">
                <li className="flex space-x-2">
                  {/* prettier-ignore  */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.1666 17.5001V15.8334C19.1661 15.0948 18.9203 14.3774 18.4678 13.7937C18.0153 13.2099 17.3817 12.793 16.6666 12.6084" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5653 12.8512 11.7174 12.5 10.8334 12.5H4.16671C3.28265 12.5 2.43481 12.8512 1.80968 13.4763C1.18456 14.1014 0.833374 14.9493 0.833374 15.8333V17.5" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.3334 2.6084C14.0504 2.79198 14.6859 3.20898 15.1397 3.79366C15.5936 4.37833 15.8399 5.09742 15.8399 5.83757C15.8399 6.57771 15.5936 7.2968 15.1397 7.88147C14.6859 8.46615 14.0504 8.88315 13.3334 9.06673" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M7.49996 9.16667C9.34091 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34091 2.5 7.49996 2.5C5.65901 2.5 4.16663 3.99238 4.16663 5.83333C4.16663 7.67428 5.65901 9.16667 7.49996 9.16667Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>4 orang</span>
                </li>
                <li className="flex space-x-2">
                  {/* prettier-ignore */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M16.1667 12.5002C16.0558 12.7515 16.0227 13.0303 16.0717 13.3007C16.1207 13.571 16.2496 13.8204 16.4417 14.0168L16.4917 14.0668C16.6467 14.2216 16.7696 14.4054 16.8535 14.6078C16.9373 14.8101 16.9805 15.027 16.9805 15.246C16.9805 15.465 16.9373 15.6819 16.8535 15.8842C16.7696 16.0866 16.6467 16.2704 16.4917 16.4252C16.3369 16.5801 16.1531 16.7031 15.9508 16.7869C15.7484 16.8708 15.5316 16.914 15.3125 16.914C15.0935 16.914 14.8766 16.8708 14.6743 16.7869C14.472 16.7031 14.2882 16.5801 14.1334 16.4252L14.0834 16.3752C13.887 16.183 13.6375 16.0542 13.3672 16.0052C13.0969 15.9561 12.8181 15.9892 12.5667 16.1002C12.3202 16.2058 12.11 16.3812 11.962 16.6048C11.8139 16.8283 11.7344 17.0903 11.7334 17.3585V17.5002C11.7334 17.9422 11.5578 18.3661 11.2452 18.6787C10.9327 18.9912 10.5087 19.1668 10.0667 19.1668C9.62468 19.1668 9.20076 18.9912 8.8882 18.6787C8.57563 18.3661 8.40004 17.9422 8.40004 17.5002V17.4252C8.39359 17.1493 8.30431 16.8818 8.1438 16.6574C7.98329 16.433 7.75899 16.2621 7.50004 16.1668C7.24869 16.0559 6.96988 16.0228 6.69955 16.0718C6.42922 16.1208 6.17977 16.2497 5.98337 16.4418L5.93337 16.4918C5.77858 16.6468 5.59477 16.7697 5.39244 16.8536C5.19011 16.9375 4.97323 16.9806 4.75421 16.9806C4.53518 16.9806 4.3183 16.9375 4.11597 16.8536C3.91364 16.7697 3.72983 16.6468 3.57504 16.4918C3.42008 16.337 3.29715 16.1532 3.21327 15.9509C3.1294 15.7486 3.08623 15.5317 3.08623 15.3127C3.08623 15.0936 3.1294 14.8768 3.21327 14.6744C3.29715 14.4721 3.42008 14.2883 3.57504 14.1335L3.62504 14.0835C3.81715 13.8871 3.94603 13.6376 3.99504 13.3673C4.04406 13.097 4.01097 12.8182 3.90004 12.5668C3.7944 12.3204 3.619 12.1101 3.39543 11.9621C3.17185 11.814 2.90986 11.7346 2.64171 11.7335H2.50004C2.05801 11.7335 1.63409 11.5579 1.32153 11.2453C1.00897 10.9328 0.833374 10.5089 0.833374 10.0668C0.833374 9.6248 1.00897 9.20088 1.32153 8.88832C1.63409 8.57576 2.05801 8.40016 2.50004 8.40016H2.57504C2.85087 8.39371 3.11838 8.30443 3.34279 8.14392C3.5672 7.98341 3.73814 7.75911 3.83337 7.50016C3.9443 7.24882 3.97739 6.97 3.92838 6.69967C3.87936 6.42934 3.75049 6.17989 3.55837 5.9835L3.50837 5.9335C3.35341 5.77871 3.23048 5.59489 3.14661 5.39256C3.06273 5.19023 3.01956 4.97335 3.01956 4.75433C3.01956 4.5353 3.06273 4.31843 3.14661 4.1161C3.23048 3.91377 3.35341 3.72995 3.50837 3.57516C3.66316 3.4202 3.84698 3.29727 4.04931 3.2134C4.25164 3.12952 4.46851 3.08635 4.68754 3.08635C4.90657 3.08635 5.12344 3.12952 5.32577 3.2134C5.5281 3.29727 5.71192 3.4202 5.86671 3.57516L5.91671 3.62516C6.11311 3.81728 6.36255 3.94615 6.63288 3.99517C6.90321 4.04418 7.18203 4.01109 7.43337 3.90016H7.50004C7.74651 3.79453 7.95672 3.61913 8.10478 3.39555C8.25285 3.17198 8.3323 2.90998 8.33337 2.64183V2.50016C8.33337 2.05814 8.50897 1.63421 8.82153 1.32165C9.13409 1.00909 9.55801 0.833496 10 0.833496C10.4421 0.833496 10.866 1.00909 11.1786 1.32165C11.4911 1.63421 11.6667 2.05814 11.6667 2.50016V2.57516C11.6678 2.84332 11.7472 3.10531 11.8953 3.32888C12.0434 3.55246 12.2536 3.72786 12.5 3.8335C12.7514 3.94443 13.0302 3.97752 13.3005 3.9285C13.5709 3.87948 13.8203 3.75061 14.0167 3.5585L14.0667 3.5085C14.2215 3.35354 14.4053 3.2306 14.6076 3.14673C14.81 3.06286 15.0268 3.01968 15.2459 3.01968C15.4649 3.01968 15.6818 3.06286 15.8841 3.14673C16.0864 3.2306 16.2702 3.35354 16.425 3.5085C16.58 3.66328 16.7029 3.8471 16.7868 4.04943C16.8707 4.25176 16.9139 4.46864 16.9139 4.68766C16.9139 4.90669 16.8707 5.12357 16.7868 5.3259C16.7029 5.52823 16.58 5.71204 16.425 5.86683L16.375 5.91683C16.1829 6.11323 16.0541 6.36268 16.005 6.633C15.956 6.90333 15.9891 7.18215 16.1 7.4335V7.50016C16.2057 7.74664 16.3811 7.95684 16.6047 8.10491C16.8282 8.25297 17.0902 8.33243 17.3584 8.3335H17.5C17.9421 8.3335 18.366 8.50909 18.6785 8.82165C18.9911 9.13421 19.1667 9.55813 19.1667 10.0002C19.1667 10.4422 18.9911 10.8661 18.6785 11.1787C18.366 11.4912 17.9421 11.6668 17.5 11.6668H17.425C17.1569 11.6679 16.8949 11.7474 16.6713 11.8954C16.4477 12.0435 16.2723 12.2537 16.1667 12.5002V12.5002Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Manual</span>
                </li>
                <li className="flex space-x-2">
                  {/* prettier-ignore */}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M2.5 8.3335H17.5" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M13.3334 1.6665V4.99984" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M6.66663 1.6665V4.99984" stroke="#8A8A8A" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>tahun 2020</span>
                </li>
              </ul>
            </div>
            <Accordion
              discButton={DisclosureBtn}
              discPanel={DisclosureLists}
              discPanelAs="div"
            />
            <div className="border-t pt-4 mb-6">
              <div className="flex justify-between text-sm font-bold">
                <span>Total</span>
                <span>Rp 430.000</span>
              </div>
            </div>
            <button
              disabled={bankTransfer === null ? true : false}
              className={`w-full px-3 py-2 font-bold ${
                bankTransfer === null
                  ? "bg-green-limeGreen"
                  : "bg-green-primary hover:bg-green-secondary hover:text-green-primary"
              }  text-white transition-all duration-200 rounded-sm`}
            >
              Bayar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
