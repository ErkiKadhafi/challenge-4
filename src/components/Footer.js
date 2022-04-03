import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    return (
        <footer
            className={`${
                location.pathname === "/detail-package" ? "pt-24" : "pt-44"
            }  pb-24`}
        >
            <div className="layout grid grid-cols-12 text-sm font-light">
                <ul className="col-span-3 space-y-4">
                    <li>
                        Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
                    </li>
                    <li>binarcarrental@gmail.com</li>
                    <li>081-233-334-808</li>
                </ul>
                <ul className="col-span-2 space-y-4 font-normal">
                    <li>Our Services</li>
                    <li>Why Us</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
                <div className="col-span-3">
                    <p>Connect with us</p>
                    <ul className="flex space-x-4 mt-4">
                        <li className="bg-blue-primary cursor-pointer    h-8 w-8 flex items-center justify-center rounded-full">
                            {/* prettier-ignore  */}
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferer">
                                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.666504H7.50004C6.39497 0.666504 5.33516 1.10549 4.55376 1.88689C3.77236 2.66829 3.33337 3.7281 3.33337 4.83317V7.33317H0.833374V10.6665H3.33337V17.3332H6.66671V10.6665H9.16671L10 7.33317H6.66671V4.83317C6.66671 4.61216 6.75451 4.4002 6.91079 4.24392C7.06707 4.08763 7.27903 3.99984 7.50004 3.99984H10V0.666504Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-blue-primary cursor-pointer h-8 w-8 flex items-center justify-center rounded-full">
                            {/* prettier-ignore  */}
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1666 1.6665H5.83329C3.53211 1.6665 1.66663 3.53198 1.66663 5.83317V14.1665C1.66663 16.4677 3.53211 18.3332 5.83329 18.3332H14.1666C16.4678 18.3332 18.3333 16.4677 18.3333 14.1665V5.83317C18.3333 3.53198 16.4678 1.6665 14.1666 1.6665Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.3334 9.47476C13.4362 10.1683 13.3178 10.8766 12.9948 11.4989C12.6719 12.1213 12.161 12.6259 11.5347 12.9412C10.9085 13.2564 10.1987 13.3661 9.50653 13.2547C8.81431 13.1433 8.17484 12.8165 7.67907 12.3207C7.1833 11.825 6.85648 11.1855 6.7451 10.4933C6.63371 9.80106 6.74343 9.09134 7.05865 8.46507C7.37386 7.83881 7.87853 7.32788 8.50086 7.00496C9.12319 6.68205 9.8315 6.56359 10.525 6.66643C11.2325 6.77133 11.8874 7.10098 12.3931 7.60668C12.8988 8.11239 13.2285 8.76733 13.3334 9.47476Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.5834 5.4165H14.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-blue-primary cursor-pointer h-8 w-8 flex items-center justify-center rounded-full">
                            {/* prettier-ignore  */}
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferer">
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1667 1.50008C18.3687 2.06298 17.4851 2.4935 16.55 2.77508C16.0482 2.198 15.3812 1.78899 14.6392 1.60335C13.8973 1.41771 13.1163 1.46441 12.4018 1.73712C11.6873 2.00984 11.0737 2.49541 10.6442 3.12818C10.2146 3.76094 9.98979 4.51036 10 5.27508V6.10841C8.53557 6.14639 7.08444 5.82159 5.77588 5.16295C4.46733 4.50431 3.34197 3.53228 2.50004 2.33341C2.50004 2.33341 -0.833292 9.83341 6.66671 13.1667C4.95048 14.3317 2.906 14.9159 0.833374 14.8334C8.33337 19.0001 17.5 14.8334 17.5 5.25008C17.4993 5.01796 17.477 4.78641 17.4334 4.55841C18.2839 3.71966 18.8841 2.66067 19.1667 1.50008V1.50008Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-blue-primary cursor-pointer h-8 w-8 flex items-center justify-center rounded-full">
                            {/* prettier-ignore  */}
                            <a href="https://www.gmail.com/" target="_blank" rel="noreferer">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33329 3.3335H16.6666C17.5833 3.3335 18.3333 4.0835 18.3333 5.00016V15.0002C18.3333 15.9168 17.5833 16.6668 16.6666 16.6668H3.33329C2.41663 16.6668 1.66663 15.9168 1.66663 15.0002V5.00016C1.66663 4.0835 2.41663 3.3335 3.33329 3.3335Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3333 5L9.99996 10.8333L1.66663 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </li>
                        <li className="bg-blue-primary cursor-pointer h-8 w-8 flex items-center justify-center rounded-full">
                            {/* prettier-ignore  */}
                            <a href="https://www.twitch.com/" target="_blank" rel="noreferer">
                                <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3333 8.1665V4.83317M15.5 0.666504H0.5V13.9998H4.66667V17.3332L8 13.9998H12.1667L15.5 10.6665V0.666504ZM7.16667 8.1665V4.83317V8.1665Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 ml-12">
                    <p className="mb-4">Copyright Binar 2022</p>
                    <div className="h-8 w-24 bg-blue-primary"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
