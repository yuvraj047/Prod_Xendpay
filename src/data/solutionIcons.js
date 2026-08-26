import { Fingerprint, Receipt, ArrowLeftRight, Wallet, Webhook } from "lucide-react";

// Maps each solution slug to a real, meaning-matched icon rather than a
// generic placeholder glyph — Fingerprint for AEPS' biometric banking,
// Receipt for bill payments, ArrowLeftRight for money movement, Wallet
// for outbound payouts, Webhook for API connectivity.
export const SOLUTION_ICONS = {
  aeps: Fingerprint,
  bbps: Receipt,
  dmt: ArrowLeftRight,
  payouts: Wallet,
  "payment-apis": Webhook,
};
