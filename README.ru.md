# On-Screen Keyboard App

Это пример приложения с виртуальной клавиатурой на экране, разработанное с использованием React и Material-UI (MUI).

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

![Screenshot](./screenshots/ru_screen.png)

<!-- <hr> -->

С помощью этого приложения, пользователи могут вводить текст на виртуальной клавиатуре, выбирать язык раскладки клавиатуры (русский или английский), использовать клавиши Caps Lock, Backspace, пробел и Enter.

## Установка:

[![NPM](https://nodei.co/npm/@autosys/react-mui-keyboard.png?downloads=true&stars=true)](https://www.npmjs.com/package/@autosys/react-mui-keyboard)

Установка с помощью npm:

`npm install @autosys/react-mui-keyboard`

Установка с помощью yarn:

`yarn add @autosys/react-mui-keyboard`

## Использование

1. Для ввода текста, щелкните на кнопки виртуальной клавиатуры или используйте клавиши Caps Lock, Backspace, пробел и Enter.

2. Для изменения языка раскладки клавиатуры, щелкните на кнопку "RU" (русская раскладка) или "EN" (английская раскладка).

## Технологии

- React: JavaScript-библиотека для построения пользовательских интерфейсов.
- Material-UI (MUI): Библиотека компонентов для создания стильных пользовательских интерфейсов.

## Лицензия

Этот проект лицензирован под MIT License - подробности смотрите в файле [LICENSE](LICENSE).

## Пример использования:

```jsx
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { MuiKeyboard } from '@autosys/react-mui-keyboard';
import { russianButtons, englishButtons, numbers } from 'путь_к_вашим_клавишам';

const App = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState < string > '';

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
    />
  );
};

export default App;
```

### Свойства

| Свойство            | Тип                                                                         | Описание                                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `textField`         | `JSX.Element`                                                               | Компонент текстового поля ввода.                                                                                                                                          |
| `slide`             | `boolean`                                                                   | Флаг, указывающий, должна ли клавиатура появиться с анимацией Slide. По умолчанию, `true`.                                                                                |
| `direction`         | `SlideProps <"left" \| "right" \| "up" \| "down">`                          | Направление анимации Slide (используется, если `slide` установлен в `true`). По умолчанию, `up`.                                                                          |
| `checked`           | `boolean`                                                                   | Флаг видимости клавиатуры.                                                                                                                                                |
| `setInputValue`     | `React.Dispatch<React.SetStateAction<string>>`                              | Callback для установки значения текстового поля.                                                                                                                          |
| `numbers`           | `string[]`                                                                  | Массив символов для кнопок с цифрами.                                                                                                                                     |
| `firstLanguage*`    | `string[]`                                                                  | Массив символов для кнопок в первом языке.                                                                                                                                |
| `secondLanguage`    | `string[]`                                                                  | Массив символов для кнопок во втором языке.                                                                                                                               |
| `secondLangLabel`   | `string`                                                                    | Метка для второго языка.                                                                                                                                                  |
| `firstLangLabel`    | `string`                                                                    | Метка для первого языка.                                                                                                                                                  |
| `keyboardWidth`     | `string \| number`                                                          | Ширина клавиатуры.                                                                                                                                                        |
| `buttonSize`        | `ButtonProps <"small" \| "medium" \| "large">`                              | Размер кнопки.                                                                                                                                                            |
| `labelLangButton`   | `boolean`                                                                   | Кнопка переключения языков.                                                                                                                                               |
| `reverseButton`     | `boolean`                                                                   | Кнопка сброса текста.                                                                                                                                                     |
| `singlyBack`        | `boolean`                                                                   | Если `true` кнопка backspace отдельно от блока c цифрами.                                                                                                                 |
| `labelLetterButton` | `boolean`                                                                   | If `true`, добавляется кнопка для переключения между раскладкой с буквами и цифрами.                                                                                      |
| `betweenButtons`    | `boolean \| number`                                                         | Расстояние между кнопками.                                                                                                                                                |
| `numbersColumns`    | `string`                                                                    | Количество столбцов для цифровой клавиатуры, когда она отделены от букв. По умолчанию, `5`.                                                                               |
| `numbersRows`       | `string`                                                                    | Количество строк для цифровой клавиатуры, когда она отделена от букв. По умолчанию, `3`.                                                                                  |
| `allKeyboardStyle`  | `SxProps`                                                                   | [sx prop - это ярлык для определения пользовательских стилей, который имеет доступ к теме.](https://mui.com/system/getting-started/the-sx-prop/)                          |
| `timeout`           | `SlideProps <number \| { appear?: number, enter?: number, exit?: number }>` | [Продолжительность перехода в миллисекундах. Вы можете указать единый тайм-аут для всех переходов или индивидуально для объекта.](https://mui.com/material-ui/api/slide/) |

Реквизиты, отмеченные символом \*, обязательны для использования.

### Использование без текстового поля и с контекстом

Если вы хотите использовать компонент MuiKeyboard без встроенного текстового поля и управлять входным значением с помощью контекста, выполните следующие действия:

1. Оберните ваше приложение `MuiKeyboardProvider`:

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiKeyboardProvider } from '@autosys/react-mui-keyboard';
import { russianButtons } from '@autosys/react-mui-keyboard';

ReactDOM.render(
  <MuiKeyboardProvider
    firstLanguage={russianButtons}
    sx={{ display: 'flex', justifyContent: 'center', mt: 50 }}
    keyboardWidth={'900px'}
  >
    <App />
  </MuiKeyboardProvider>,
  document.getElementById('root'),
);
```

2. Затем вы можете использовать `useMuiKeyboard` в любом другом компоненте, чтобы получить доступ к входному значению и установщику из контекста.

```tsx
// App.tsx
import React from 'react';
import { TextField } from '@mui/material';
import { useMuiKeyboard } from '@autosys/react-mui-keyboard';

const App = () => {
  const { inputValue, keyboardFeature } = useMuiKeyboard();
  return (
    <TextField
      value={inputValue}
      onClick={() => keyboardFeature({ slideEffect: false })}
      label="Click!"
    >
      Hello
    </TextField>
  );
};

export default App;
```

Если вы хотите, чтобы ваш компонент (например, кнопка) мог только закрывать клавиатуру, используйте `onClick={() => keyboardFeature({ slideEffect: false })}`

![Example_context](./screenshots/keyboard_context.png)

Если вы хотите обнулить значение inputValue, но не хотите это делать с помощью кнопки на клавиатуре, вы можете использовать любую другую кнопку с помощью `onClick={() => keyboardFeature({ resetText: true })}`
