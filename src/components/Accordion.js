import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Accordion = () => {
    return (
        <div className="w-full">
            <div className="w-full">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex items-center justify-between w-full text-sm font-medium text-left ">
                                <span className="font-bold">
                                    Refund, Reschedule, Overtime
                                </span>
                                {open ? (
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
                            </Disclosure.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform opacity-0"
                                enterTo="transform opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform opacity-100"
                                leaveTo="transform opacity-0"
                            >
                                <Disclosure.Panel
                                    as="ul"
                                    className="list-disc px-5 mt-4 text-sm space-y-2 text-gray-placeholder"
                                >
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp
                                        75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada
                                        tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>Tidak termasuk akomodasi penginapan</li>

                                    <li>
                                        Tidak termasuk biaya makan sopir Rp
                                        75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada
                                        tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                    <li>
                                        Tidak termasuk biaya makan sopir Rp
                                        75.000/hari
                                    </li>
                                    <li>
                                        Jika overtime lebih dari 12 jam akan ada
                                        tambahan biaya Rp 20.000/jam
                                    </li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            </div>
        </div>
    );
};

export default Accordion;
