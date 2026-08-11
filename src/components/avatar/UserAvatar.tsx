import React from "react";
import { auth } from "@/root/auth";
import SignIn from "../buttons/SignIn";
import SignInModal from "../modals/SignInModal";

const UserAvatar = async () => {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <div className="flex">
      {name ? (
        <>
          <div className="avatar">
            <div className="size-10 rounded-full">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={
                  session?.user?.image
                    ? session.user.image
                    : "https://placeimg.com/192/192/people"
                }
              />
            </div>
          </div>
          <h3 className="min-w-0 text-sm font-medium wrap-break-word">
            {name}
          </h3>
        </>
      ) : (
        <SignInModal />
      )}
    </div>
  );
};

export default UserAvatar;
