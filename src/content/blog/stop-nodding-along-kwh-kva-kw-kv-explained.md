---
title: "Stop Nodding Along: What kWh, kVA, kW and kV Actually Mean for Your Solar System"
date: "2026-08-29"
category: "Solar Literacy"
excerpt: "Your technician throws around kWh, kVA, kW and kV like you already know the difference. You probably don't — and that gap is exactly where overselling happens. Here's the plain-language breakdown, plus a calculator that shows you the trick installers rely on most."
image: "/images/learnsolar.png"
---

There's a moment in almost every solar consultation where the technician starts talking numbers, and you nod. He says the inverter is rated at 5kVA. You nod. He mentions your battery holds 5kWh. You nod again. Somewhere in there, kW and kV get mentioned too, and by the end of the meeting you've agreed to buy something you can't actually describe.

That gap — between nodding and understanding — is where homeowners get sized wrong, oversold, or quietly downgraded on components without noticing. None of these four terms are complicated once someone breaks them apart. This post does exactly that, and gives you a tool at the end that shows you the one conversion installers hope you never ask about.

<img src="/images/monitoring.png"  alt="Solar inverter display showing power readings">
<div class="stat-grid">
  <div class="stat-card">
    <span class="stat-num">0.8</span>
    <span class="stat-label">Typical power factor used to convert kVA to real, usable kW</span>
  </div>
  <div class="stat-card">
    <span class="stat-num">4</span>
    <span class="stat-label">Units homeowners are expected to understand with zero explanation</span>
  </div>
  <div class="stat-card">
    <span class="stat-num">1</span>
    <span class="stat-label">Question that exposes an undersized inverter in under a minute</span>
  </div>
</div>

## kW: the speed at which power is being used, right now

A kilowatt (kW) measures how much power something is drawing at a given moment. Your kettle might pull 2kW while it's boiling. Your fridge pulls closer to 0.15kW while it's running. kW is instantaneous — it tells you nothing about how long that draw lasts, only how hard the appliance is pulling at that exact second.

This matters because when someone tells you your solar setup "produces 3kW," they're describing a rate, not a total. It's the same idea as speed on a car dashboard — useful, but only half the story.

## kWh: the total, and the number that actually costs you money

A kilowatt-hour (kWh) is what you get when you multiply that rate by time. Run a 1kW appliance for one hour, and you've used 1kWh. Run a 100W bulb for ten hours, and you've also used 1kWh. This is the unit on your Kenya Power bill, and it's the number your entire solar sizing should be built around — not the kW rating of any single appliance.

This is also where installers can quietly cut corners. A battery advertised at "5kWh" sounds generous until you learn that lithium batteries are typically only discharged to 80–90% of their rated capacity to protect their lifespan, meaning your real usable energy is closer to 4–4.5kWh. Ask for usable capacity, not just the number printed on the spec sheet.

<img src="/images/battery-connectons.jfif"  alt="Battery bank installed in a home">

## kVA: the number that hides the real story about your inverter

This is where most confusion — and most overselling — happens. kVA (kilovolt-amps) measures *apparent* power, while kW measures *real* power. In a perfect world, these would be the same number. In the real world, a fraction of the power an inverter handles gets lost to reactive load — energy that flows through the system but never does useful work — and the ratio between real and apparent power is called the power factor.

Here's why it matters practically: an inverter rated at 5kVA is not automatically able to deliver 5kW of real, usable power to your appliances. Depending on the power factor (commonly around 0.8 for mixed residential loads), that same 5kVA inverter might only be reliably delivering around 4kW. If your technician quotes you a system size purely in kVA without ever mentioning power factor, you may be buying less real capacity than the number on the invoice suggests.

<div class="callout">
  <strong>The question that exposes this instantly:</strong> ask your technician, "What's the power factor you're using, and what does that mean my real kW output is?" A technician who can answer immediately is doing an honest job. A technician who looks uncomfortable or changes the subject is one worth double-checking before you sign.
</div>

## kV: the one you'll rarely deal with directly, but should still recognize

A kilovolt (kV) measures electrical pressure, or voltage — how forcefully electricity is being pushed through a circuit. Most residential solar setups operate at low voltage (your household 240V is 0.24kV), so you won't see kV used much in a home quote. It shows up more in commercial installations, grid connections, and anywhere higher-voltage equipment is involved. If a technician quotes kV on a residential job, it's usually referring to the grid-side connection specs, not anything you need to size around personally.

## Try it: see the kVA-to-kW gap for yourself

The calculator below shows exactly what happens between the number printed on an inverter and the power you can actually rely on. Enter the kVA rating from any quote you've received, adjust the power factor, and watch the real usable kW shift.

