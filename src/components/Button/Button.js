import React from 'react'
import cn from 'classnames'
import styles from './Button.module.scss'

const Button = ({ children, fullWidth, className, ...props }) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.fullWidth]: fullWidth,
        [className]: !!className,
      })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
