document.getElementById("send").addEventListener("click", async () => {
    const userInput = document.getElementById("message").value;
    
    const response = await fetch("https://https://club-0doe.onrender.com/chat", {  // Itt a szerver URL-jét kell megadni
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    document.getElementById("chatbox").innerHTML += `<p>Bot: ${data.reply}</p>`;
});

