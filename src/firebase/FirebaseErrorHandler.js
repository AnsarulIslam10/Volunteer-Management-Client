import { toast } from "react-toastify";

export const errorHandler = (err) => {
  switch (err?.code) {
    case "auth/invalid-email":
      toast.error("Invalid email address. Please enter a valid email.");
      break;
    case "auth/user-not-found":
      toast.error("User not found. Please check the email address.");
      break;
    case "auth/wrong-password":
      toast.error("Incorrect password. Please try again.");
      break;
    case "auth/email-already-in-use":
      toast.error("Email already in use. Please try another email.");
      break;
    case "auth/weak-password":
      toast.error("Password should be at least 6 characters.");
      break;
    case "auth/invalid-credential":
      toast.error("Invalid credential. Please try again.");
      break;
    case "auth/network-request-failed":
      toast.error("Network request failed. Please try again.");
      break;
    case "auth/too-many-requests":
      toast.error("Too many requests. Please try again.");
      break;
    case "auth/credential-already-in-use":
      toast.error("Credential already in use. Please try again.");
      break;
    case "auth/invalid-display-name":
      toast.error("Invalid display name. Please try again.");
      break;
    case "auth/invalid-email-verified":
      toast.error("Invalid email verified. Please try again.");
      break;
    case "auth/invalid-password":
      toast.error("Invalid password. Please try again.");
      break;
    case "auth/email-already-exists":
      toast.error("Email already exists. Please try again.");
      break;
    case "auth/internal-error":
      toast.error("Internal error. Please try again.");
      break;

    default:
      toast.error("Oops! Something went wrong. Please try again later.");
  }
};