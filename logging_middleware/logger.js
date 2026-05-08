const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs";

async function Log(stack, level, packageName, message) {
  try {
    const token = localStorage.getItem("access_token");

    const response = await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify({
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      }),
    });

    return await response.json();
  } catch (error) {
    console.log("Log error:", error.message);
  }
}

export default Log;
