async function fetchQuote() {
    const button = document.querySelector("button");
    button.disabled = true;
    button.textContent = "Loading...";
  
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      document.getElementById("quote").textContent = `"${data.content}"`;
      document.getElementById("author").textContent = `– ${data.author}`;
    } catch (error) {
      document.getElementById("quote").textContent = "Oops! Failed to load quote.";
      document.getElementById("author").textContent = "";
      console.error("Fetch error:", error);
    }
  
    button.disabled = false;
    button.textContent = "New Quote";
  }
  