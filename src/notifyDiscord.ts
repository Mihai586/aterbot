// src/notifyDiscord.ts
export async function notifyDiscord() {
    const webhookUrl = "https://discord.com/api/webhooks/1403366777110532096/De7X62aPAMXZdFtl_26qMzhR3eeqH53RmvpMdtOjVRzeZjHREiXHERB7uZsQ7jBwAAVO";
    
    const message = `🟩🟩🟩🟩🟩🟩🟩🟩🟩
------------------------------
server opened
Ping: @Minecraft
------------------------------
🟩🟩🟩🟩🟩🟩🟩🟩🟩`;

    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                content: message
            })
        });
        console.log("✅ Discord notification sent");
    } catch (error) {
        console.error("❌ Failed to send Discord notification:", error);
    }
}
