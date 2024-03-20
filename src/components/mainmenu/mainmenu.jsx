import React, { useState } from "react";
import './mainmenu.css'



export default function Mainmenu() {
    const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) { // Разрешить только цифры
      setInputValue(value);
      setIsButtonDisabled(value === ''); // Делаем кнопку доступной только если есть текст
    }
    };
    return (
        <div>
            <p>Добро пожаловать</p>
            <button>Создать тест</button>
            <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Ввести код теста'></input>
            <button disabled={isButtonDisabled}>Перейти</button>    
        </div>
        );
    
    }
