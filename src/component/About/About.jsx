import React from 'react';
import { FaUsers, FaLightbulb, FaHandshake, FaChartLine, FaAward, FaStar, FaBuilding } from 'react-icons/fa';
import Navbar from '../layout/navbar/Navbar';
import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl">
              We are committed to serving the public with transparency, integrity, and efficiency.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to provide accessible, reliable, and innovative services to all citizens, ensuring a better quality of life and fostering trust in government institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Transparency */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaLightbulb className="text-blue-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Transparency</h3>
              <p className="text-gray-600">
                We believe in open communication and accountability in all our operations.
              </p>
            </div>

            {/* Card 2: Integrity */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaHandshake className="text-blue-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in serving the public.
              </p>
            </div>

            {/* Card 3: Innovation */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaChartLine className="text-blue-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We leverage technology to deliver efficient and modern services.
              </p>
            </div>

            {/* Card 4: Community */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <FaUsers className="text-blue-900 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                We are dedicated to building a stronger, more connected community.
              </p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our History</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                तलासरी नगर पंचायत ही  07 मे, 2016 रोजी 05 महसुली गावे मिळून स्थापन झालेली आहे. सन 2011 च्या जणगणनेनुसार तलासरी शहराची लोकसंख्या ही 18722 आहे. तसेच नियोजन आराखड्यानुसार पुढील 15 वर्षात साधारण 35,000 इतकी लोकसंख्या अपेक्षित आहे. तलासरी नगरपंचायत हद्दीमध्ये NH-48 व मुंबई-वडोदरा एक्सप्रेस हायवे असल्याने भविष्यात झपाट्याने नागरिकीकरण होणार आहे.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/Img/img2.jpeg"
                  alt="Government Building"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                  तलासरी नगर पंचायत दृष्टीक्षेप
                </p>
                <p className="text-gray-600">
                  १.१ स्थान :
                  तलासरी नगर पंचायत 2016 मध्ये ठक्करपाडा, इभाडपाडा, तलासरी, सुतारपाडा आणि पाटीलपाडा इ. गट ग्रामपंचायतीतून स्थापन करण्यात आली आहे. पालघर जिल्ह्यातील तलासरी नगर पंचायत हि मुख्यत: आदिवासी बहुल लोकसंख्या असलेली नगर पंचायत आहे. तलासरी नगर पंचायतीचे क्षेत्रफळ २०.५४ चौ.किमी असून आहे.

                </p>
                <p className="text-gray-600 mt-5">
                  १.२ क्षेत्रफळ २०.५४ चौ.कि.मिटर, जनगणना २०११ नुसार तलासरी नगर पंचायत हद्दीतील
                  लोकसंख्या १८७२२ इतकी आहे.
                  १.३ आर्थिक माहिती :-
                  	तलासरी नगर पंचायत हद्दीतील लोकांचे महत्वाचे उत्पन्नाचे साधन भातशेती, बफींग इ. मुख्य आर्थिक क्रिया ही शेती व औद्योगिकिकरणाशी संबंधीत आहेत. तलासरी नगर पंचायत हद्दीत मुख्य पिक भात असून फूल शेती, बाजीपाला व फळपिके असी नगदी पिके घेतली जातात.

                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">योजना </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              प्रधानमंत्री आवास योजना (शहरी)
            </p>
          </div>

          <p>
            तलासरी नगरपंचायत, तलासरी जिल्हा-पालघर या कार्यालयामार्फत BLC घटकाअंतर्गत सविस्तर प्रकल्प अहवाल (DPR-१) एकूण १९ लाभार्थ्यांचा सादर करण्यात आले असून त्यास मंजुरी देखील प्राप्त झालेली आहे.
            परंतु सदरील योजना प्रत्यक्षात राबविण्याकरिता अनेक अडचणी निर्माण होत आहे. जसे की, खालील कारणान्वये बांधकाम परवानगी देणे शक्य होत नाही.

          </p>
          <p>१) लाभार्थ्याकडे स्व:हिस्सा देणे करिता पुरेसा आर्थिक उत्पन्न उपलब्ध नाही. </p>
          <p>२) ८ लाभार्थी यांच्या जमिनी ना-विकसन क्षेत्र (NDZ) मध्ये आहेत. </p>
          <p>३) ४ लाभार्थी यांच्या जागा शहर विकास आराखड्यामध्ये आरक्षणाने बाधित होत आहेत.</p>
          <p>४) लाभार्थ्यांच्या जमिनी वन विभागाच्या जागेत असणे.</p>
          <p>५) लाभार्थ्यांच्या जमिनी ह्या मूळ मालकीची नसल्याने ७/१२ उताऱ्यावर १० ते १२ सामाईक  खातेदार असल्याने
            खातेदारांची समंतीपत्र देखील प्राप्त होत नाहीत.
          </p>
          <p>
            ६) काही लाभार्थी यांना वारंवार सूचना देऊन देखील अद्यापपर्यंत परिपूर्ण प्रस्ताव कार्यालयात सादर केलेले नाहीत.
          </p>
          <p>इत्यादी कारणामुळे मंजूर लाभार्थ्यांना प्रधानमंत्री आवास योजना (शहरी) BLC घटकाअंतर्गत बांधकाम परवानगी देणे शक्य होत नाही. त्यामुळे तलासरी नगरपंचायत मा. सर्वसाधारण सभा ठराव क्र.०९ दि.३०/१२/२०२२ अन्वये तलासरी नगरपंचायतीमधील प्रधानमंत्री आवास योजना (शहरी) अंतर्गत मंजूर १९ लाभार्थ्यांचा DPR पूर्णतः रद्द करणे बाबत सूचित करण्यात आले व त्यास मंजुरी देखील देण्यात आली. त्यानुसार सदर मंजूर १९ लाभार्थ्यांचा DPR पूर्णतः रद्द करणे बाबत पत्र व्यवहार करणेत आले आहेत. </p>

        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">स्वच्छ भारत मिशन (शहरी) (SBM) –</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                तलासरी नगर पंचायतीची स्थापना दि. ०७ मे २०१६ रोजी झालेली आहे. तलासरी नगर पंचायतीची लोकसंख्या २०११ च्या जनगणनेनुसार १८७२२ एवढी आहे. तलासरी नगर पंचायतीकडून स्वच्छ भारत मिशन (शहरी) (SBM) या योजनाअंतर्गत करण्यात आलेल्या सर्व्हेक्षणामधून एकूण ६८० नागरिकांना वैयक्तिक शौचालयाचा लाभ देण्यात आलेला आहे. सदरील शौचालये बांधून पूर्ण झालेली आहेत. हागणदारीमुक्त शहर ODF+ म्हणून तलासरी शहराचा महाराष्ट्र शासनातर्फे गौरव करण्यात आला असून सध्या तलासरी नगरपंचायतची GFC ३ Star व  ODF++ च्या दिशेने देखील वाटचाल सुरु आहे.
              </p>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">राष्ट्रीय शहरी जीवनोन्नती अभियान </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                तलासरी नगर पंचायत ही नवनिर्मित असल्याने सदर योजना ही नगरपंचायतीस लागू नाही आहे. भविष्यात सदर योजना लागू झाल्यास त्या दृष्टीने तलासरी नगर पंचायत ही उत्तमरीत्या कार्यान्वित करेल.
              </p>
            </div>

          </div>
        </div>

        {/* Partnerships Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">आपत्ती व्यवस्थापनाकरिता आवश्यक दूरध्वनी क्रमांक तपशील</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to deliver the best services to our citizens.
            </p>
          </div>
          <center>


            <table className="shadow-lg bg-white justify-center ">
              <tr>
                <th className="bg-blue-100 border text-left px-8 py-4">अ.क्र</th>
                <th className="bg-blue-100 border text-left px-8 py-4">साधनसामुग्रीचा तपशील</th>
                <th className="bg-blue-100 border text-left px-8 py-4">पत्ता  </th>
                <th className="bg-blue-100 border text-left px-8 py-4">भ्रमणध्वनी  </th>
              </tr>
              <tr>
                <td className="border px-8 py-4">1 </td>
                <td className="border px-8 py-4">जिल्हा आपत्ती व्यवस्थापन </td>
                <td className="border px-8 py-4">पालघर </td>
                <td className="border px-8 py-4">०२५२५-२५३१११ </td>
              </tr>
              <tr>
                <td className="border px-8 py-4">2</td>
                <td className="border px-8 py-4">तहसील कार्यालय </td>
                <td className="border px-8 py-4">तलासरी </td>
                <td className="border px-8 py-4">०२५२१-२२००१८ </td>
              </tr>
              <tr>
                <td className="border px-8 py-4">3 </td>
                <td className="border px-8 py-4">पोलीस स्टेशन </td>
                <td className="border px-8 py-4">तलासरी </td>
                <td className="border px-8 py-4">०२५२१-२२००३३</td>
              </tr>
              <tr>
                <td className="border px-8 py-4">4</td>
                <td className="border px-8 py-4">ग्रामीण रुग्णालय तलासरी  </td>
                <td className="border px-8 py-4">तलासरी </td>
                <td className="border px-8 py-4">०२५२१-२२००६१</td>
              </tr>
              <tr>
                <td className="border px-8 py-4">5</td>
                <td className="border px-8 py-4">M.S.E.B </td>
                <td className="border px-8 py-4">तलासरी </td>
                <td className="border px-8 py-4">७८७५७६०८२३ </td>
              </tr>

            </table>
          </center>
        </div>

        {/* Call to Action Section */}
        <div className="bg-blue-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
            <p className="text-lg mb-8">
              Together, we can build a better future for our community. Get involved today!
            </p>
            <button className="bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* additional section in home page */}
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
          <h1 className="text-4xl font-light text-gray-800">
            MyGov <span className="font-bold">Prime</span>
          </h1>

          <div className="flex items-center mt-6">
            <div className="w-1/2 flex justify-center">
              <img
                src="/illustration.png"
                alt="Illustration"
                className="w-96"
              />
            </div>

            <div className="w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="/digital-data-protection.png"
                  alt="Digital Data Protection"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Draft Digital Personal Data Protection Rules, 2025</h3>
                  <p className="text-sm text-gray-600">Last Date: 18/02/2025</p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src="/csir-portal.png"
                  alt="CSIR Societal Platform"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">CSIR Societal Platform 2024</h3>
                  <p className="text-sm text-gray-600">Last Date: 31/12/2025</p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden col-span-2">
                <img
                  src="/cyber-security-challenge.png"
                  alt="Cyber Security Grand Challenge"
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">Cyber Security Grand Challenge 2.0</h3>
                  <p className="text-sm text-gray-600">Last Date: 14/02/2025</p>
                </div>
              </div>
            </div>
          </div>

          <button className="mt-6 px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700">
            View All
          </button>
        </div>


      </div>
      <Footer />
    </>
  );
};

export default AboutUs;