import { useEffect } from "react";

// import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./ModalStyled";

// const modalRoot = document.querySelector("#modal-root");

export default function Modal({ children, onToggle }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        onToggle();
      }
    }
    return function cleanUpKeyDown() {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onToggle();
    }
  };

  // return createPortal(
  //   <ModalBackdrop onClick={handleBackdropClick}>
  //     <ModalContent>{children}</ModalContent>
  //   </ModalBackdrop>,
  //   modalRoot
  // );
  return (
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>
  );
}

// import { useEffect } from "react";
// import { createPortal } from "react-dom";
// import { ModalBackdrop, ModalContent } from "./ModalStyled";

// const modalRoot = document.querySelector("#modal-root");

// export default function Modal({ children, onToggle }) {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.code === "Escape") {
//         onToggle();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [onToggle]);

//   const handleBackdropClick = (event) => {
//     if (event.currentTarget === event.target) {
//       onToggle();
//     }
//   };

//   // Проверка наличия modalRoot перед использованием
//   return modalRoot
//     ? createPortal(
//         <ModalBackdrop onClick={handleBackdropClick}>
//           <ModalContent>{children}</ModalContent>
//         </ModalBackdrop>,
//         modalRoot
//       )
//     : null || "rootModal don't created";
// }
