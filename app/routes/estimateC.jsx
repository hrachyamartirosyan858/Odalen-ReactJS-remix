// import {useLoaderData} from 'remix';

// export async function loader(){
//     return[
//         {
//             name: "Hrachya",
//             surname: "Martirosyan",
//             age: 35 
//         }
//     ]
// }

// export default function Info (){
//     const peopleInfo = useLoaderData();
//     console.log(peopleInfo)
//     return (
//         <div>
//             {peopleInfo.map((item) => {
//                 return (
//                     <div>{item.name}{" "}{item.surname}{", age-"}{item.age}</div>
//                 )
//             })}
//         </div>
//     )
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
