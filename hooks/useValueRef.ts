import * as React from "react";

import { useSafeLayoutEffect} from "@/hooks/useSafeLayoutEffect";


function useValueRef<T>(props: T) {
  const ref = React.useRef<T>(props);

  useSafeLayoutEffect(() => {
    ref.current = props;
  });

  return ref;
}

export { useValueRef };
