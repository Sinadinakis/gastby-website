import React, { useState } from 'react';
import { useIntl } from 'gatsby-plugin-intl';

// Components
import Seo from '../components/seo';
import Menu from '../components/Menu';
import Footer from '../components/layout/Footer';
import Image from '../components/Image';

const Contact = () => {
  const [status, setStatus] = useState('');
  const { formatMessage } = useIntl();

  const submitForm = ev => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus('SUCCESS');
      } else {
        setStatus('ERROR');
      }
    };
    xhr.send(data);
  };

  return (
    <>
      <Seo
        title={formatMessage({ id: 'contact.seoTitle' })}
        description={formatMessage({ id: 'contact.seoDescription' })}
      />
      <Menu />
      <div className="w-full bg-yellow-400">
        <Image
          name="contactTop"
          alt="Barrels in sinadinakis winery"
          className="w-full h-56 object-cover"
        />
      </div>
      <main className="py-10 px-6">
        <div className="max-w-5xl mx-auto mb-8 px-2 md:px-20">
          <h1 className="text-left text-2xl md:text-4xl max-w-3xl leading-tight text-gray-800 mb-10">
            {formatMessage({ id: 'contact.header' })}
          </h1>
        </div>
        <div className="mx-auto mb-8 px-2 md:px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5600.801577445772!2d25.156684077848688!3d35.23395687693614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149af63b97efa8e1%3A0xf628661a6f71bcdd!2sSinadinakis%20Winery!5e0!3m2!1sen!2snl!4v1591622729922!5m2!1sen!2snl"
            width="100%"
            height="350"
            frameBorder="0"
            style={{ border: '0' }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Google map location sinadinakis winery"
          ></iframe>
        </div>

        <div className="max-w-5xl mx-auto mb-8 px-2md:px-20 leading-relaxed">
          <p className="italic">{formatMessage({ id: 'contact.message' })}</p>
        </div>
        <div className="max-w-5xl mx-auto flex flex-wrap items-start">
          <div className="w-full  md:w-1/2 p-2">
            <form
              // eslint-disable-next-line
              onSubmit={submitForm}
              className="w-full max-w-lg"
              method="post"
              role="form"
              name="contatcForm"
              action="https://formspree.io/mdowgqla"
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="name"
                  >
                    {formatMessage({ id: 'contact.form.input.name' })}
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    name="name"
                    type="text"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <p className="text-gray-600 text-xs italic validate"></p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    {formatMessage({ id: 'contact.form.input.email' })}
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    name="email"
                    type="email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <p className="text-gray-600 text-xs italic validate"></p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="message"
                  >
                    {formatMessage({ id: 'contact.form.input.message' })}
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    name="message"
                  />
                  <p className="text-gray-600 text-xs italic validate"></p>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  {status === 'SUCCESS' ? (
                    <p>Thanks!</p>
                  ) : (
                    <button
                      className="shadow bg-teal-600 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      aria-label="button submit contact form"
                    >
                      {formatMessage({ id: 'contact.form.input.submit' })}
                    </button>
                  )}
                  {status === 'ERROR' && <p>Ooops! There was an error.</p>}
                </div>
                <div className="md:w-2/3"></div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <Image name="slide9" alt="Producer Sinadinakis in wineyard" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
