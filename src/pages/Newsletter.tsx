import { Form } from "react-router-dom";
const Newsletter = () => {
  return (
    <div className="form page">
      <Form className="form-newsletter">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          Our Newsletter
        </h3>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="surname">Last Name</label>
        <input type="text" name="surname" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <button>Submit</button>
      </Form>
    </div>
  );
};

export default Newsletter;
