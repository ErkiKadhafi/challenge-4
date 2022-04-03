import { Disclosure, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Accordion = ({ discButton, discPanel, discPanelAs }) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <Disclosure defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full text-sm font-medium text-left ">
                {discButton}
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
                  as={discPanelAs}
                  className={`${
                    discPanelAs === "ul"
                      ? "list-disc px-5 text-gray-placeholder space-y-2 "
                      : null
                  } mt-4 text-sm `}
                >
                  {discPanel}
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
