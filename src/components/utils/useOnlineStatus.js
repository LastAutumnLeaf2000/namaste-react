import { useState, useEffect } from "react";
useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      //returns a boolean

      setonlineStatus(false);
    });

    window.addEventListener("online", () => {
      //returns a boolean value

      setonlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
