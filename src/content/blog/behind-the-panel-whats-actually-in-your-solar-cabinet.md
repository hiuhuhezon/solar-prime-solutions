---
title: "Behind the Panel: What Should Actually Be in Your Solar Cabinet"
date: "2026-09-05"
category: "Solar Literacy"
excerpt: "The panels go up, the cabinet gets mounted, the installer hands you a remote and leaves. Here's what's supposed to be behind that locked door — and the questions that tell you whether it actually is."
image: "/images/miss-counsult.jpg"
---

There's a second moment in almost every solar installation where you get sold something you can't verify — and unlike the sizing conversation, this one happens after the money's already changed hands. The panels go up, the battery cabinet gets mounted against a wall, wires disappear into conduit, and the installer closes the door and hands you a remote control. Unless someone's told you what's supposed to be in there, you have no way of checking whether it actually is.

This isn't about learning to install your own system — please don't try that. It's about knowing what a proper job looks like on the inside, so a shortcut doesn't sit quietly behind a locked panel for the next five years, waiting to become an expensive surprise.

<img src="/images/solar-betteries.jpg"  alt="Open solar battery cabinet showing wiring and components">

## The charge controller: the part doing the most thinking

If your system charges batteries straight from the panels — most off-grid and hybrid setups do — a charge controller sits between the two. Its whole job is to stop the panels from overcharging or damaging the battery. But not every charge controller does that job the same way, and this is one of the easier places for a quote to get quietly downgraded.

There are two types worth knowing by name. PWM {Pulse Width Modulation} is the older, cheaper option, and it wastes a fair chunk of the power your panels are generating, especially once panel voltage runs higher than battery voltage. MPPT {Maximum Power Point Tracking} is smarter — it constantly hunts for the maximum power your panels can give at that moment, regardless of temperature or cloud cover, and typically pulls 20–30% more usable energy out of the exact same panels.

<div class="callout">
  <strong>The question that exposes this instantly:</strong> ask your technician, "Is this a PWM or MPPT controller, and why did you pick it for my system?" A straight answer is a good sign. A blank stare, or discovering you were never told which one you got, is worth a second look before final payment.
</div>

## Isolators and breakers: the parts that exist so nothing catches fire

<img src="/images/isolators.png"  alt="isolators and circuit breaker">

Somewhere in a properly wired cabinet, there needs to be a way to physically cut off the panels from the rest of the system, the battery from the inverter, and the inverter from your house wiring — each one on its own. These are your DC and AC isolators, and their entire purpose is making sure a fault, a repair, or an emergency doesn't mean someone has to touch live wiring to sort it out.

Breakers do a related job from a different angle: they trip before an overcurrent fault turns into overheated wiring and, eventually, a fire. A cabinet with panels, a battery and an inverter but no visible switches or breakers anywhere is missing a safety layer that no installer should treat as optional, small system or not.

## Surge protection: cheap, boring, and easy to skip

Kenya's grid and weather both throw voltage spikes at your system from time to time — a lightning strike somewhere nearby, a grid fault, power snapping back on after KPLC restores supply. A surge protection device (SPD) is a small, unglamorous component whose only job is soaking up that spike before it reaches your inverter or battery — which happen to be the two most expensive things in the whole system to replace.

It's also one of the easiest parts to leave out quietly, because the system runs perfectly normally without one — right up until the day a spike gets through and it doesn't. If your cabinet has no SPD and nobody's brought it up, that's worth asking about.

## Cable sizing: invisible, but it decides whether things overheat

Every cable is rated for how much current it can safely carry before it starts generating heat it shouldn't. Undersized cabling is one of the most common places cost gets shaved off a quote, mostly because it's cheap to do and completely invisible once the conduit goes on — until cables start running warm under real load, insulation slowly degrades, and you're staring down a fire risk years later that gave zero warning.

You can't inspect cable gauge yourself in most cases, but you can absolutely ask the pointed version of the question: "What size cable did you run between the battery and the inverter, and is that rated for my system's maximum current?" Someone who sized it properly will have that number ready without needing to think about it.

## Earthing: the one that protects you, not the equipment

Everything above protects the system. Earthing protects the person standing next to it. A proper earth connection gives fault current a safe path to travel instead of through whoever happens to touch a faulty casing at the wrong moment. It's usually a physical earth rod or a tie-in to your building's existing earthing — and it's one of the few things on this list where "we'll sort it later" should never be an acceptable answer, since its entire purpose is covering the failure nobody saw coming.

## Battery management and airflow: the difference between a battery and a hazard

<div class="image-pair">
  <img src="/images/batteries managed.png" alt="Managed battery bank with BMS monitoring">
  <img src="/images/management.png" alt="Battery management system close-up">
</div>

If you're on lithium batteries, there should be a Battery Management System — either built into the battery itself or added as a separate unit — quietly watching cell balance, temperature and charge limits in the background. It's what stops one cell inside the battery from being overcharged or running hot even when everything looks completely fine from the outside.

