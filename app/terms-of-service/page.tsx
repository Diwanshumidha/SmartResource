import { Metadata } from "next";

const APP_NAME = "Smart Resource";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Our Terms of Service outlines the rules and guidelines for the app. By accessing our services, you agree to comply with these terms.",
  alternates: {
    canonical: `${process.env.SITE_URL}/terms-of-service`,
  },
};

const TermsOfServicePage = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 space-y-4 h-full py-8">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-muted-foreground text-xs">
          Last Updated: November 10th, 2024
        </p>
        <p className="text-muted-foreground text-xs max-w-lg mx-auto pt-2">
          Welcome to {APP_NAME}. By accessing or using our Service, you agree to
          be bound by these Terms of Service (“Terms”). If you do not agree to
          these Terms, do not use the Service.
        </p>
      </div>
      <p className="mb-3 pt-10 text-lg font-bold">1. Acceptance of Terms</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        By creating an account, accessing, or using the Service, you confirm
        that you accept and agree to be bound by these Terms and our Privacy
        Policy. If you are using the Service on behalf of an organization, you
        represent that you have the authority to bind that organization to these
        Terms.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">2. Definitions</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Account:</span> A unique
          profile created by a user for accessing the Service.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Content:</span> All data,
          files, and information, including any documents uploaded by users for
          Professional purposes.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">User:</span> Any person or
          entity using the Service.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Third-Party Services:
          </span>{" "}
          External services that may be integrated with or utilized by the
          Service, such as Stripe for payment processing.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg font-bold">3. Eligibility</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        To use the Service, you must be at least 18 years of age or have the
        consent of a legal guardian. By using the Service, you represent that
        you meet these requirements.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">4. User Accounts</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Registration:</span> You
          may be required to create an Account by providing information such as
          your name, email address, and password. You are responsible for
          maintaining the confidentiality of your login details.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Account Responsibility:
          </span>{" "}
          You are responsible for all activities that occur under your Account.
          Notify us immediately if you suspect any unauthorized use of your
          Account.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">User:</span> Any person or
          entity using the Service.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Accuracy of Information:
          </span>{" "}
          You must provide accurate, current, and complete information during
          registration and keep your Account updated.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg font-bold">
        5. Payment and Subscriptions
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Billing:</span> Payments
          for the Service are processed securely through Stripe.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Fees:</span> The fees for
          the Service are described on [Your Pricing Page URL]. You agree to pay
          any applicable fees as outlined during the purchase process.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Cancellation and Refunds:
          </span>{" "}
          Subscription cancellation must be done through your Account settings.
          Refund requests must be sent to support@smartresource.ai.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg font-bold">6. User Conduct</p>
      <p className="mb-3 text-lg">You agree not to use the Service:</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          For any unlawful, infringing, or harmful activities.
        </li>
        <li className="text-muted-foreground">
          To transmit any malware or harmful code.
        </li>
        <li className="text-muted-foreground">
          To interfere with or disrupt the Service or servers.
        </li>
        <li className="text-muted-foreground">
          To collect or store personal data about other users without their
          consent.
        </li>
      </ul>
      <p>
        Violation of these guidelines may result in the termination of your
        Account.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">7. User Content</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Ownership:</span> ou
          retain ownership of any content you upload to the Service.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">License:</span> By
          submitting content, you grant us a worldwide, non-exclusive,
          royalty-free license to use, store, display, and reproduce your
          content solely to operate and improve the Service.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Responsibility:</span> You
          are responsible for the content you upload and ensure it does not
          infringe any third-party rights.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg font-bold">
        8. Intellectual Property Rights
      </p>{" "}
      <p className="text-muted-foreground">
        {" "}
        The Service and its original content, features, and functionality are
        owned by [Your Company Name] and are protected by international
        copyright, trademark, patent, trade secret, and other intellectual
        property or proprietary rights laws.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">
        9. Third-Party Services
      </p>{" "}
      <p className="text-muted-foreground">
        {" "}
        The Service may integrate or interact with third-party services (e.g.,
        Stripe for payment processing). We do not own or control these
        third-party services and are not responsible for their content or
        practices. Your use of such services is subject to their terms.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">10. Termination</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        We may suspend or terminate your Account and access to the Service,
        without prior notice or liability, for any reason, including breach of
        these Terms. Upon termination, your right to use the Service will cease
        immediately.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">
        11. Disclaimer of Warranties
      </p>{" "}
      <p className="text-muted-foreground">
        {" "}
        The Service is provided on an “AS IS” and “AS AVAILABLE” basis. We make
        no warranties or representations, express or implied, about the
        reliability, suitability, or availability of the Service. Your use of
        the Service is at your sole risk.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">
        12. Limitation of Liability
      </p>{" "}
      <p className="text-muted-foreground">
        {" "}
        To the fullest extent permitted by applicable law, {APP_NAME} shall not
        be liable for any indirect, incidental, special, consequential, or
        punitive damages, including loss of profits, data, or use, arising out
        of or related to your use of the Service.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">13. Indemnification</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        You agree to indemnify and hold harmless {APP_NAME}, its affiliates,
        officers, and employees from any claims, damages, or expenses, including
        reasonable attorneys&apos; fees, arising out of your use of the Service
        or violation of these Terms.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">14. Governing Law</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        These Terms shall be governed by the laws of United States of America,
        without regard to its conflict of law provisions.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">15. Changes to Terms</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        We reserve the right to modify or replace these Terms at any time. If a
        revision is material, we will provide at least 30 days notice prior to
        any new terms taking effect. Your continued use of the Service after
        such changes constitutes your acceptance of the new Terms.
      </p>
      <p className="mb-3 pt-10 text-lg font-bold">15. Contact Us</p>{" "}
      <p className="text-muted-foreground">
        {" "}
        If you have any questions or concerns regarding these Terms, please
        contact us at: support@smartresource.ai.
      </p>
    </section>
  );
};

export default TermsOfServicePage;
