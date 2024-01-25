// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description1: 'What is Lorem Ipsum?\n\n' +
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
            'It has been the industry\'s standard dummy text since the 1500s, when an unknown ' +
            'printer took a galley of type and scrambled it to make a type specimen book.',
          description2: {
            part1: 'Why do we use it?',
            part2: 'It is a long established fact that a reader will be distracted by the readable content ' +
              'of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less ' +
              'normal distribution of letters, as opposed to using \'Content here, content here\', making it ' +
              'look like readable English.',
          },
          description3: {
            part1: 'Where does it come from?',
            part2: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece ' +
              'of classical Latin literature from 45 BC.',
          }
        }
      },
      hi: {
        translation: {
          description1: 'लोरेम इप्सम क्या है?\n\n' +
            'लोरेम इप्सम बस मुद्रण और टाइपसेटिंग उद्योग का डमी पाठ है। यह उद्योग का मानक डमी पाठ था, ' +
            'जब 1500 के दशक में एक अज्ञात मुद्रक ने एक प्रकार की गैलरी ले ली और इसे एक प्रकार के नमूने पुस्तक ' +
            'बनाने के लिए इसे उल्लट दिया।',
          description2: {
            part1: 'लोरेम इप्सम क्या है?',
            part2: 'यह एक लंबे समय से स्थापित तथ्य है कि एक पाठक एक पृष्ठ के लेआउट को देखते समय एक पृष्ठ ' +
              'के लेआउट को देखते समय एक पृष्ठ के लेआउट को देखते समय एक पृष्ठ के लेआउट को देखते समय एक पृष्ठ ' +
              'समय एक पृष्ठ के लेआउट को देखते समय एक पृष्ठ के लेआउट को देखते समय एक पृष्ठ के लेआउट को देखते ' +
              'समय एक पृष्ठ के लेआउट को देखते सम',
          },
          description3: {
            part1: 'यह कहां से आया है?',
            part2: 'यह एक पॉप्युलर धारणा के खिलाफ है कि लोरेम इप्सम सिर्फ़ यादृच्छिक पाठ नहीं है, ' +
              'बल्कि इसकी जड़ें 45 BC के विद्वेषी लैटिन साहित्य के एक हिस्से में हैं।',
          }
        }
      }
    }
  });

export default i18n;
