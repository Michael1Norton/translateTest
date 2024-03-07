import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: { welcome: "Hello" },
  fr: { welcome: "Bonjour" },
  es: { welcome: "Hola" },
  de: { welcome: "Hallo" },
  it: { welcome: "Ciao" },
};

const i18n = new I18n(translations);

i18n.locale = Localization.getLocales()[0].languageCode;

i18n.fallbacks = true;

const Translator = () => {
  const [locale, setLocale] = useState(
    Localization.getLocales()[0].languageCode
  );

  const changeLocale = (newLocale) => {
    i18n.locale = newLocale;
    setLocale(newLocale);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Translator App</Text>
      <Text style={styles.text}>{i18n.t("welcome")}</Text>
      <Text style={styles.text}>Select Language</Text>
      <TouchableOpacity onPress={() => changeLocale("en")}>
        <Text style={styles.langText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLocale("fr")}>
        <Text style={styles.langText}>French</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLocale("es")}>
        <Text style={styles.langText}>Spanish</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLocale("de")}>
        <Text style={styles.langText}>German</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeLocale("it")}>
        <Text style={styles.langText}>Italian</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Translator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    margin: 50,
    marginTop: 80,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
  },
  langText: {
    fontSize: 20,
    textAlign: "center",
    margin: 5,
    color: "blue",
  },
});
