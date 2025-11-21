import { APP_NAME } from "@/lib/constant/name";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `${APP_NAME} is committed to safeguarding your privacy and protecting your personal information. This Privacy Policy outlines the types of information we collect, how we use and protect that information, and your rights in relation to your data.`,
  alternates: {
    canonical: `${process.env.SITE_URL}/privacy-policy`,
  },
};

const PrivacyPolicyPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-8 space-y-4 h-full py-8">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground text-xs">
          Effective Date: November 10th, 2024
        </p>
        <p className="text-muted-foreground text-xs pt-2">
          Privacy Policy for {APP_NAME} - Enhance your professional needs with
          our AI powered tools.
        </p>
      </div>
      <p className="text-muted-foreground mb-8">
        {APP_NAME} is committed to safeguarding your privacy and protecting your
        personal information. This Privacy Policy outlines the types of
        information we collect, how we use and protect that information, and
        your rights in relation to your data. By using our services, you agree
        to the practices outlined in this policy.
      </p>
      <p className="text-lg mt-5">1. Information We Collect</p>
      <p className="text-muted-foreground">
        We collect various types of information to provide and improve our
        services, including:
      </p>
      <p className="mt-2">1.1 Personal Information</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">User Profile Data:</span>{" "}
          Name, email address, and contact information provided during
          registration or profile updates.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Account Information:
          </span>{" "}
          User credentials necessary for account creation and access.
        </li>
      </ul>
      <p className="mt-2">1.2 Uploaded Content</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">File Uploads:</span>{" "}
          Documents, images, and other files you upload while using our
          professional tools are stored securely to facilitate the services we
          provide.
        </li>
      </ul>
      <p className="mt-2">1.3 Payment Information</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Credit Card and Payment Details:
          </span>{" "}
          Collected and processed through Stripe, our secure third-party payment
          processor. We do not directly store credit card information on our
          servers.
        </li>
      </ul>
      <p className="mt-2">1.4 Usage Data</p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Interaction Records:
          </span>{" "}
          Data on how you interact with our platform, including features
          accessed, quiz attempts, and time spent on specific tools.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Device Information:</span>{" "}
          Device type, browser type, IP address, and operating system to ensure
          service compatibility and security.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Cookies and Tracking Technologies:
          </span>{" "}
          Session cookies, analytics cookies, and other tracking technologies
          for enhancing user experience and gathering insights into app
          performance.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        2. How We Use Your Information
        <span className="text-muted-foreground">
          {" "}
          We use the information we collect to:
        </span>
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Provide and Enhance Services:
          </span>{" "}
          Tailor our services to your needs and continuously improve
          functionality.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Communicate with You:
          </span>{" "}
          Send notifications regarding updates, changes, or support responses.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Process Payments:</span>{" "}
          Session cookies, analytics cookies, and other tracking technologies
          for enhancing user experience and gathering insights into app
          performance.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Conduct Analytics and Research:
          </span>{" "}
          Use aggregated data to enhance the platform&apos;s performance,
          diagnose technical issues, and develop new features.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Ensure Security and Compliance:
          </span>{" "}
          Monitor for potential fraudulent activities and enforce terms of
          service.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        3. How We Share Your Information
        <span className="text-muted-foreground">
          {" "}
          We do not sell or share your personal information with third parties
          except in the following cases:
        </span>
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Third-Party Services:
          </span>{" "}
          We share data with trusted partners like Stripe for payment
          processing. They only use your information as necessary to provide
          their services.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Legal Obligations:</span>{" "}
          We may disclose information when required by law or to respond to
          legal requests, such as subpoenas or court orders.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Business Transfers:</span>{" "}
          In the event of a merger, acquisition, or sale of assets, user
          information may be transferred as part of the transaction. You will be
          notified of such a change.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        4. Data Security
        <span className="text-muted-foreground">
          {" "}
          We do not sell or share your personal information with third parties
          except in the following cases:
        </span>
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Encryption:</span> Data in
          transit is protected using SSL/TLS encryption. Stored data is secured
          using advanced encryption methods.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Access Controls:</span>{" "}
          Only authorized personnel have access to personal data, and strict
          policies are in place to prevent unauthorized access.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Regular Audits:</span>{" "}
          Periodic security assessments and updates are conducted to identify
          and address potential vulnerabilities.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        5. Data Retention
        <span className="text-muted-foreground">
          {" "}
          We retain your personal data only for as long as necessary to fulfill
          the purposes for which it was collected or as required by law.
          Uploaded files and user activity data will be stored until you delete
          your account or request data removal.
        </span>
      </p>
      <p className="mb-3 pt-10 text-lg">
        6. Your Rights
        <span className="text-muted-foreground">
          {" "}
          You have the following rights concerning your personal data:
        </span>
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Access:</span> Request
          access to the personal information we hold about you.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Correction:</span> Request
          correction of any inaccuracies in your personal data.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Deletion:</span> Request
          the deletion of your personal data, subject to applicable legal
          requirements.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Data Portability:</span>{" "}
          Request a copy of your data in a structured, machine-readable format.
        </li>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        7. Cookies and Tracking Technologies
        <span className="text-muted-foreground">
          {" "}
          We use cookies and similar technologies to:
        </span>
      </p>
      <ul className="space-y-3 list-disc list-inside">
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">
            Improve User Experience:
          </span>{" "}
          Store user preferences and maintain session states.
        </li>
        <li className="text-muted-foreground">
          <span className="text-bold text-foreground">Analyze Usage:</span> Help
          us understand how users interact with the platform for optimization
          purposes.
        </li>
        <p className="text-muted-foreground">
          You can adjust your browser settings to manage cookie preferences.
          However, disabling cookies may impact your user experience.
        </p>
      </ul>
      <p className="mb-3 pt-10 text-lg">
        8. Third-Party Links
        <span className="text-muted-foreground">
          {" "}
          Our application may include links to third-party websites or services.
          We are not responsible for the privacy practices of these sites and
          encourage you to read their privacy policies.
        </span>
      </p>
      <p className="mb-3 pt-10 text-lg">
        9. Children&apos;s Privacy
        <span className="text-muted-foreground">
          {" "}
          Our services are not intended for individuals under 13 years of age.
          We do not knowingly collect personal information from children under
          13. If we become aware of such collection, we will take immediate
          steps to delete the information.
        </span>
      </p>
      <p className="mb-3 pt-10 text-lg">
        10. Updates to This Privacy Policy
        <span className="text-muted-foreground">
          {" "}
          We may revise this Privacy Policy from time to time. Any changes will
          be posted on this page, and, where appropriate, notified to you via
          email or in-app notifications. The Effective Date at the top will
          reflect the date of the latest update.
        </span>
      </p>
      <p className="mb-3 pt-10 text-lg">
        11. Contact Us
        <span className="text-muted-foreground">
          {" "}
          For questions or concerns regarding this Privacy Policy, please
          contact us at: support@smartresource.ai
        </span>
      </p>
    </section>
  );
};

export default PrivacyPolicyPage;
