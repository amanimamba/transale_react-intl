import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

// third-party
import { IntlProvider } from "react-intl";
// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case "fr":
      return import("./fr.json");
    default:
      return import("./en.json");
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const customization = { locale: "en" };
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(customization.locale).then((d) => {
      setMessages(d.default);
    });
  }, [customization.locale]);

  return (
    <>
      {messages && (
        <IntlProvider
          locale={customization.locale}
          defaultLocale="fr"
          messages={messages}
        >
          {children}
        </IntlProvider>
      )}
    </>
  );
};

Locales.propTypes = {
  children: PropTypes.node
};

export default Locales;
