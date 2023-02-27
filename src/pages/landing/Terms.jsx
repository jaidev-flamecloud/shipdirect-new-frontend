import { Stack, Toolbar, Typography } from "@mui/material"
import React from "react"
import LandingLayout from "../../components/containers/LandingLayout"
import LandingSection from "../../components/ui/LandingSection"

const Terms = () => {
  return "Shipdirect"
  // <LandingLayout>
  //   <LandingSection sx={{ pb: "17rem" }}>
  //     <Toolbar />
  //     <Stack spacing={2} alignItems="center" textAlign="center" mb={3}>
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         Privacy Policy
  //       </Typography>
  //       {/* <Typography
  //         variant="body2"
  //         sx={{ width: "60%" }}
  //         color="text.secondary"
  //       >
  //         Last Updated : Dec 26, 2022
  //       </Typography>{" "} */}
  //     </Stack>{" "}
  //     <Stack spacing={2} sx={{ width: "80%", mx: "auto" }}>
  //       <p>
  //         We at <b>ShipEase</b> understand that how your personal information
  //         is used and shared is important to you, and we take your privacy
  //         seriously. Please read on to learn more about our{" "}
  //         <b>Privacy Policy</b> . By using or accessing the Services in any
  //         way, you acknowledge that you accept the practices and policies
  //         outlined in this Privacy Policy, and you consent to the following
  //         collection, use, and disclosure of your information.
  //       </p>

  //       <p>
  //         Always keep in mind that your use of ShipEase's services is subject
  //         to the Terms of Service, which incorporates this Privacy Policy. The
  //         Definitions of any terms used without explanation in this Policy can
  //         be found in the Terms of Service.
  //       </p>
  //       <Typography variant="h6">
  //         What does this Privacy Policy cover?
  //       </Typography>
  //       <p>
  //         This Privacy Policy covers our treatment of personally identifiable
  //         information (“Personal Information”) that we gather when you are
  //         accessing or using our Services, but not to the practices of
  //         companies we don’t own or control, or people that we don’t manage.
  //       </p>
  //       <Typography variant="h6">How do we use the information?</Typography>
  //       <p>
  //         We collect various types of Personal Information from our users, as
  //         explained in more detail below, and we use this Personal Information
  //         internally in connection with our Services, including to
  //         personalize, provide, and improve our services, to allow you to set
  //         up a user account and profile, to contact you and allow other users
  //         to contact you, to fulfill your requests for certain products and
  //         services, and to analyze how you use the Services. We may also share
  //         some Personal Information with third parties in certain
  //         circumstances, but only as described below.
  //       </p>
  //       <Typography variant="h6">Privacy of Children</Typography>
  //       <p>
  //         We do not knowingly collect or solicit personal information from
  //         anyone under the age of 13, as stated in our Terms of Service.
  //         Please do not attempt to register for the Services or send any
  //         personal information about yourself to us if you are under the age
  //         of 13. If we discover that we have collected personal information
  //         from a child under the age of 13, we will delete it as soon as
  //         possible. If you believe a child under the age of 13 has provided us
  //         with personal information, please email us at{" "}
  //         <a href="mailto:support@shipease.io">support@shipease.io</a> .
  //       </p>
  //       <Typography variant="h6">
  //         Will ShipEase ever change its Privacy Policy?
  //       </Typography>
  //       <p>
  //         We are constantly working to improve our Services, so we may need to
  //         change this Privacy Policy from time to time, but we will notify you
  //         of any changes by posting a notice on the ShipEase website, sending
  //         you an email, and/or some other method. Please keep in mind that
  //         even if you have chosen not to receive legal notice emails from us
  //         (or if you have not provided us with your email address), those
  //         legal notices will still govern your use of the Services, and you
  //         are responsible for reading and understanding them. If you use the
  //         Services after any changes to the Privacy Policy have been posted,
  //         you agree to all of them. The use of information we collect now is
  //         governed by the Privacy Policy in effect at the time the data is
  //         collected.
  //       </p>
  //       <Typography variant="h6">
  //         What Information Does ShipEase Collect?
  //       </Typography>
  //       <i>Information You Provide to Us:</i>
  //       <p>
  //         Any information you knowingly give us is stored. For example,
  //         through the registration process and/or your account settings, we
  //         may collect Personal Information like your name, email address,
  //         phone number, and third-party account credentials (such as your
  //         FedEx, UPS, eBay, Amazon, or other third-party couriers or
  //         marketplace integrations available through the Services). If you
  //         provide your third-party account credentials to us, you understand
  //         that some content and/or information in those accounts (“Third Party
  //         Account Information”) may be transmitted into your account with us,
  //         and that Third Party Account Information, such as your billing
  //         address, that is transmitted to our Services is covered by this
  //         Privacy Policy. We may require certain information to register or
  //         use some of our features.
  //       </p>

  //       <p>
  //         We can contact you if you give us the means. For instance, if you
  //         give us your email address, we may send you promotional emails from
  //         other companies or emails about your use of the Services. We may
  //         also receive a confirmation when you open our emails. This
  //         confirmation improves our services and communications with you. If
  //         you don't want to hear from us, email support@shipease.io or click
  //         the "Unsubscribe" button in our emails.
  //       </p>

  //       <i>Information Collected Automatically:</i>

  //       <p>
  //         Your IP address, geolocation data, device identification, "cookie"
  //         information, the type of browser and/or device you're using to
  //         access our Services, and the page or feature you requested are
  //         automatically received and recorded on our server logs when you
  //         interact with our Services. We transfer "cookies" to your browser or
  //         device to recognize it and tell us how many people visit our
  //         Services' pages and features and when. You can change your browser
  //         or device's cookie preferences, but this may prevent you from using
  //         some of our features.
  //       </p>

  //       <p>
  //         Third parties may send you cookies if you click on a link to their
  //         website or service. This Privacy Policy does not cover third
  //         parties' cookie use, and we are not responsible for their privacy
  //         policies. Please note that third-party cookies may track your online
  //         activities even after you leave our Services, and they may not honor
  //         your browser or device's "Do Not Track" requests.
  //       </p>

  //       <p>
  //         We may use this data to customize content based on your usage
  //         patterns. We may also use it to improve the Services, such as by
  //         learning how often users use a feature and using that information to
  //         make the Services more appealing to as many users as possible.
  //       </p>

  //       <i>
  //         Information Collected From Other Websites and Do Not Track Policy:
  //       </i>

  //       <p>
  //         After you leave our Services, we may collect information about your
  //         online activity using cookies. As described in this Privacy Policy,
  //         this information helps us improve the Services and customize your
  //         online experience. You can use your browser's "Do Not Track" option
  //         to tell operators of websites, web applications, and services
  //         (including behavioral advertising services) not to track your online
  //         activities over time and across websites. We collect information
  //         about your online activity while you use the Services and after you
  //         leave them because our Services do not support Do Not Track
  //         requests.
  //       </p>

  //       <Typography variant="h6">Is my personal data safe?</Typography>

  //       <p>
  //         Our records are protected from loss, misuse, unauthorized access,
  //         disclosure, alteration, and destruction by appropriate technical,
  //         organizational, and administrative security measures. No company can
  //         guarantee 100% security. Unauthorized access, hardware or software
  //         failure, and other factors can compromise user data security at any
  //         time.
  //       </p>

  //       <p>
  //         Your account is password-protected. Third-party sites and services
  //         may offer additional or different sign-on protections. You must
  //         choose and protect your password and/or other sign-on mechanism and
  //         sign off after using your account to prevent unauthorized access.
  //       </p>

  //       <Typography variant="h6">
  //         Can I access Personal Information?
  //       </Typography>

  //       <p>
  //         You can edit or delete the following information in your account
  //         settings: username, password, email, location, billing and shipping
  //         addresses, customer addresses, and payment methods.
  //       </p>

  //       <Typography variant="h6">
  //         Have questions about this policy?
  //       </Typography>

  //       <p>
  //         Please email{" "}
  //         <a
  //           style={{ color: "blue !important" }}
  //           href="mailto:support@shipease.io"
  //         >
  //           support@shipease.io
  //         </a>{" "}
  //         with any privacy-related questions.
  //       </p>

  //       {/* <ul>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //         <li>
  //           <Typography
  //             component={"p"}
  //             variant="body2"
  //             color="text.secondary"
  //           >
  //             This Site and all its Contents are intended solely for personal,
  //             non-commercial use.
  //           </Typography>
  //         </li>
  //       </ul> */}
  //     </Stack>
  //   </LandingSection>
  // </LandingLayout>
}

export default Terms