Just as important, and far more overlooked, is the physical space that battery lives in. Battery cabinets need airflow — heat buildup shortens a battery's lifespan, and in a poorly ventilated setup it becomes a genuine safety concern rather than just a performance one. A battery sealed tight inside a small box sitting in direct sun is a warning sign no matter how good the battery itself is.

<div class="checklist-widget">
  <h3>Your cabinet, checked</h3>
  <p class="checklist-sub">Next time you're standing in front of your own cabinet — or one an installer just finished — tick off what you can actually see.</p>

  <div class="check-row">
    <input type="checkbox" id="c1" />
    <label for="c1">DC and AC isolators are visible and clearly labelled</label>
  </div>
  <div class="check-row">
    <input type="checkbox" id="c2" />
    <label for="c2">A surge protection device is fitted</label>
  </div>
  <div class="check-row">
    <input type="checkbox" id="c3" />
    <label for="c3">Cable gauge was confirmed for my system's max current</label>
  </div>
  <div class="check-row">
    <input type="checkbox" id="c4" />
    <label for="c4">There's a proper earth connection, not just a bare wire</label>
  </div>
  <div class="check-row">
    <input type="checkbox" id="c5" />
    <label for="c5">I know whether my charge controller is PWM or MPPT</label>
  </div>
  <div class="check-row">
    <input type="checkbox" id="c6" />
    <label for="c6">My battery cabinet has airflow, not sealed dead air</label>
  </div>

  <div class="checklist-output">
    <span id="checkCount">0 of 6 confirmed</span>
    <p id="checkMsg" class="checklist-msg">Every box you can't tick is a fair question to ask your technician.</p>
  </div>
</div>

## Reading your cabinet after today

None of this asks you to become an electrician. It just asks you to treat "the system works" and "the system was installed properly" as two separate claims, because only one of them is visible from a remote control on your wall. Before signing off on an install, it's completely fair to ask to see the isolators, ask what's guarding against surges, ask how the battery is ventilated, and ask what cable gauge was used — and to expect a straight answer to all four, not a shrug.

Put together with knowing your kWh from your kVA, that's enough working knowledge to sit through any consultation, actually watch what's going into your wall, and know exactly when it's worth asking one more question before you sign.

<style>
  .callout {
    background: #fff4df;
    border-left: 4px solid #FFA500;
    border-radius: 8px;
    padding: 1rem 1.2rem;
    margin: 1.8rem 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .checklist-widget {
    background: #f8fafc;
    border: 1px solid #e1e5eb;
    border-radius: 14px;
    padding: 1.8rem;
    margin: 2rem 0;
  }

  .checklist-widget h3 {
    margin: 0 0 0.3rem;
    color: #1E3A8A;
  }

  .checklist-sub {
    color: #64748b;
    font-size: 0.9rem;
    margin: 0 0 1.2rem;
  }

  .check-row {
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    padding: 0.55rem 0;
    border-bottom: 1px solid #eef1f5;
  }

  .check-row:last-of-type {
    border-bottom: none;
  }

  .check-row input[type="checkbox"] {
    margin-top: 0.2rem;
    width: 18px;
    height: 18px;
    accent-color: #FFA500;
    flex-shrink: 0;
    cursor: pointer;
  }

  .check-row label {
    font-size: 0.92rem;
    color: #1a1a1a;
    line-height: 1.5;
    cursor: pointer;
  }

  .checklist-output {
    margin-top: 1.3rem;
    padding-top: 1.1rem;
    border-top: 2px solid #FFA500;
  }

  #checkCount {
    display: block;
    font-weight: 700;
    color: #1E3A8A;
    font-size: 1.05rem;
  }

  .checklist-msg {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #94a3b8;
    line-height: 1.5;
  }

  @media (max-width: 640px) {
    .checklist-widget { padding: 1.3rem; }
  }
  .image-pair {
  display: flex;
  gap: 1rem;
  margin: 1.8rem 0;
}

.image-pair img {
  width: 50%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
}

@media (max-width: 640px) {
  .image-pair {
    flex-direction: column;
  }
  .image-pair img {
    width: 100%;
  }
}
</style>

<script>
  function updateChecklist() {
    const boxes = document.querySelectorAll('.checklist-widget input[type="checkbox"]');
    const total = boxes.length;
    let checked = 0;
    boxes.forEach(b => { if (b.checked) checked++; });

    document.getElementById('checkCount').textContent = checked + ' of ' + total + ' confirmed';

    const msg = document.getElementById('checkMsg');
    if (checked === total) {
      msg.textContent = "That's a cabinet you can trust. Well installed.";
    } else if (checked === 0) {
      msg.textContent = "Every box you can't tick is a fair question to ask your technician.";
    } else {
      msg.textContent = "Good start — the unticked ones are exactly what to ask about next.";
    }
  }

  document.querySelectorAll('.checklist-widget input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', updateChecklist);
  });

  updateChecklist();
</script>