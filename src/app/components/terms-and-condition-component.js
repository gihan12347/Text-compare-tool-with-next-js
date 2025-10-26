
export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl bg-white shadow-md rounded-2xl p-8 md:p-12">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">Terms &amp; Conditions</h1>
          <p className="mt-2 text-gray-600">for <span className="font-medium">freeonlinetextcomparetool.com</span></p>
        </header>

        <article className="prose prose-lg max-w-none text-gray-800">
          <p>
            <strong>Welcome to Free Online Text Compare Tool</strong> (the “Service”, “we”, “us”, or “our”).
            These Terms &amp; Conditions (the “Terms”) govern your access to and use of the website
            <a href="https://freeonlinetextcomparetool.com" className="ml-1 underline">freeonlinetextcomparetool.com</a> (the “Site") and the
            text, file and image comparison tools provided on the Site (the "Tool"). By using the Site or the Tool you accept and agree to these Terms.
          </p>

          <h2>1. Use of the Service</h2>
          <p>
            1.1 You may use the Tool to compare texts, files, and images for lawful personal or business
            purposes, subject to these Terms. 1.2 We may change, suspend or discontinue the Service (or any part of it)
            at any time with or without notice. 1.3 You must not use the Service for unlawful activities or to
            violate any third‑party rights.
          </p>

          <h2>2. User Content</h2>
          <p>
            2.1 "User Content" means any text, file or image you upload, paste or otherwise submit to the Tool.
            2.2 You retain ownership of your User Content. By submitting User Content you grant us a non‑exclusive,
            worldwide, royalty‑free license to use, reproduce, modify, adapt, publish, process and display the
            User Content to provide and improve the Service. This license does not allow us to sell your content
            separately or to use it for unrelated commercial purposes.
          </p>
          <p>
            2.3 You represent and warrant that you have the necessary rights to submit the User Content and that
            doing so does not violate any law or third‑party right (including copyright, privacy or publicity
            rights). You must not submit User Content that is illegal, infringing, defamatory, obscene, or otherwise
            objectionable.
          </p>

          <h2>3. Privacy &amp; Data Handling</h2>
          <p>
            3.1 We take privacy seriously. Please read our separate <a href="/privacy">Privacy Policy</a> for full
            details about how we collect, use and protect personal data. 3.2 Where the Tool operates fully in your browser
            (client‑side), we do not store User Content on our servers except where explicitly stated. You acknowledge
            that absolute security cannot be guaranteed, and you should avoid uploading highly sensitive personal data
            unless you understand the risks.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            4.1 All Site content (including text, images, design and software) is owned by or licensed to us and is
            protected by intellectual property laws. 4.2 You may use the Site and Tool for their intended purpose
            only. You must not reproduce, republish, distribute, sell, rent, or exploit the Site or Tool without our
            prior written permission.
          </p>

          <h2>5. Prohibited Uses</h2>
          <p>
            You agree not to use the Service to: (a) upload or share content that violates any law or any third party's
            rights; (b) distribute malware or malicious code; (c) attempt to access other users' data; or (d) attempt
            to reverse engineer or otherwise interfere with the Service.
          </p>

          <h2>6. Disclaimers &amp; Limitation of Liability</h2>
          <p>
            6.1 The Service is provided "as is" and "as available" without warranties of any kind. We do not warrant
            that the Service will be error‑free, uninterrupted, or free from security vulnerabilities. 6.2 To the maximum
            extent permitted by law, we disclaim all implied warranties, including merchantability and fitness for
            a particular purpose. 6.3 In no event will we be liable for any indirect, incidental, special, consequential
            or exemplary damages arising out of your use of the Service. 6.4 Our total liability to you for any claim
            arising from or relating to these Terms or the Service will not exceed the amount you paid (if any) to use
            the Service.
          </p>

          <h2>7. Indemnification</h2>
          <p>
            You agree to indemnify, defend and hold us harmless from and against any claims, liabilities, losses,
            damages and expenses (including reasonable attorneys' fees) arising from your use of the Service, your
            User Content, or your breach of these Terms.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately, without prior notice or liability,
            for any reason, including if you breach these Terms. Upon termination, your right to use the Service
            will immediately cease.
          </p>

          <h2>9. Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the "last updated" date at the
            top of this page. Continued use of the Service after changes are posted constitutes your acceptance of
            the revised Terms.
          </p>

          <h2>10. Governing Law &amp; Jurisdiction</h2>
          <p>
            These Terms are governed by the laws of <strong>Sri Lanka</strong> (unless you specify another jurisdiction).
            You agree to submit to the exclusive jurisdiction of the courts located in Sri Lanka for any disputes arising
            from these Terms.
          </p>

          <h2>11. Contact</h2>
          <p>
            If you have questions about these Terms, contact us at:
          </p>
          <ul>
            <li>Email: <a href="mailto:youremail@example.com">youremail@example.com</a> (replace with your real email)</li>
            <li>Site: <a href="https://freeonlinetextcomparetool.com">freeonlinetextcomparetool.com</a></li>
          </ul>

          <h2>12. Miscellaneous</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited
            or removed to the minimum extent necessary so that these Terms otherwise remain in full force and effect.
          </p>

          <footer className="mt-6 text-sm text-gray-600">
            <p>Last updated: October 26, 2025</p>
          </footer>
        </article>

        <div className="mt-8 border-t pt-6 text-sm text-gray-600">
          <p>
            <strong>Integration notes:</strong> Save this component as <code>/app/terms/page.tsx</code> (Next.js App
            Router) or as <code>/pages/terms.js</code> (Pages Router). Update the contact email and privacy link to
            match your site. Add a footer link to <code>/terms</code> so users can access it from every page.
          </p>
        </div>
      </div>
    </main>
  );
}
