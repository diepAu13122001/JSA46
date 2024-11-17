// 1. Khai báo Array cards
const cards = [
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" },
    { name: "cat", img: "https://via.placeholder.com/100?text=Cat" },
    { name: "dog", img: "https://via.placeholder.com/100?text=Dog" },
    { name: "fish", img: "https://via.placeholder.com/100?text=Fish" },
    { name: "bird", img: "https://via.placeholder.com/100?text=Bird" }
  ];
  
  // 2. Trộn Array ngẫu nhiên
  cards.sort(() => Math.random() - 0.5);
  
  // 3. Biến lưu trạng thái
  let firstCard = null;
  let secondCard = null;
  let score = 0;
  
  // 4. Hiển thị cards lên giao diện
  const grid = document.getElementById("grid");
  const scoreDisplay = document.getElementById("score");
  
  function displayCards() {
    cards.forEach((card, index) => {
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.dataset.name = card.name;
      cardElement.innerHTML = `<img src="${card.img}" alt="${card.name}">`;
      grid.appendChild(cardElement);
  
      cardElement.addEventListener("click", () => flipCard(cardElement));
    });
  }
  
  // 5. Xử lý logic khi click vào card
  function flipCard(card) {
    if (card.classList.contains("flipped") || secondCard) return;
  
    card.classList.add("flipped");
  
    if (!firstCard) {
      firstCard = card;
    } else {
      secondCard = card;
  
      // Dùng setInterval để delay thông báo
      setTimeout(() => {
        checkMatch();
      }, 1000);
    }
  }
  
  // 6. Hàm kiểm tra 2 card giống nhau
  function checkMatch() {
    if (firstCard.dataset.name === secondCard.dataset.name) {
      // Đúng: Ẩn hai card và tăng điểm
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      // Sai: Lật lại cả hai card
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      alert("Not a match!");
    }
  
    // Reset trạng thái
    firstCard = null;
    secondCard = null;
  }
  
  // Khởi động game
  displayCards();
  