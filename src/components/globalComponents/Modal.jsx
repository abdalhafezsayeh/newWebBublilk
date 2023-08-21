import React, { useEffect } from "react";

function ModalCom({
  visible,
  onClose,
  title,
  icon,
  children,
  closeOnBackDroupPress,
  showHeader = true,
  contentClassName,
}) {
  

  useEffect(() => {

    visible ? document.body.classList.add('overflow-y-hidden') : document.body.classList.remove('overflow-y-hidden');


  }, [visible])


  if (!visible) return null;

  return (
    <div className="animate__animated animate__fadeIn fixed top-0 inset-0 z-[100] flex justify-center items-center bg-black bg-opacity-50  backdrop-blur-sm">
      {/* BackDroup */}
      <div
        onClick={() => (closeOnBackDroupPress ? onClose() : null)}
        className="absolute top-0 left-0 z-50 w-full h-full "
      ></div>
      {/* Content */}
      <div className={`${contentClassName ? contentClassName : 'max-w-[70%] min-w-[90%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[30%] w-max '} z-[55]`}>
        {/* Header Modal */}

        {showHeader && (
          <div className="flex justify-between p-2 border-b-2 bg-white rounded-t-[16px] ">
            <span className="flex items-center">
              {icon && (
                <span className="border-main border-2 mr-2 rounded-lg">
                  {icon}
                </span>
              )}
              <span className="font-medium text-sm">{title}</span>
            </span>
            <span onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer text-gray-400 hover:rotate-180 duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        )}

        {/* Body Modal  */}
        {children}
      </div>
    </div>
  );
}

export default ModalCom;
