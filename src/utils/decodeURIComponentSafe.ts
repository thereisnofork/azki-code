const decodeURIComponentSafe = (encoded: string | string[]): string => {
  try {
    if (typeof encoded === "string") {
      return decodeURIComponent(encoded);
    }
    return "";
  } catch (e) {
    console.error("Invalid URI encoding", e);
    return "";
  }
};

export default decodeURIComponentSafe;
