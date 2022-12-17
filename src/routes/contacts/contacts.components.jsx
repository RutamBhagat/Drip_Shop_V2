import React from 'react'
import ContactForm from './contactForm.component';
import ContactInfo from './contactInfo.component';

const Contacts = () => {
  return (
    <section id="contact" className="py-16 px-3 text-white">
      <div className="mt-8">
        <div className="grid w-full place-items-center bg-gray-800 py-10">
          <div className="flex w-3/4 min-h-[85vh] max-w-3xl flex-col rounded-md bg-white shadow-md lg:max-w-4xl lg:flex-row">
            <ContactInfo/>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts