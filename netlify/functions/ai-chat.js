export async function handler(event) {

  try {

    // Handle GET request safely
    if (!event.body) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          reply: "AI endpoint running"
        })
      };
    }

    const { message } = JSON.parse(event.body);

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content: "You are a spirulina farming expert."
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

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: data.choices?.[0]?.message?.content || "No response"
      })
    };

  } catch (error) {

    console.error("Function error:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "AI service error"
      })
    };

  }

}