<div class="calc-widget">
  <h3>kVA to Real kW Calculator</h3>
  <p class="calc-sub">Enter the inverter's kVA rating and slide the power factor to see your true usable output.</p>

  <div class="calc-row-input">
    <label for="kvaInput">Inverter rating (kVA)</label>
    <input type="number" id="kvaInput" value="5" min="0.5" step="0.5" />
  </div>

  <div class="calc-row-input">
    <label for="pfSlider">Power factor: <span id="pfValue">0.8</span></label>
    <input type="range" id="pfSlider" min="0.6" max="1" step="0.05" value="0.8" />
  </div>

  <div class="calc-output">
    <div class="calc-out-row">
      <span>Real usable power</span>
      <strong id="outKw">4.0 kW</strong>
    </div>
    <div class="calc-out-row">
      <span>Power "lost" to reactive load</span>
      <strong id="outLost">1.0 kW</strong>
    </div>
  </div>
  <p class="calc-note">This is the gap between the number on the inverter's nameplate and what it can actually deliver to your appliances. Always ask which figure a quote is built on.</p>
</div>

## Reading a quote after today

Once these four terms stop blurring together, a solar quote turns from a wall of numbers into something you can actually interrogate. Check whether your daily consumption is quoted in kWh, whether battery capacity is usable or rated, whether the inverter's kVA figure has an honest power factor attached, and whether kV even belongs in a residential conversation at all. None of this requires an electrical background — it just requires knowing what each letter is quietly doing behind the number.

The next post in this series walks through what should physically be behind your panel and battery cabinet — the components a technician might not point out unless you know to ask. Together, these two pieces give you enough working knowledge to sit through any consultation without nodding at something you don't understand.

<style>
  .stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 2rem 0;
  }

  .stat-card {
    background: linear-gradient(135deg, #1E3A8A 0%, #24439e 100%);
    color: #fff;
    border-radius: 12px;
    padding: 1.4rem 1rem;
    text-align: center;
  }

  .stat-num {
    display: block;
    font-size: 1.8rem;
    font-weight: 800;
    color: #FFA500;
    margin-bottom: 0.4rem;
  }

  .stat-label {
    font-size: 0.85rem;
    color: #dbe4ff;
    line-height: 1.4;
  }

  .calc-widget {
    background: #f8fafc;
    border: 1px solid #e1e5eb;
    border-radius: 14px;
    padding: 1.8rem;
    margin: 2rem 0;
  }

  .calc-widget h3 {
    margin: 0 0 0.3rem;
    color: #1E3A8A;
  }

  .calc-sub {
    color: #64748b;
    font-size: 0.9rem;
    margin: 0 0 1.2rem;
  }

  .calc-row-input {
    padding: 0.7rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .calc-row-input label {
    font-weight: 600;
    color: #1a1a1a;
    font-size: 0.9rem;
  }

  .calc-row-input input[type="number"] {
    padding: 0.5rem 0.7rem;
    border: 1px solid #e1e5eb;
    border-radius: 8px;
    font-size: 0.95rem;
    max-width: 160px;
  }

  .calc-row-input input[type="range"] {
    accent-color: #FFA500;
  }

  .calc-output {
    margin-top: 1.4rem;
    padding-top: 1.2rem;
    border-top: 2px solid #FFA500;
  }

  .calc-out-row {
    display: flex;
    justify-content: space-between;
    padding: 0.45rem 0;
    font-size: 0.95rem;
  }

  .calc-out-row strong {
    color: #1E3A8A;
    font-size: 1.05rem;
  }

  .calc-note {
    margin-top: 1rem;
    font-size: 0.8rem;
    color: #94a3b8;
    line-height: 1.5;
  }

  .callout {
    background: #fff4df;
    border-left: 4px solid #FFA500;
    border-radius: 8px;
    padding: 1rem 1.2rem;
    margin: 1.8rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 640px) {
    .stat-grid { grid-template-columns: 1fr; }
  }
</style>

<script>
  function updatePfCalc() {
    const kva = parseFloat(document.getElementById('kvaInput').value) || 0;
    const pf = parseFloat(document.getElementById('pfSlider').value);
    document.getElementById('pfValue').textContent = pf.toFixed(2);

    const realKw = kva * pf;
    const lostKw = kva - realKw;

    document.getElementById('outKw').textContent = realKw.toFixed(1) + ' kW';
    document.getElementById('outLost').textContent = lostKw.toFixed(1) + ' kW';
  }

  document.getElementById('kvaInput').addEventListener('input', updatePfCalc);
  document.getElementById('pfSlider').addEventListener('input', updatePfCalc);

  updatePfCalc();
</script>