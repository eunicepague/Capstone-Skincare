import axios from "axios";
import swal from "sweetalert2";
import router from "./routes";

axios.defaults.withCredentials = true;

const api = import.meta.env.VITE_API;

const axiosRequest = axios.create({
  baseURL: api,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem("ECCOM_TOKEN")}`,
  },
});
// RESPONSE
// Add a response interceptor
axiosRequest.interceptors.response.use(
  function (response) {
    // Do something with response data
    // console.log(response);
    if (response.status == 201) {
      swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#F69A22",
      });
    } else if (response.status == 202) {
      swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#F69A22",
      });
    } else if (response.status == 204) {
      swal.fire({
        title: "Success",
        text: response.data.message,
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#F69A22",
      });
    }
    return response;
  },
  function (error) {
    // Do something with response error

    if (error.response.status == 401) {
      // store.commit("SET_ERROR", 401);
      // router.push("/login");
      const currentURL = window.location.pathname;
      if (
        currentURL != "/login" &&
        window.localStorage.getItem("ECCOM_TOKEN") == null
      ) {
        window.location.href = "/login";
      }
      
      else if (window.localStorage.getItem("ECCOM_TOKEN") != null) {
        window.location.href = "/";
      }
    }
    if (error.response.status == 422) {
      const item = error.response.data.errors;
      let errors = "";
      for (const key in item) {
        errors += `${item[key]}<br>`;
        //console.log(`${key}: ${item[key]}`);
      }

      //const errors = Object.keys(error.response.data.errors);

      //console.log(errors);
      swal.fire({
        title: error.response.data.message,
        icon: "error",
        html: errors,
        confirmButtonText: "OK",
      });
      // console.log(error.response.data)
      // store.commit("SET_ERROR", 422);
    }

    if (error.response.status == 500) {
      swal.fire({
        title: "Server Error",
        text: "Internal server error occurred. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
      // console.log(error.response.data)
      // store.commit("SET_ERROR", 422);
    }

    if (error.response.status == undefined) {
      // router.push("/login");
    }

    return Promise.reject(error);
  }
);

export default axiosRequest;
