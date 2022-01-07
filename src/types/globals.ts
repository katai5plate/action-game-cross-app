declare global {
  interface Window {
    WEBPACK_VARIABLES: {
      meta: {
        title: string;
      };
      engine: {
        width: number;
        height: number;
        resize: "width" | "height" | "fit" | "none";
      };
    };
  }
}

export {};
