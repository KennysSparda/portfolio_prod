import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'

function ToggleTheme() {

}

export default function Document() {


  return (
    <Html>
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: themeInitializerScript,
          }}
        >
        </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

const themeInitializerScript = `(function() {
  ${setInitialColorMode.toString()}
  setInitialColorMode();
})`

function setInitialColorMode() {
  function getInitialColorMode() {
    const persistedPreferenceMode = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedPreferenceMode === 'string';

    if (hasPersistedPreference) {
      return persistedPreferenceMode
    }

    const preference = window.matchMedia('(preference-color-scheme: light)');
    const hasMediaQueryPreference = typeof preference.matches == 'boolean';

    if (hasMediaQueryPreference) {
      return preference.matches ? 'light' : 'dark';
    }
    return "dark";
  }

  const currentColorMode = getInitialColorMode();
  const element = document.documentElement;
  element.style.setProperty('--initial-color-mode', currentColorMode);

  if (currentColorMode === 'light') {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
