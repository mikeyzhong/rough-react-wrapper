import React from "react";

interface ReactRoughProps {
  children?: React.ReactNode;
  [key: string]: any; // For any additional props
}

declare function ReactRough(props: ReactRoughProps): React.JSX.Element;

declare namespace ReactRough {
  var displayName: string;
}

export default ReactRough;
