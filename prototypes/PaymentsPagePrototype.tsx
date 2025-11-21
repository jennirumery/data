import React, { useMemo, useState } from "react";

// Tiny, generic UI stubs so this runs without shadcn/etc.
// Replace these with your real design system components.
const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className = "", ...props }) => (
  <div className={`rounded-lg border bg-white ${className}`} {...props}>{children}</div>
);
const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, className = "", ...props }) => (
  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${className}`} {...props}>
    {children}
  </span>
);
const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = "", ...props }) => (
  <button
    className={`inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-xs font-medium ${className}`}
    {...props}
  >
    {children}
  </button>
);

const SAMPLE_PAYMENTS = [
  {
    id: "PMT-1027",
    createdAt: "2025-11-21T09:15:00",
    type: "Card",
    method: "Visa ending 4242",
    clientName: "Taylor Smith",
    patientName: "Moose",
    createdBy: "Alex (CSR)",
    amount: 286.5,
    status: "Posted" as const,
    invoices: [
      { id: "INV-8843", description: "Sick exam and diagnostics", amount: 210.0 },
      { id: "INV-8844", description: "Medications", amount: 76.5 }
    ],
    pendingNote: "Funds settled to account on Nov 22, 2025"
  },
  {
    id: "PMT-1028",
    createdAt: "2025-11-21T10:02:00",
    type: "ACH",
    method: "Owner portal",
    clientName: "Jordan Lee",
    patientName: "Pumpkin",
    createdBy: "Online",
    amount: 142.0,
    status: "Pending" as const,
    invoices: [
      { id: "INV-8851", description: "Dental cleaning", amount: 142.0 }
    ],
    pendingNote: "Expected to clear in 1–2 business days"
  },
  {
    id: "PMT-1029",
    createdAt: "2025-11-21T10:37:00",
    type: "Cash",
    method: "Front desk",
    clientName: "Chris Johnson",
    patientName: "Luna",
    createdBy: "Morgan (CSR)",
    amount: 68.25,
    status: "Posted" as const,
    invoices: [
      { id: "INV-8853", description: "Vaccine booster", amount: 68.25 }
    ],
    pendingNote: "Not applicable for cash payments"
  },
  {
    id: "PMT-1030",
    createdAt: "2025-11-21T11:05:00",
    type: "Card",
    method: "Mastercard ending 9981",
    clientName: "Sam Patel",
    patientName: "Poppy",
    createdBy: "Alex (CSR)",
    amount: 312.75,
    status: "Pending" as const,
    invoices: [
      { id: "INV-8856", description: "Surgery deposit", amount: 312.75 }
    ],
    pendingNote: "Card authorized – capture in nightly batch"
  }
];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(value);

const formatDateTime = (value: string) => {
  const date = new Date(value);
  return {
    date: date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    }),
    time: date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit"
    })
  };
};

const PaymentsPagePrototype: React.FC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "Posted" | "Pending">("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "Card" | "ACH" | "Cash">("all");
  const [selectedId, setSelectedId] = useState<string | null>(SAMPLE_PAYMENTS[0]?.id ?? null);

  const selectedPayment = useMemo(
    () => SAMPLE_PAYMENTS.find(p => p.id === selectedId) ?? null,
    [selectedId]
  );

  const filteredPayments = useMemo(() => {
    return SAMPLE_PAYMENTS.filter(p => {
      const matchesSearch =
        !search.trim() ||
        [
          p.id,
          p.clientName,
          p.patientName,
          p.createdBy,
          ...p.invoices.map(i => i.id)
        ]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus = statusFilter === "all" || p.status === statusFilter;
      const matchesType = typeFilter === "all" || p.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [search, statusFilter, typeFilter]);

  const totals = useMemo(() => {
    const todayTotal = SAMPLE_PAYMENTS.reduce((sum, p) => sum + p.amount, 0);
    const pendingTotal = SAMPLE_PAYMENTS.filter(p => p.status === "Pending").reduce(
      (sum, p) => sum + p.amount,
      0
    );
    return { todayTotal, pendingTotal };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: "24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>Payments</h1>
            <p style={{ marginTop: 4, fontSize: 13, maxWidth: 520, color: "#475569" }}>
              Dedicated payments page with a running list of all payments. Click any payment to see who
              made it, what it paid for, and whether it is still pending.
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <Card className="shadow-sm" style={{ padding: 8, display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 10, textTransform: "uppercase", color: "#64748b" }}>
                Total captured today
              </span>
              <span style={{ fontSize: 14, fontWeight: 600 }}>{formatCurrency(totals.todayTotal)}</span>
            </Card>
            <Card className="shadow-sm" style={{ padding: 8, display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 10, textTransform: "uppercase", color: "#64748b" }}>
                Pending
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#b45309" }}>
                {formatCurrency(totals.pendingTotal)}
              </span>
            </Card>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1.5fr)", gap: 16 }}>
          {/* Left: list */}
          <Card style={{ display: "flex", flexDirection: "column", minHeight: 400 }}>
            <div style={{ padding: 12, borderBottom: "1px solid #e2e8f0" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap"
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 500 }}>Payments run today</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <input
                    placeholder="Search by client, patient, ID"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{
                      height: 30,
                      padding: "4px 8px",
                      fontSize: 12,
                      borderRadius: 4,
                      border: "1px solid #cbd5f5",
                      minWidth: 180
                    }}
                  />
                  <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value as any)}
                    style={{ height: 30, fontSize: 12, borderRadius: 4, border: "1px solid #cbd5f5" }}
                  >
                    <option value="all">All status</option>
                    <option value="Posted">Posted</option>
                    <option value="Pending">Pending</option>
                  </select>
                  <select
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value as any)}
                    style={{ height: 30, fontSize: 12, borderRadius: 4, border: "1px solid #cbd5f5" }}
                  >
                    <option value="all">All types</option>
                    <option value="Card">Card</option>
                    <option value="ACH">ACH</option>
                    <option value="Cash">Cash</option>
                  </select>
                </div>
              </div>
            </div>

            <div style={{ flex: 1, overflowY: "auto" }}>
              {filteredPayments.map(p => {
                const time = formatDateTime(p.createdAt);
                const active = p.id === selectedId;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedId(p.id)}
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: 12,
                      padding: "10px 12px",
                      border: "none",
                      borderBottom: "1px solid #e2e8f0",
                      background: active ? "#e0f2fe" : "#ffffff",
                      cursor: "pointer",
                      textAlign: "left"
                    }}
                  >
                    <div style={{ width: 80, fontSize: 11, color: "#64748b" }}>
                      <div>{time.time}</div>
                      <div>{time.date}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 8,
                          flexWrap: "wrap"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          <span style={{ fontWeight: 500 }}>{p.clientName}</span>
                          <span style={{ fontSize: 11, color: "#64748b" }}>for {p.patientName}</span>
                          <Badge
                            className={
                              p.status === "Posted"
                                ? "border-transparent bg-emerald-50 text-emerald-700"
                                : "border-transparent bg-amber-50 text-amber-700"
                            }
                          >
                            {p.status}
                          </Badge>
                          <Badge className="border bg-slate-50 text-slate-700">
                            {p.type}
                          </Badge>
                        </div>
                        <span style={{ fontWeight: 600 }}>{formatCurrency(p.amount)}</span>
                      </div>
                      <div style={{ marginTop: 4, fontSize: 11, color: "#64748b", display: "flex", gap: 6 }}>
                        <span>Payment ID {p.id}</span>
                        <span>•</span>
                        <span>{p.method}</span>
                        <span>•</span>
                        <span>Entered by {p.createdBy}</span>
                      </div>
                    </div>
                  </button>
                );
              })}

              {filteredPayments.length === 0 && (
                <div style={{ padding: 24, textAlign: "center", fontSize: 13, color: "#64748b" }}>
                  No payments match your filters.
                </div>
              )}
            </div>
          </Card>

          {/* Right: details */}
          <Card style={{ padding: 12, display: "flex", flexDirection: "column" }}>
            <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 8, marginBottom: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>Payment details</div>
              <p style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>
                Open any payment from the list to see what was paid, which invoices were included, and
                whether it is still pending.
              </p>
            </div>

            {!selectedPayment && (
              <div style={{ padding: 24, fontSize: 13, color: "#64748b" }}>
                Select a payment from the left to see details.
              </div>
            )}

            {selectedPayment && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Amount + status */}
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: 11, textTransform: "uppercase", color: "#64748b" }}>
                      Payment amount
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 600 }}>
                      {formatCurrency(selectedPayment.amount)}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <Badge
                      className={
                        selectedPayment.status === "Posted"
                          ? "border-transparent bg-emerald-50 text-emerald-700"
                          : "border-transparent bg-amber-50 text-amber-700"
                      }
                    >
                      {selectedPayment.status}
                    </Badge>
                    <Badge className="border bg-slate-50 text-slate-700">
                      {selectedPayment.type} • {selectedPayment.method}
                    </Badge>
                  </div>
                </div>

                {/* Who/when */}
                <div style={{ background: "#f8fafc", borderRadius: 8, padding: 10, fontSize: 12 }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontWeight: 500 }}>{selectedPayment.clientName}</span>
                    <span>•</span>
                    <span>for {selectedPayment.patientName}</span>
                  </div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", color: "#475569" }}>
                    <span>
                      Payment ID{" "}
                      <span style={{ fontFamily: "monospace", fontSize: 11 }}>{selectedPayment.id}</span>
                    </span>
                    <span>Entered by {selectedPayment.createdBy}</span>
                  </div>
                  <div style={{ marginTop: 4, fontSize: 11, color: "#64748b" }}>
                    Created {formatDateTime(selectedPayment.createdAt).date} at{" "}
                    {formatDateTime(selectedPayment.createdAt).time}
                  </div>
                </div>

                {/* Invoices */}
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      color: "#64748b",
                      marginBottom: 4,
                      fontWeight: 600
                    }}
                  >
                    Invoices paid
                  </div>
                  <div style={{ borderRadius: 8, border: "1px solid #e2e8f0", overflow: "hidden" }}>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.3fr 2fr 1fr",
                        background: "#f8fafc",
                        padding: "4px 8px",
                        fontSize: 11,
                        textTransform: "uppercase",
                        color: "#64748b"
                      }}
                    >
                      <span>Invoice</span>
                      <span>Description</span>
                      <span style={{ textAlign: "right" }}>Amount</span>
                    </div>
                    {selectedPayment.invoices.map(inv => (
                      <div
                        key={inv.id}
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1.3fr 2fr 1fr",
                          padding: "6px 8px",
                          borderTop: "1px solid #e2e8f0",
                          fontSize: 12
                        }}
                      >
                        <span style={{ fontFamily: "monospace", fontSize: 11, color: "#475569" }}>
                          {inv.id}
                        </span>
                        <span>{inv.description}</span>
                        <span style={{ textAlign: "right", fontWeight: 500 }}>
                          {formatCurrency(inv.amount)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pending / settlement */}
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: "uppercase",
                      color: "#64748b",
                      marginBottom: 4,
                      fontWeight: 600
                    }}
                  >
                    Pending and settlement details
                  </div>
                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: 8,
                      padding: 10,
                      fontSize: 12,
                      color: "#334155"
                    }}
                  >
                    <div>{selectedPayment.pendingNote}</div>
                    {selectedPayment.status === "Pending" && (
                      <div style={{ marginTop: 4, fontSize: 11, color: "#92400e" }}>
                        This payment is pending – funds have not yet been deposited to your account.
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div
                  style={{
                    borderTop: "1px solid #e2e8f0",
                    paddingTop: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: 11,
                    color: "#64748b",
                    gap: 8,
                    flexWrap: "wrap"
                  }}
                >
                  <span>
                    View-only reference for CSRs and sales. No changes are made from this screen in the prototype.
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    <Button>Print receipt</Button>
                    <Button style={{ background: "#0f766e", color: "white", borderColor: "#0f766e" }}>
                      Open in client account
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentsPagePrototype;
