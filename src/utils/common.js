// browser local store
export const setLocalStore = (keys, vals, valToStrs = []) => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let val = vals[i]
    const valToStr = valToStrs[i]

    if (valToStr) {
      val = JSON.stringify(val);
    }
    window.localStorage.setItem(key, val);
  }
}


export const getLocalStore = (keys, notStrs = []) => {
  let obj = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const notStr = notStrs[i]

    if (notStr) {
      obj[key] = JSON.parse(window.localStorage.getItem(key));
    }else {
      obj[key] = window.localStorage.getItem(key);
    }
  }
  
  return obj
}

export const removeLocalStore = (keys) => {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    window.localStorage.removeItem(key);
  }
}