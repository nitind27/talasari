import { FaClock, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../layout/navbar/Navbar';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

const Contact= () => {
  return (<>

    <Navbar />
    <Header />
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            We are here to assist you. Reach out to us for any queries or feedback.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Working Hours */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaClock className="text-blue-900 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
            <p className="text-gray-600">
              09:00 hours to 17:30 hours
              <br />
              (Saturday and Sunday Holidays)
            </p>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaEnvelope className="text-blue-900 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:connect@mygov.nic.in" className="hover:underline">
                connect@mygov.nic.in
              </a>
            </p>
          </div>

          {/* Office Address */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaMapMarkerAlt className="text-blue-900 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Office Address</h3>
            <p className="text-gray-600">
              Office of CEO, MyGov
              <br />
              3rd Floor, Room no-3015
              <br />
              Ministry of Electronics and Information Technology
              <br />
              Electronics Niketan, 6, CCO Complex, Lodhi Road
              <br />
              New Delhi - 110003, India
            </p>
          </div>
        </div>
      </div>

      {/* Grievance Officers Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Grievance Officers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, the following officers have been notified:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chief Compliance Officer */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Chief Compliance Officer</h3>
              <p className="text-gray-600 mb-2">
                <strong>Name:</strong> Nand Kumarum
                <br />
                <strong>Designation:</strong> CEO MyGov
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:compliance-officer@mygov.in" className="hover:underline">
                  compliance-officer@mygov.in
                </a>
              </p>
            </div>

            {/* Nodal Officer */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Nodal Officer</h3>
              <p className="text-gray-600 mb-2">
                <strong>Name:</strong> Shobhendra Bahadur
                <br />
                <strong>Designation:</strong> Director, MyGov
                <br />
                <strong>Email:</strong>{" "}
                <a href="mailto:nodalofficer@mygov.in" className="hover:underline">
                  nodalofficer@mygov.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or feedback? Fill out the form below, and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <form className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full rounded-md border border-gray-300"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full rounded-md border border-gray-300"
                required
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full rounded-md border border-gray-300"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Map Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find us on the map below.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.715047724789!2d77.2243113150811!3d28.55398298245234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a7a8e33f6d%3A0x9b9b9b9b9b9b9b9b!2sElectronics%20Niketan%2C%206%2C%20CGO%20Complex%2C%20Lodhi%20Road%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1631531234567!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;