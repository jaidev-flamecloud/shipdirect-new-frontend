var hostname = window.location.href;
const env = {
  BASE_API_URL: hostname.includes("localhost")
    ? "http://localhost:7400"
    : "https://api.shipdirect.io",
  RECAPTCHA_KEY: "6LdzEW0jAAAAAO9STzvTa6tYCnGTWy9-eg5NYiAZ",
  downloadConfig: {
    responseType: "blob",
  },
};

export default env;
