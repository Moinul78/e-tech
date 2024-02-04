
/**
 * Input Component
 *
 * A reusable input component with customizable styles and attributes.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='style1'] - The style of the input.
 * @param {string} [props.className=''] - Additional CSS classes for the input.
 * @param {string} [props.id=''] - The HTML id attribute for the input.
 * @param {string} [props.name=''] - The HTML name attribute for the input.
 * @param {string} [props.value=''] - The value attribute for the input.
 * @param {function} [props.onChange=''] - The onChange event handler for the input.
 * @param {function} [props.onBlur=''] - The onBlur event handler for the input.
 * @param {Object} [props.rest={}] - Additional props to be spread onto the input element.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the input.
 *
 * @returns {ReactNode} The rendered input component.
 */
import React from 'react';
import searchIcon from '../../../assets/Icons/search.svg';
const styles = {
  primary: 'border border-[#CACACA] text-primary2 placeholder-label text-sm leading-[1.375rem] font-nunito focus:border-primary4',
  secondary: 'border border-[#001E174d] text-primary placeholder-primary text-sm leading-[1.375rem] font-nunito focus:border-primary4'
};
const labelStyle = {
  primary: 'text-primary1',
  secondary: 'text-primary',
}
const inputSize = {
  lg: 'py-3',
  md: 'py-2',
  sm: 'py-1'
}

const Input = ({
  style = 'primary',
  className = '',
  id = '',
  name = '',
  value,
  onChange,
  type = 'text',
  onBlur,
  rest = {},
  placeholder = '',
  size = 'md',
  label = '',
  error,
  min = 0,
  max
}) => {
  if (type === 'search') {
    return (
      <div className={`flex gap-2 items-center border px-4 border-label rounded-full ${className} ${inputSize[size]}`}>
        <img className={size === 'lg' ? 'h-6 w-6' : 'h-4 w-4'} src={searchIcon} alt="" />
        <input
          className={`text-label  focus:outline-none  `}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  } else {
    return (
      <div className='flex flex-col'>
        <label className={`${labelStyle[style]} mb-1`} htmlFor={id}>{label}</label>
        <input
          className={`${styles[style]} ${className} ${inputSize[size]} focus:outline-none px-6 ${error ? 'border-danger' : ''}`}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          min={min}
          max={max}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
};

export default Input;

