import { Button, Column, Hr, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type BookingConfirmationProps = {
  firstName: string;
  invoiceNumber: string;
  bookingDate: string;
  eventDate: string;
  eventType: string;
  venue: string;
  boothType: string;
  hireDuration: string;
  guestCount: string;
  price: string;
};

const bookingRows: Array<[string, keyof BookingConfirmationProps]> = [
  ["Invoice Number", "invoiceNumber"],
  ["Booking Date", "bookingDate"],
  ["Event Date", "eventDate"],
  ["Event Type", "eventType"],
  ["Venue", "venue"],
  ["Booth Type", "boothType"],
  ["Hire Duration", "hireDuration"],
  ["Guests", "guestCount"],
];

const tableHeader = {
  backgroundColor: "#0a3d8f",
  color: "#ffffff",
  fontSize: "14px",
  fontWeight: "bold" as const,
  padding: "12px 16px",
  textAlign: "left" as const,
};

const tableCell = {
  borderBottom: "1px solid #e5e7eb",
  color: "#1a1a1a",
  fontSize: "14px",
  padding: "12px 16px",
  verticalAlign: "top" as const,
};

const tableCellAlt = {
  ...tableCell,
  backgroundColor: "#f9fafb",
};

const tableTotalCell = {
  backgroundColor: "#0a0a0a",
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: "bold" as const,
  padding: "14px 16px",
};

export default function BookingConfirmation(props: BookingConfirmationProps) {
  const {
    firstName,
    invoiceNumber,
    boothType,
    hireDuration,
    price,
  } = props;

  return (
    <EmailLayout
      preview={`Booking confirmed — ${invoiceNumber}`}
    >
      <Text style={emailStyles.paragraph}>Hi {firstName || "there"},</Text>

      <Text style={emailStyles.paragraph}>
        Brilliant news — your photo booth is booked! We are really excited to be part of your
        event. Please find your booking confirmation and invoice details below.
      </Text>

      <Section style={emailStyles.confirmedBox}>
        <Row>
          <Column>
            <Text style={emailStyles.confirmedHeader}>Booking Confirmed</Text>
          </Column>
          <Column style={{ textAlign: "right" }}>
            <Text
              style={{
                color: "#16a34a",
                fontSize: "28px",
                fontWeight: "bold",
                lineHeight: 1,
                margin: 0,
              }}
            >
              ✓
            </Text>
          </Column>
        </Row>

        {bookingRows.map(([label, key]) => (
          <Row key={label} style={{ margin: "6px 0" }}>
            <Column style={{ width: "140px", verticalAlign: "top" }}>
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
              <Text style={{ color: "#1a1a1a", fontSize: "14px", margin: "4px 0" }}>
                {props[key] || "—"}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      <Text style={emailStyles.subHeading}>Invoice</Text>

      <table
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{
          border: "1px solid #e5e7eb",
          borderCollapse: "collapse",
          margin: "0 0 16px",
        }}
      >
        <thead>
          <tr>
            <th style={tableHeader}>Description</th>
            <th style={{ ...tableHeader, textAlign: "right" }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCell}>
              <strong>{boothType} Hire</strong>
              <br />
              {hireDuration}
              <br />
              <span style={{ color: "#6b7280", fontSize: "13px" }}>
                Includes: unlimited prints, attendant, props, backdrop, custom strip design
              </span>
            </td>
            <td style={{ ...tableCell, textAlign: "right" }}>{price}</td>
          </tr>
          <tr>
            <td style={tableCellAlt}>VAT (included)</td>
            <td style={{ ...tableCellAlt, textAlign: "right" }}>Included</td>
          </tr>
          <tr>
            <td style={tableCell}>
              Travel
              <br />
              <span style={{ color: "#6b7280", fontSize: "13px" }}>(within 25 miles)</span>
            </td>
            <td style={{ ...tableCell, textAlign: "right" }}>Included</td>
          </tr>
          <tr>
            <td style={tableTotalCell}>TOTAL DUE</td>
            <td style={{ ...tableTotalCell, textAlign: "right" }}>{price}</td>
          </tr>
        </tbody>
      </table>

      <Section style={emailStyles.paymentBox}>
        <Text
          style={{
            color: "#9a3412",
            fontSize: "15px",
            fontWeight: "bold",
            margin: "0 0 8px",
          }}
        >
          💳 Payment Information
        </Text>
        <Text style={{ color: "#1a1a1a", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
          Full payment is due on or before your event date. We will send a payment link closer to
          your event. If you have any questions about payment, just reply to this email.
        </Text>
      </Section>

      <Hr style={emailStyles.divider} />

      <Text style={emailStyles.subHeading}>What Happens Next</Text>

      <ol style={{ color: "#1a1a1a", fontSize: "15px", lineHeight: 1.6, paddingLeft: "20px" }}>
        <li style={{ margin: "6px 0" }}>
          Shan will be in touch to discuss your custom photo strip design and backdrop choice
        </li>
        <li style={{ margin: "6px 0" }}>
          We will confirm your final setup time and venue arrival details closer to the date
        </li>
        <li style={{ margin: "6px 0" }}>
          On the day, we handle everything — setup, the full event, and packdown
        </li>
        <li style={{ margin: "6px 0" }}>
          Your digital photos will be available via your online gallery after the event
        </li>
      </ol>

      <Section style={{ margin: "20px 0" }}>
        <Button
          href="https://photoboothhireswansea.co.uk/gallery"
          style={emailStyles.button}
        >
          View Our Gallery
        </Button>
      </Section>

      <Text style={emailStyles.signOff}>
        We cannot wait to be part of your event!
        <br />
        <br />
        Warm regards,
        <br />
        Shan
        <br />
        Photo Booth Hire Swansea
        <br />
        📱 +44 7544 193175
      </Text>
    </EmailLayout>
  );
}
