import { useContext, useEffect } from "react";
import { ProgressContext } from "../App";
import { useOnLoadImages } from "./useOnLoadImages";

const useProgress = (ref) => {
  const [progressRef] = useContext(ProgressContext);
  const imagesLoaded = useOnLoadImages(ref);

  if (!imagesLoaded) {
    progressRef?.current?.continuousStart(20, 2);
  }
  useEffect(() => {
    if (imagesLoaded) {
      progressRef.current.complete();
    }
    window.scrollTo(0, 0);
  }, [progressRef, imagesLoaded]);
};

export default useProgress;
