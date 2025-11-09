import {
  Body,
  CodeBlock,
  Container,
  dracula,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";

interface ConfirmEmailProps {
  userEmail: string;
  name: string;
  baseUrl: string;
  message: string;
}

export const ContactEmail = ({
  userEmail,
  message,
  baseUrl,
  name,
}: ConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>New Message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`https://www.smartresource.ai/studygen-logo.png`}
          width="170"
          height="50"
          alt="StudyGen AI"
          style={logo}
        />
        <Text style={paragraph}>Hi Mike,</Text>
        <Text style={paragraph}>
          Here is a new message from {name}:
          <CodeBlock
            theme={dracula}
            language="md"
            code={`${message}.\n \n \nYou can contact ${name} at ${userEmail}`}
          />
        </Text>
        <Hr style={hr} />
        <Text style={footer}>2024 Smart Resource. All rights reserved.</Text>
      </Container>
    </Body>
  </Html>
);

ContactEmail.PreviewProps = {
  name: "Alan",
  userEmail: "test@gmail.com",
  message: "Hello, I have a question about the free trial.",
  baseUrl: "https://studygen-ai.vercel.app",
} as ConfirmEmailProps;

export default ContactEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
