import React, { useState } from "react";

const defaultFormFields = {
  name: "",
  email: "",
  address: "",
  city: "",
  state: "",
  postal_code: "",
  country: "IN",
};

const fakeFormFields = {
  name: "Anonymous",
  email: "namelessone@gmail.com",
  address: "Malbar Hill S.O.",
  city: "Mumbai",
  state: "MAHARASHTRA",
  postal_code: "400006",
  country: "IN",
};

const Shipping = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, address, city, state, postal_code, country } =
    formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleFake = () => {
    setFormFields({ ...fakeFormFields });
  };

  return (
    <div className="rounded-md">
      <div>
        <section>
          <div className="my-2 flex justify-between ">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-gray-300">
              Shipping & Billing Information
            </h2>
            <button
              type="button"
              onClick={handleFake}
              className="ml-auto rounded-lg bg-gray-300 px-3 text-gray-600"
            >
              Fill with fake customer 🙂
            </button>
          </div>
          <fieldset className="mb-3 rounded bg-white text-gray-800 shadow-lg">
            <label className="flex h-12 items-center border-b border-gray-200 py-3">
              <span className="px-2 text-right">Name</span>
              <input
                onChange={handleChange}
                name="name"
                className="px-3 focus:outline-none"
                placeholder="Anonymous"
                required
                value={name}
              />
            </label>
            <label className="flex h-12 items-center border-b border-gray-200 py-3">
              <span className="px-2 text-right">Email</span>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="px-3 focus:outline-none"
                placeholder="namelessone@gmail.com"
                required
                value={email}
              />
            </label>
            <label className="flex h-12 items-center border-b border-gray-200 py-3">
              <span className="px-2 text-right">Address</span>
              <input
                onChange={handleChange}
                name="address"
                className="px-3 focus:outline-none"
                placeholder="Malabar Hill S.O."
                required
                value={address}
              />
            </label>
            <label className="flex h-12 items-center border-b border-gray-200 py-3">
              <span className="px-2 text-right">City</span>
              <input
                onChange={handleChange}
                name="city"
                className="px-3 focus:outline-none"
                placeholder="Mumbai"
                required
                value={city}
              />
            </label>
            <label className="inline-flex w-2/4 border-gray-200 py-3">
              <span className="px-2 text-right">State</span>
              <input
                onChange={handleChange}
                name="state"
                className="px-3 focus:outline-none"
                placeholder="MAHARASHTRA"
                required
                value={state}
              />
            </label>
            <label className="flex items-center border-t border-gray-200 py-3 xl:inline-flex xl:w-1/4 xl:border-none">
              <span className="xl:text-none px-2 text-right xl:px-0">ZIP</span>
              <input
                onChange={handleChange}
                name="postal_code"
                className="px-3 focus:outline-none"
                placeholder="400006"
                required
                value={postal_code}
              />
            </label>
            <label className="select relative flex h-12 items-center border-t border-gray-200 py-3">
              <span className="px-2 text-right">Country</span>
              <div
                id="country"
                className="flex w-full items-center px-3 focus:outline-none"
              >
                <select
                  onChange={handleChange}
                  name="country"
                  value={country.toUpperCase()}
                  className="flex-1 cursor-pointer appearance-none border-none bg-transparent focus:outline-none"
                >
                  <option value="AU">Australia</option>
                  <option value="BE">Belgium</option>
                  <option value="BR">Brazil</option>
                  <option value="CA">Canada</option>
                  <option value="CN">China</option>
                  <option value="DK">Denmark</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                  <option value="HK">Hong Kong</option>
                  <option value="IN">India</option>
                  <option value="IE">Ireland</option>
                  <option value="IT">Italy</option>
                  <option value="JP">Japan</option>
                  <option value="LU">Luxembourg</option>
                  <option value="MX">Mexico</option>
                  <option value="NL">Netherlands</option>
                  <option value="PL">Poland</option>
                  <option value="PT">Portugal</option>
                  <option value="SG">Singapore</option>
                  <option value="ES">Spain</option>
                  <option value="TN">Tunisia</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US" defaultValue="selected">
                    United States
                  </option>
                </select>
              </div>
            </label>
          </fieldset>
        </section>
      </div>
    </div>
  );
};

export default Shipping;
