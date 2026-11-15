KRIN STUDIO WEBSITE — START HERE

FILES
- index.html: customer-facing website
- style.css: website styling
- app.js: gallery, purchase request and customer interface
- admin.html: admin dashboard
- admin.css: admin styling
- admin.js: upload and manual confirmation logic

HOW TO RUN
1. Extract the ZIP file.
2. Open the folder.
3. Double-click index.html, or use Visual Studio Code with Live Server.
4. Open admin.html to manage the website.
5. Demo admin password: krin123

DEMO WORKFLOW
1. Admin signs in and uploads photos.
2. Customer selects a photo and submits name, phone and payment transaction reference.
3. Admin checks the payment in the actual Mobile Money account.
4. Admin clicks Confirm payment.
5. In this front-end demonstration, the approved request is marked as confirmed.

IMPORTANT — BEFORE USING THIS FOR REAL CUSTOMERS
This version is a front-end prototype using browser localStorage. It is NOT a secure live payment/download system:
- Data is stored in the browser that opened the website. Different customers and admin devices do not share it.
- The demo password and approval state can be inspected or changed by a visitor. Do not use it to protect valuable original photos.
- No Mobile Money payment is collected automatically. The admin must manually verify payment outside the website.
- A production version needs a server/database, secure admin login, protected original photo storage, server-side payment verification or trusted manual approval, and download links that are issued only after approval.
- The website does not resize or intentionally compress uploaded images, but browser storage has size limits. For full-resolution originals at scale, use proper file/object storage.
- Replace the demo email, payment instructions and sample hero image with your own studio details and media.

TECHNOLOGY
HTML, CSS and vanilla JavaScript. No framework.
