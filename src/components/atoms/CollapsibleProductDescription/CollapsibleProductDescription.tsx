import { useState, type FC } from "react";

import type { CollapsibleProductDescriptionProps } from "./types";

export const CollapsibleProductDescription: FC<
  CollapsibleProductDescriptionProps
> = ({ description }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <p
      className={`whitespace-pre-line relative ${expanded ? "pb-7" : "line-clamp-3"}`}
    >
      <button
        className={`w-fit text-blue-500 ${expanded ? "left-0" : "right-0"} bottom-0 absolute bg-white backdrop-blur-3xl cursor-pointer`}
        onClick={toggleExpanded}
        aria-expanded={expanded}
      >{`${expanded ? "Read less" : "... Read more"}`}</button>
      {description}
    </p>
  );
};
