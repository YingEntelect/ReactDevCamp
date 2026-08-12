import { useState, type FC } from "react";

import type { CollapsibleProductDescriptionProps } from "./types";

export const CollapsibleProductDescription: FC<
  CollapsibleProductDescriptionProps
> = ({ description }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <p className={` relative ${expanded ? "pb-7" : "line-clamp-3"}`}>
      <span
        className={`w-fit text-blue-500 ${expanded ? "left-0" : "right-0"} bottom-0 absolute bg-white backdrop-blur-3xl`}
        onClick={toggleExpanded}
      >{`${expanded ? "Read less" : "... Read more"}`}</span>
      {description}
    </p>
  );
};
