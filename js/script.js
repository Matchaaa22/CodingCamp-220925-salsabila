welcomeMessage();

/// Welcome Message
function welcomeMessage() {
    /// Prompt user for their name
    let username = prompt("Enter your name:");
    /// If a name is entered, display it in the header; otherwise, show a default message
    if (username) {

        /// Display the username in the header
        document.getElementById("username").innerHTML = username;
    } else {

        /// If no name is entered, show a default welcome message
        alert("Welcome to my portfolio!");
    }
}

/// Form Validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const commentList = document.getElementById("commentList");

  // Validasi manual
  if (name === "" || email === "" || message === "") {
    alert("Semua field harus diisi!");
    return;
  }

  // Buat elemen komentar baru
  const li = document.createElement("li");
  li.className = "border p-4 rounded bg-gray-100";
  li.innerHTML = `
    <p><strong>${name}</strong> (${email})</p>
    <p>${message}</p>
  `;

  // Masukkan ke dalam list komentar
  commentList.appendChild(li);

  // Reset form
  document.getElementById("messageForm").reset();
}
