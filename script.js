function calculateProfit() {
  const cost = parseInt(document.getElementById('cost').value);
  const price = parseFloat(document.getElementById('price').value);
  const shipping = parseInt(document.getElementById('shipping').value);
  const exchangeRate = 1350;

  if (isNaN(cost) || isNaN(price) || isNaN(shipping)) {
    document.getElementById('result').innerText = '모든 값을 입력해 주세요.';
    return;
  }

  const revenueKRW = price * exchangeRate;
  const profit = revenueKRW - cost - shipping;

  document.getElementById('result').innerText = `예상 순이익: ${profit.toLocaleString()}원`;
}