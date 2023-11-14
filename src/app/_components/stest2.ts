import { fetchData } from "../stest2/data";

export default function stest2() {
  console.log("hook stest2");
  function use(promise) {
    console.log("<><><> ", promise.status);
    if (promise.status === "fulfilled") {
      return promise.value;
    } else if (promise.status === "rejected") {
      throw promise.reason;
    } else if (promise.status === "pending") {
      throw promise;
    } else {
      promise.status = "pending";
      promise.then(
        (result) => {
          promise.status = "fulfilled";
          promise.value = result;
        },
        (reason) => {
          promise.status = "rejected";
          promise.reason = reason;
        }
      );
      throw promise;
    }
  }

  function getData(artistId) {
    console.log("getData");
    return use(fetchData(`/${artistId}/albums`));
  }

  return [use, getData];
}
