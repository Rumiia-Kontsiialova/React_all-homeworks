import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/DynamicForm.module.css'

function DynamicForm() {
  // 1. Инициализируем useForm
  const {
    register,     // для регистрации полей формы
    handleSubmit, // для обработки отправки формы
    watch,        // для отслеживания значений в реальном времени
    formState: { errors }, // содержит ошибки валидации
  } = useForm();

  // 2. Отслеживаем значение первого поля
  const firstInput = watch('firstInput', '');

  // 3. Функция обработки отправки формы
  const onSubmit = (data) => {
    console.log('Данные формы:', data);
    alert('Форма успешно отправлена!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {/* 4. Первое поле ввода */}
      <div>
        <label htmlFor="firstInput">First Field:</label>
        <input
          id="firstInput"
          {...register('firstInput', { required: 'Обязательно', minLength: { value: 5, message: 'Минимум 5 символов' } })}
          className={styles.firstInput}
        />
        {/* 5. Вывод ошибок для первого поля */}
        {errors.firstInput && (
          <p className={styles.firstInputErrors}>{errors.firstInput.message}</p>
        )}
      </div>

      {/* 6. Условно отображаем второе поле только если длина первого ≥ 5 */}
      {firstInput.length >= 5 && (
        <div>
          <label htmlFor="secondInput">Second Field:</label>
          <input
            id="secondInput"
            {...register('secondInput', { required: 'Обязательно' })}
            className={styles.secondInput}
          />
          {errors.secondInput && (
            <p className={styles.secondInputErrors}>{errors.secondInput.message}</p>
          )}
        </div>
      )}

      {/* 7. Кнопка отправки */}
      <button type="submit" className={styles.button}>Submit</button>
    </form>
  );
}

export default DynamicForm;

