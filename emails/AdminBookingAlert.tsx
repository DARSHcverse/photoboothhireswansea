import { Button, Column, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type AdminBookingAlertProps = {
  firstName: string;
  lastName: string;
  clientEmail: string;
  clientPhone: string;
  eventType: string;
  eventDate: string;
  venue: string;
  boothType: string;
  hireDuration: string;
  guestCount: string;
  message: string;
  submittedAt: string;
  invoiceNumber: string;
  price: string;
};

export default function AdminBookingAlert(props: AdminBookingAlertProps) {
  const {
    firstName,
    lastName,
    clientEmail,
    clientPhone,
    eventType,
    eventDate,
    venue,
    boothType,
    hireDuration,
    guestCount,
    message,
    submittedAt,
    invoiceNumber,
    price,
  } = props;

  const rows: Array<[string, string]> = [
    ["Invoice", invoiceNumber || "—"],
    ["Name", `${firstName} ${lastName}`.trim() || "—"],
    ["Email", clientEmail || "—"],
    ["Phone", clientPhone || "—"],
    ["Event Type", eventType || "—"],
    ["Event Date", eventDate || "—"],
    ["Venue", venue || "—"],
    ["Booth Type", boothType || "—"],
    ["Duration", hireDuration || "—"],
    ["Guest Count", guestCount || "—"],
    ["Total Price", price || "—"],
    ["Message", message || "—"],
  ];

  return (
    <EmailLayout preview={`New booking — ${invoiceNumber}`}>
      <Text style={emailStyles.heading}>New Booking Received</Text>

      <Section
        style={{
          backgroundColor: "#0a3d8f",
          borderRadius: "6px",
          margin: "0 0 16px",
          padding: "16px",
          textAlign: "center" as const,
        }}
      >
        <Text
          style={{
            color: "#a8c5ee",
            fontSize: "12px",
            fontWeight: "bold",
            letterSpacing: "0.08em",
            margin: "0 0 4px",
            textTransform: "uppercase" as const,
          }}
        >
          Invoice Number
        </Text>
        <Text
          style={{
            color: "#ffffff",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "0.04em",
            margin: 0,
          }}
        >
          {invoiceNumber}
        </Text>
      </Section>

      <Text style={{ color: "#6b7280", fontSize: "13px", margin: "0 0 20px" }}>
        Submitted {submittedAt}
      </Text>

      <Section style={emailStyles.summaryBox}>
        <Text style={emailStyles.summaryHeading}>Booking Details</Text>
        {rows.map(([label, value]) => (
          <Row key={label} style={{ margin: "6px 0" }}>
            <Column style={{ width: "130px", verticalAlign: "top" }}>
              <Text
                style={{
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: "4px 0",
                }}
              >
                {label}:
              </Text>
            </Column>
            <Column>
              <Text
                style={{
                  color: "#1a1a1a",
                  fontSize: "14px",
                  margin: "4px 0",
                  whiteSpace: "pre-wrap",
                }}
              >
                {value}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      {clientEmail ? (
        <Section style={{ margin: "20px 0" }}>
          <Button href={`mailto:${clientEmail}`} style={emailStyles.button}>
            Reply to {firstName || "client"}
          </Button>
        </Section>
      ) : null}

      <Text style={{ color: "#6b7280", fontSize: "12px", margin: "24px 0 0" }}>
        Invoice {invoiceNumber} has been automatically sent to {clientEmail}
      </Text>
    </EmailLayout>
  );
}
