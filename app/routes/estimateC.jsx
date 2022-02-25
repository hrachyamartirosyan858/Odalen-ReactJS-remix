// import { redirect, json, Form, useActionData } from "remix";

// export async function action({ request }) {
//   const form = await request.formData();
//   const email = form.get("email");
//   const password = form.get("password");
//   const errors = {};

//   // validate the fields
//   if (typeof email !== "string" || !email.includes("@")) {
//     errors.email =
//       "That doesn't look like an email address";
//   }

//   if (typeof password !== "string" || password.length < 6) {
//     errors.password = "Password must be > 6 characters";
//   }

//   // return data if we have errors
//   if (Object.keys(errors).length) {
//     return json(errors, { status: 422 });
//   }

//   // otherwise create the user and redirect
//   await createUser(form);
//   return redirect("/dashboard");
// }

// export default function Signup() {
//   const errors = useActionData();

//   return (
//     <>
//       <h1>Signup</h1>
//       <Form method="post">
//         <p>
//           <input type="text" name="email" style={{border: "solid black"}}/>
//           {errors?.email ? (
//             <span>{errors.email}</span>
//           ) : null}
//         </p>
//         <p>
//           <input type="text" name="password" style={{border: "solid black"}}/>
//           {errors?.password ? (
//             <span>{errors.password}</span>
//           ) : null}
//         </p>
//         <p>
//           <button type="submit">Sign up</button>
//         </p>
//       </Form>
//     </>
//   );
// }

// import { withZod } from "@remix-validated-form/with-zod";
// import { ActionFunction, json, useActionData } from "remix";
// import { ValidatedForm, validationError } from "remix-validated-form";
// import { z } from "zod";
// import { Alert } from "~/components/Alert";
// import { FormInput } from "~/components/FormInput";
// import { SubmitButton } from "~/components/SubmitButton";

// export const validator = withZod(
//   z.object({
//     firstName: z.string().nonempty("First name is required"),
//     lastName: z.string().nonempty("Last name is required"),
//     email: z
//       .string()
//       .nonempty("Email is required")
//       .email("Must be a valid email"),
//   })
// );

// export const action: ActionFunction = async ({ request }) => {
//   const data = await validator.validate(await request.formData());
//   if (data.error) return validationError(data.error);
//   const { firstName, lastName, email } = data.data;

//   return json({
//     title: `Hi ${firstName} ${lastName}!`,
//     description: `Your email is ${email}`,
//   });
// };

// export default function Demo() {
//   const data = useActionData();
//   return (
//       <div>QAQ</div>
//     <ValidatedForm validator={validator} method="post">
//       <FormInput name="firstName" label="First Name" />
//       <FormInput name="lastName" label="Last Name" />
//       <FormInput name="email" label="Email" />
//       {data && (
//         <Alert variant="info" title={data.title} details={data.description} />
//       )}
//       <SubmitButton />
//     </ValidatedForm>
//   );
// }
