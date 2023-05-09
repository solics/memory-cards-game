import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: string
}

export const Button = ({
  value,
  variant = 'primary',
  onClick,
}: ButtonProps) => {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Button
