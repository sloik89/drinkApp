import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import { type ActionFunction, redirect } from "react-router-dom";
export const action: ActionFunction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  toast("Succesfull");
  return redirect("/");
};
const Newsletter = () => {
  return (
    <div className="form page">
      <Form method="POST" className="form-newsletter">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Our Newsletter
        </h3>
        <label htmlFor="name">Name</label>
        <input defaultValue="john" type="text" name="name" />
        <label htmlFor="surname">Last Name</label>
        <input defaultValue="smith" type="text" name="surname" />
        <label htmlFor="email">Email</label>
        <input defaultValue="johnsmith@gmail.com" type="email" name="email" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default Newsletter;
