export async function handler(event) {

  try {

    if (!event.body) {
      return {
        statusCode: 200,
        body: JSON.stringify({ reply: "AI endpoint running" })
      };
    }

    const { message, sensor } = JSON.parse(event.body);

    const sensorInfo = sensor
      ? `Current sensor data:
Temperature: ${sensor.temperature}°C
Humidity: ${sensor.humidity}%
Light: ${sensor.light} lux
Air Quality: ${sensor.airQuality}
pH Level: ${sensor.phLevel}
Growth Rate: ${sensor.growthRate} g/L/d`
      : "No sensor data available.";

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            {
              role: "system",
              content: `You are a spirulina farming expert.
Use the sensor data to give advice about spirulina cultivation.
Answer only spirulina related questions in one short sentence.

${sensorInfo}`
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    const data = await response.json();

    console.log("Groq response:", data);

    const reply =
      data?.choices?.[0]?.message?.content ||
      data?.choices?.[0]?.text ||
      "No response";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply })
    };

  } catch (error) {

    console.error("Function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "AI service error" })
    };

  }

}