import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Awesomely Eating`;
  }, [title]);
};

export default useTitle;
