# On-Screen Keyboard App

This is an example application featuring a virtual on-screen keyboard, developed using React and Material-UI (MUI).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

Read this in other languages: [Русский](README.ru.md)

![Screenshot](./screenshots/en_screen.png)

<!-- <hr> -->

With this application, users can input text using the virtual keyboard, select the keyboard layout language (Russian or English), use Caps Lock, Backspace, Space, and Enter keys.

## Installation

Install with npm:

`npm install @autonomous-systems/react-mui-keyboard`

Install with yarn:

`yarn add @autonomous-systems/react-mui-keyboard`

## Usage

1. To input text, click on the virtual keyboard buttons or use the Caps Lock, Backspace, Space, and Enter keys.

2. To change the keyboard layout language, click on the "RU" button (Russian layout) or "EN" button (English layout).

## Technologies

- React: JavaScript library for building user interfaces.
- Material-UI (MUI): Component library for creating stylish user interfaces.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Example Usage:

```tsx
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { MuiKeyboard } from 'react-material-ui-keyboard';
import { russianButtons, englishButtons, numbers } from 'path_to_your_button_data';

const App = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <MuiKeyboard
      textField={
        <TextField
          onChange={handleUrlChange}
          onClick={handleChange}
          value={inputValue}
          fullWidth
          multiline
        />
      }
      slide
      direction="up"
      checked={checked}
      setInputValue={setInputValue}
      numbers={numbers}
      firstLanguage={russianButtons}
      secondLanguage={englishButtons}
      secondLangLabel="EN"
      firstLangLabel="RU"
      keyboardWidth={'900px'}
      buttonSize="medium"
      labelLangButton
      reverseButton
      sx={{ display: 'flex' }}
    />
  );
};

export default App;
```

### Properties

| Name              | Type                                               | Description                                                                                                                               |
| ----------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `textField`       | `JSX.Element`                                      | Text input field component.                                                                                                               |
| `slide`           | `boolean`                                          | A flag indicating whether the keyboard should appear with a Slide animation. By default, `true`.                                          |
| `direction`       | `SlideProps <"left" \| "right" \| "up" \| "down">` | Slide animation direction (used if `slide` is set to `true`). By default, `up`.                                                           |
| `checked`         | `boolean`                                          | Keyboard visibility state flag.                                                                                                           |
| `setInputValue`   | `React.Dispatch<React.SetStateAction<string>>`     | Callback to set the input field's value.                                                                                                  |
| `numbers`         | `string[]`                                         | Array of characters for keyboard number buttons.                                                                                          |
| `firstLanguage*`  | `string[]`                                         | Array of characters for keyboard buttons in the first language.                                                                           |
| `secondLanguage`  | `string[]`                                         | Array of characters for keyboard buttons in the second language.                                                                          |
| `secondLangLabel` | `string`                                           | Label for the second language.                                                                                                            |
| `firstLangLabel`  | `string`                                           | Label for the first language.                                                                                                             |
| `keyboardWidth`   | `string \| number`                                 | Keyboard width.                                                                                                                           |
| `buttonSize`      | `ButtonProps <"small" \| "medium" \| "large">`     | Button size.                                                                                                                              |
| `labelLangButton` | `boolean`                                          | Language switch button.                                                                                                                   |
| `reverseButton`   | `boolean`                                          | Text reset button.                                                                                                                        |
| `sx`              | `SxProps`                                          | [The sx prop is a shortcut for defining custom styles that has access to the theme.](https://mui.com/system/getting-started/the-sx-prop/) |

Props marked with \* are required.

### Usage without TextField and with Context

If you want to use the MuiKeyboard component without a built-in TextField and manage the input value using context, follow these steps:

1. Wrap your application with the `MuiKeyboardProvider`:

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiKeyboardProvider } from 'react-material-ui-keyboard';
import { russianButtons } from 'react-material-ui-keyboard';

ReactDOM.render(
  <MuiKeyboardProvider
    firstLanguage={russianButtons}
    sx={{ display: 'flex', justifyContent: 'center', mt: 50 }}
    keyboardWidth={'900px'}
  >
    <App />
  </MuiKeyboardProvider>,
  document.getElementById('root')
);
```

2. Then yo may use the `useMuiKeyboard` hook in any another component to access the input value and setter from the context.

```tsx
// App.tsx
import React from 'react';
import { TextField } from '@mui/material';
import { useMuiKeyboard } from 'react-material-ui-keyboard';

const App = () => {
  const { inputValue, slideEffect } = useMuiKeyboard();
  return (
    <TextField value={inputValue} onClick={slideEffect} label="Click!">
      Hello
    </TextField>
  );
};

export default App;
```

![Example_context](./screenshots/keyboard_context.png)
