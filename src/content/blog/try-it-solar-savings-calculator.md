---
title: "Try It: How Much Could You Save With Solar?"
date: "2024-07-20"
category: "Solar Tips & Tricks"
excerpt: "Use our interactive calculator to estimate your potential monthly and annual savings by switching to solar."
image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80"

---

One of the questions we hear most often is: "how much will I actually save?" Instead of just giving you a formula, try the calculator below — enter your current monthly electricity bill and see an estimate instantly.

<div class="savings-calc">
  <label for="billInput">Your current monthly electricity bill (KSh)</label>
  <input type="number" id="billInput" placeholder="e.g. 8000" />
  <button id="calcBtn">Calculate My Savings</button>

  <div id="calcResult" class="calc-result" style="display:none;">
    <div class="result-row">
      <span>Estimated monthly savings</span>
      <strong id="monthlySavings">-</strong>
    </div>
    <div class="result-row">
      <span>Estimated annual savings</span>
      <strong id="annualSavings">-</strong>
    </div>
    <p class="disclaimer">This is a rough estimate assuming ~80% bill offset. Contact us for a free, accurate assessment based on your actual usage.</p>
  </div>
</div>

<style>
  .savings-calc {
    background: #f8fafc;
    border: 1px solid #e1e5eb;
    border-radius: 12px;
    padding: 1.8rem;
    margin: 2rem 0;
  }

  .savings-calc label {
    display: block;
    font-weight: 600;
    color: #1E3A8A;
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
  }

  .savings-calc input {
    width: 100%;
    padding: 0.9rem;
    border: 2px solid #e1e5eb;
    border-radius: 8px;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .savings-calc input:focus {
    outline: none;
    border-color: #FFA500;
  }

  .savings-calc button {
    width: 100%;
    background: #FFA500;
    color: white;
    border: none;
    padding: 0.9rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .savings-calc button:hover {
    background: #e69500;
  }

  .calc-result {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid #e1e5eb;
  }

  .result-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 0;
    font-size: 1rem;
  }

  .result-row strong {
    color: #FFA500;
    font-size: 1.2rem;
  }

  .disclaimer {
    margin-top: 1rem;
    font-size: 0.85rem;
    color: #888;
    line-height: 1.5;
  }
</style>

<script>
  document.getElementById('calcBtn').addEventListener('click', function () {
    const bill = parseFloat(document.getElementById('billInput').value);
    const resultBox = document.getElementById('calcResult');

    if (isNaN(bill) || bill <= 0) {
      alert('Please enter a valid monthly bill amount.');
      return;
    }

    const monthlySavings = bill * 0.8;
    const annualSavings = monthlySavings * 12;

    document.getElementById('monthlySavings').textContent =
      'KSh ' + monthlySavings.toLocaleString('en-KE', { maximumFractionDigits: 0 });
    document.getElementById('annualSavings').textContent =
      'KSh ' + annualSavings.toLocaleString('en-KE', { maximumFractionDigits: 0 });

    resultBox.style.display = 'block';
  });
</script>

Ready to turn this estimate into a real plan? [Get in touch with our team](/#contact) for a free, personalized assessment based on your actual roof space and energy usage.