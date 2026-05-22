import { Button, Column, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type AdminQuoteAlertProps = {
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
};

export default function AdminQuoteAlert(props: AdminQuoteAlertProps) {
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
  } = props;

  const rows: Array<[string, string]> = [
    ["Name", `${firstName} ${lastName}`.trim() || "—"],
    ["Email", clientEmail || "—"],
    ["Phone", clientPhone || "—"],
    ["Event Type", eventType || "—"],
    ["Event Date", eventDate || "—"],
    ["Venue", venue || "—"],
    ["Booth Type", boothType || "—"],
    ["Duration", hireDuration || "—"],
    ["Guest Count", guestCount || "—"],
    ["Message", message || "—"],
  ];

  return (
    <EmailLayout preview={`New quote request — ${eventType || "Event"} on ${eventDate || "TBD"}`}>
      <Text style={emailStyles.heading}>New Quote Request Received</Text>

      <Text style={{ color: "#6b7280", fontSize: "13px", margin: "0 0 20px" }}>
        Submitted {submittedAt}
      </Text>

      <Section style={emailStyles.summaryBox}>
        <Text style={emailStyles.summaryHeading}>Client Details</Text>
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
        This is an automated alert from photoboothhireswansea.co.uk
      </Text>
    </EmailLayout>
  );
}
