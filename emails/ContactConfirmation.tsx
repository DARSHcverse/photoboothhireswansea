import { Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailLayout, emailStyles } from "./components/EmailLayout";

export type ContactConfirmationProps = {
  firstName: string;
  message: string;
};

export default function ContactConfirmation({ firstName, message }: ContactConfirmationProps) {
  return (
    <EmailLayout preview="We got your message — we'll reply within 24 hours">
      <Text style={emailStyles.paragraph}>Hi {firstName || "there"},</Text>

      <Text style={emailStyles.paragraph}>
        Thanks for getting in touch! We have received your message and will get back to you within
        24 hours. If your query is urgent, feel free to call us directly on +44 7544 193175.
      </Text>

      <Section style={emailStyles.summaryBox}>
        <Text style={emailStyles.summaryHeading}>Your message:</Text>
        <Text
          style={{
            color: "#1a1a1a",
            fontSize: "14px",
            lineHeight: 1.6,
            margin: 0,
            whiteSpace: "pre-wrap",
          }}
        >
          {message || "—"}
        </Text>
      </Section>

      <Text style={emailStyles.signOff}>
        Talk soon,
        <br />
        Shan
        <br />
        Photo Booth Hire Swansea
      </Text>
    </EmailLayout>
  );
}
