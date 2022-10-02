export const isQuotaExceeded = (e) => {
  var quotaExceeded = false;
  if (e) {
    if (e.code) {
      switch (e.code) {
        case 22:
          quotaExceeded = true;
          break;
        case 1014: // Firefox
          if (e.name === "NS_ERROR_DOM_QUOTA_REACHED") {
            quotaExceeded = true;
          }
          break;
        default:
          return null;
      }
    } else if (e.number === -2147024882) {
      // IE8
      quotaExceeded = true;
    }
    return quotaExceeded;
  }
};
