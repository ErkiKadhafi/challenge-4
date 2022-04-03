import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

const CustomListbox = ({
    label = "Label",
    options = [
        { name: "Choose an option", default: true },
        { name: "Option 1" },
        { name: "Option 2" },
        { name: "Option 3" },
    ],
    icon = null,
}) => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="w-full">
            <Listbox value={selected} onChange={setSelected}>
                <Listbox.Label className="text-xs font-light">
                    {label}
                </Listbox.Label>
                <div className="relative mt-1">
                    <Listbox.Button
                        className={({ open }) =>
                            `border ${
                                open ? "border-green-primary" : null
                            } relative w-full py-2 pl-3 pr-10 text-left bg-white cursor-pointer rounded-sm`
                        }
                    >
                        <span className="block truncate text-xs font-light">
                            {selected.name}
                        </span>
                        {icon ? (
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                {icon}
                            </span>
                        ) : null}
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute w-full mt-1 overflow-auto bg-white text-xs rounded-sm max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {options.map((person, personIdx) => {
                                return !person.default ? (
                                    <Listbox.Option
                                        key={personIdx}
                                        className={({ active, selected }) =>
                                            `cursor-default select-none relative p-2.5  ${
                                                active || selected
                                                    ? "text-green-primary bg-green-secondary font-bold"
                                                    : ""
                                            } `
                                        }
                                        value={person}
                                    >
                                        <span>{person.name}</span>
                                    </Listbox.Option>
                                ) : null;
                            })}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default CustomListbox;
