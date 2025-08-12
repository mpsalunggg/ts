// Nominal
type Contact = { name: string };
type Admin = { name: string };

const constact: Contact = { name: "Alice" };
const admin: Admin = user; 

// Structural
type UserId = string & { __brand: "UserId" };
type OrderId = string & { __brand: "OrderId" };

function getUser(id: UserId) {}
function getOrder(id: OrderId) {}

const userId = "abc123" as UserId;
const orderId = "xyz789" as OrderId;

getUser(userId); // 1
getOrder(orderId); //2  // ❌ Error

type EmailAddress = string & { __brand: "EmailAddress" };

// Function to validate and cast a string into EmailAddress
const validateEmail = (input: string): EmailAddress => {
  if (!input.includes("@")) {
    throw new Error("Invalid email address");
  }
  return input.toLowerCase() as EmailAddress; // force-cast after basic validation
};

// Now this function only accepts EmailAddress, not just any string
const sendWelcomeEmail = (email: EmailAddress) => {
  console.log(`Sending welcome email to ${email}`);
};

// Usage
const rawInput = "user@example.com";
const validatedEmail = validateEmail(rawInput);

sendWelcomeEmail(validatedEmail); // ✅ OK

// This would cause a TypeScript error:
// sendWelcomeEmail("not-an-email");