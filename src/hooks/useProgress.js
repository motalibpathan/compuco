import { useContext, useEffect } from "react";
import { ProgressContext } from "../App";
import { useOnLoadImages } from "./useOnLoadImages";

const useProgress = (ref) => {
  const [progressRef] = useContext(ProgressContext);
  const imagesLoaded = useOnLoadImages(ref);

  if (!imagesLoaded) {
    progressRef?.current?.continuousStart();
  }
  useEffect(() => {
    if (imagesLoaded) {
      progressRef.current.complete();
    }
  }, [progressRef, imagesLoaded]);
};

export default useProgress;
