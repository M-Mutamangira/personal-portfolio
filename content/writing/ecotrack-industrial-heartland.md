---
title: 'Tracking today Protecting tomorrow: Building EcoTrack for South Africa’s Industrial Heartland'
date: '2026-10-24'
description: "How we built an offline-first environmental intelligence platform for Mpumalanga's coalfield industrial heartland."
---

Mpumalanga’s Highveld is an industrial marvel and an ecological pressure cooker. Responsible for roughly 83% of South Africa’s coal production and home to twelve coal-fired power stations, the region is designated as an Air Quality Priority Area. For decades, the true cost of heavy power generation and mining has been measured not just in megawatts, but in ambient sulphur dioxide, nitrogen oxides, and acidic runoff into the Olifants River basin.

When Team Artemi9 set out at the start of 2026 for our Information Systems capstone at the University of Johannesburg, the problem seemed straightforward: climate coordination across departments was broken. But as we dug deeper into stakeholder interviews—speaking directly with environmental compliance officers, field coordinators, and plant managers—we discovered the real obstacle wasn’t a lack of concern. It was a failure of operational tooling.

Data was trapped in quarterly spreadsheets, filed in cabinet folders, or emailed weeks after emissions spikes occurred. When an environmental officer needed to report compliance, they were looking in the rearview mirror.

## Moving from Static Reports to Real-Time Telemetry

We designed EcoTrack with a clear thesis: you cannot manage what you do not measure in real time. We shifted our focus from high-level bureaucratic dashboards toward building an active monitoring platform capable of serving both industrial operators and environmental stewards.

Our hardware team assembled modular IoT monitoring stations based on the ESP32 microcontroller, outfitted with calibrated multi-gas sensors (measuring CO, CO₂, SO₂, and particulate matter). These stations were built to survive outdoor deployments and broadcast telemetry directly over lightweight protocols.

Turning raw sensor pulses into actionable decisions required engineering across the full stack. Alongside my teammate Sonke Vilakazi, I worked across the engine room of EcoTrack: building the backend ingestion services, crafting resilient APIs, training our emissions intelligence models, and embedding an AI compliance assistant directly into the interface.

## Engineering Across the Stack: Offline-First and Intelligent

Building for industrial mining pits and rural Mpumalanga is very different from designing a sleek web app for an office in Sandton. When standing on the perimeter of an open-cast mine or alongside agricultural land near the Olifants catchment, cellular towers drop constantly. A system that loses readings or locks up when the network blinks is completely useless in the field.

To solve this, we took several deliberate architectural steps across the stack:

1. **High-Throughput Telemetry Ingestion & APIs:** Working with Sonke, we designed FastAPI endpoints that efficiently receive, validate, and batch time-series sensor packets before persisting them to Supabase. Fast, lightweight serialization ensured our ESP32 nodes could transmit with minimal power draw.
2. **Emissions Intelligence & Predictive Modeling:** Raw parts-per-million (PPM) readings mean little without context. We engineered emissions intelligence services that evaluate baseline drift, calculate air quality index (AQI) ratings, and detect abnormal spikes early—allowing operators to dampen dust suppression or throttle output before exceeding statutory legal thresholds.
3. **An Integrated AI Compliance Assistant:** Environmental compliance manuals and national air quality standards are dense and difficult to cross-reference under operational pressure. We built an AI assistant directly into the console, enabling environmental officers to query complex operational data in plain language (e.g., _"Summarize SO₂ exceedances across Pit B during the night shift"_).
4. **Offline-First PWA with an IndexedDB Outbox:** On the client side, using modern Service Worker caching and an IndexedDB write queue, field inspectors can record manual audit observations, log incident reports, and calibrate sensor stations without an active internet connection. As soon as the device regains cellular reception, changes synchronize seamlessly in the background.
5. **Lightweight Geospatial Mapping:** Rather than loading heavy GIS datasets, we tuned our Mapbox GL integration to render real-time plumes and cluster status indicators with minimal network overhead.

## Validation on the Ground: Makunyula Anthracite Mine

A design looks pristine until you take it into the field. During our pilot phase, we had the opportunity to evaluate EcoTrack’s telemetry workflows against the real-world operational constraints of the Makunyula Anthracite Mine.

The pilot revealed immediate lessons. High-dust environments mean sensor readings fluctuate rapidly; visual smoothing and clear baseline indicators became essential so operators weren't overwhelmed with false panic alerts. Furthermore, battery constraints on deployed stations highlighted the value of our power-efficient telemetry intervals.

Seeing live readings populate the map from a working mine reinforced why we chose our tagline: _Tracking today, protecting tomorrow_. It wasn’t just a slogan; it was our operational contract.

## What Building EcoTrack Taught Us

Building EcoTrack from initial concept to a functioning pilot taught me more about software engineering than any theoretical coursework could.

Great software isn't just about choosing modern frameworks like Next.js and Tailwind CSS; it's about deeply respecting the context in which your application lives. It means writing code that survives network drops, designing APIs that process dirty field data without faltering, and building intelligent tools that turn complex environmental streams into immediate, life-protecting decisions.

As South Africa navigates its Just Energy Transition, bridging the gap between heavy industry and ecological protection will require practical, locally grounded technology. EcoTrack is our contribution to that future.
