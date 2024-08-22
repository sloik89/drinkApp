import React from "react";
import { Form, type ActionFunction } from "react-router-dom";

const SearchForm = ({ searchTerm }: { searchTerm: string }) => {
  return (
    <Form className="search-form">
      <input
        style={{ padding: "0.2rem 0" }}
        type="text"
        name="search"
        defaultValue={searchTerm}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchForm;
