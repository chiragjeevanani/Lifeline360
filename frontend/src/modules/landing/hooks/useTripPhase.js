import { useEffect, useState } from 'react';

export const ambulanceSteps = [
  { k: 'Request raised', d: 'Pickup from your saved address, emergency contact attached.', status: 'Finding a nearby ambulance…', eta: '—' },
  { k: 'Driver accepted', d: 'A verified driver accepts and starts navigating to you.', status: 'Driver assigned · on the way', eta: '7 min' },
  { k: 'Live tracking', d: 'Watch the vehicle on the map and call through a masked line.', status: 'Arriving at pickup', eta: '2 min' },
  { k: 'To the hospital', d: 'Destination details shared — the driver heads straight there.', status: 'En route to City Hospital', eta: '9 min' },
];

// Cycles through the four phases of an ambulance trip.
export function useTripPhase(interval = 2800) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % ambulanceSteps.length), interval);
    return () => clearInterval(id);
  }, [interval]);
  return [phase, setPhase];
}
