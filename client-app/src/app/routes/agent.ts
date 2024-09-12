import axios, { AxiosResponse } from "axios";
import { Activity } from "../models/activity";

// Utility function to introduce a delay in the response, used for simulating slow network or loading times
const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api"; // Setting the default base URL for all axios requests

// Axios interceptor to handle response delays and simulate network latency
axios.interceptors.response.use(async (response) => {
  try {
    await sleep(1000); // Introducing a 1-second delay before returning the response
    return response; // Returning the response after the delay
  } catch (error) {
    console.log(error); // Logging any errors encountered during the delay
    return await Promise.reject(error); // Rejecting the promise with the error
  }
});

// Generic function to extract the data portion of the Axios response
const responseBody = <T>(response: AxiosResponse<T>) => response.data;

// Object containing generic HTTP request methods
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody), // GET request handler
  post: <T>(url: string, body: object) =>
    axios.post<T>(url, body).then(responseBody), // POST request handler
  put: <T>(url: string, body: object) =>
    axios.put<T>(url, body).then(responseBody), // PUT request handler
  delete: <T>(url: string) => axios.delete<T>(url).then(responseBody), // DELETE request handler
};

// Object containing specific request methods for interacting with activities
const Activities = {
  list: () => requests.get<Activity[]>("/activities"), // Fetches a list of activities
  details: (id: string) => requests.get<Activity>(`/activities/${id}`), // Fetches details of a specific activity
  create: (activity: Activity) => requests.post<void>("/activities", activity), // Creates a new activity
  update: (activity: Activity) =>
    requests.put<void>(`/activities/${activity.id}`, activity), // Updates an existing activity
  delete: (id: string) => requests.delete<void>(`/activities/${id}`), // Deletes an activity by its ID
};

// Agent object that exports the Activities API for use throughout the application
const agent = {
  Activities,
};

export default agent; // Exporting the agent object for use in other parts of the application
