import { useContext } from "react";
import { BlogsContext } from "../context/BlogsContext";

export const useWorkoutsContext = () => {
  const context = useContext(BlogsContext);

  if (!context) {
    throw Error("useBlogsContext must be used inside an BlogsContexProvider");
  }

  return context;
};
