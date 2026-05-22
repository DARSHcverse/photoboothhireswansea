import { Button, Column, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type QuoteConfirmationProps = {
  firstName: string;
  eventType: string;
  eventDate: string;
  venue: string;
  boothType: string;
  hireDuration: string;
  guestCount: string;
};

const detailRows: Array<[string, keyof QuoteConfirmationProps]> = [
  ["Event Type", "eventType"],
  ["Event Date", "eventDate"],
  ["Venue", "venue"],
  ["Booth Type", "boothType"],
  ["Hire Duration", "hireDuration"],
  ["Guest Numbers", "guestCount"],
];

export default function QuoteConfirmation(props: QuoteConfirmationProps) {
  const { firstName } = props;

  return (
    <EmailLayout preview="Thanks for your enquiry — we'll be in touch within 24 hours">
      <Text style={emailStyles.paragraph}>Hi {firstName || "there"},</Text>

      <Text style={emailStyles.paragraph}>
        Thank you for getting in touch with Photo Booth Hire Swansea! We have received your enquiry
        and Shan will be in touch within 24 hours with availability and a tailored quote for your
        event.
      </Text>

      <Section style={emailStyles.summaryBox}>
        <Text style={emailStyles.summaryHeading}>Your Enquiry Summary</Text>
        {detailRows.map(([label, key]) => (
          <Row key={label} style={{ margin: "6px 0" }}>
            <Column style={{ width: "140px", verticalAlign: "top" }}>
              <Text
                style={{
                  color: "#4a5568",
                  fontSize: "14px",
                  fontWeight: "bold",
                  margin: 0,
                }}
              >
                {label}:
              </Text>
            </Column>
            <Column>
              <Text style={{ color: "#1a1a1a", fontSize: "14px", margin: 0 }}>
                {props[key] || "—"}
              </Text>
            </Column>
          </Row>
        ))}
      </Section>

      <Text style={emailStyles.paragraph}>
        While you wait, feel free to browse our packages or take a look at our gallery to get a
        feel for what we do.
      </Text>

      <Row style={{ margin: "16px 0 24px" }}>
        <Column style={{ paddingRight: "8px" }}>
          <Button
            href="https://photoboothhireswansea.co.uk/packages"
            style={emailStyles.button}
          >
            View Packages
          </Button>
        </Column>
        <Column style={{ paddingLeft: "8px" }}>
          <Button
            href="https://photoboothhireswansea.co.uk/gallery"
            style={emailStyles.buttonSecondary}
          >
            See Gallery
          </Button>
        </Column>
      </Row>

      <Text style={emailStyles.paragraph}>
        We are really looking forward to hearing more about your event. If you need anything in the
        meantime, just reply to this email or give us a call on +44 7544 193175.
      </Text>

      <Text style={emailStyles.signOff}>
        Warm regards,
        <br />
        Shan
        <br />
        Photo Booth Hire Swansea
      </Text>
    </EmailLayout>
  );
}
