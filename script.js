document.getElementById("analyzeBtn").addEventListener("click", async function () {
  const sku = document.getElementById("skuInput").value.trim();
  const resultBox = document.getElementById("resultBox");
  const resultText = document.getElementById("resultText");

  if (!sku) {
    resultText.innerText = "SKU 코드를 입력해주세요.";
    resultBox.style.display = "block";
    return;
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbyCQmmpDJRYqqXxnJoL9ZWTbF5bfjASxYNGb7Xp6y1GtAaITM2dnUZV7bBuBw6rtnCPg/exec?sku=" + sku);
    const data = await response.json();

    if (data.status === "success") {
      const item = data.item;
      resultText.innerHTML = `
        <b>SKU:</b> ${item.sku}<br>
        <b>국내가:</b> ${item.domestic_price.toLocaleString()}원<br>
        <b>해외 평균가:</b> ${item.avg_price.toLocaleString()}원<br>
        <b>해외 수수료:</b> ${item.fee.toLocaleString()}원<br>
        <b>배송비:</b> ${item.shipping.toLocaleString()}원<br>
        <b>예상 순이익:</b> ${item.profit.toLocaleString()}원<br>
        <b>판매량(30일):</b> ${item.volume}개<br>
        <b>루카5지수:</b> ${item.score}점<br>
        <b>분석 결과:</b> ${item.recommendation}
      `;
    } else {
      resultText.innerText = "분석 결과를 찾을 수 없습니다.";
    }

    resultBox.style.display = "block";
  } catch (error) {
    resultText.innerText = "분석 중 오류가 발생했습니다.";
    resultBox.style.display = "block";
  }
});
