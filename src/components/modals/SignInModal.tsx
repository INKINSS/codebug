import React from "react";
import SignIn from "../buttons/SignIn";

const SignInModal = () => {
  return (
    <div className="flex w-full">
      <button className="btn w-full" popoverTarget="my-modal-1">
        Iniciar Sesion
      </button>

      <div className="modal" id="my-modal-1" popover="auto">
        <div className="modal-box">
          <h3 className="font-bold text-lg">buenas</h3>
          <div className="flex flex-col gap-2 mt-5">
            <SignIn provider="github" />
            <SignIn provider="google" />
          </div>
          <div className="modal-action">
            <button popoverTarget="my-modal-1" popoverTargetAction="toggle">
              cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
