import React from "react";
import { auth } from "@/root/auth";
import SignIn from "../buttons/SignIn";

const UserAvatar = async () => {
  const session = await auth();
  const name = session?.user?.name;

  return (
    <div>
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
        <SignIn />
      )}
    </div>
  );
};

export default UserAvatar;
