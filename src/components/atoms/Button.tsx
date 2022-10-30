import React from 'react'
import { Button as ButtonM, ButtonProps as ButtonPropsM } from 'antd'
import styled from 'styled-components'
import classNames from 'classnames'

// interface ButtonProps {
//     onChange?(): void
//     color?: string
// }

type ButtonProps = ButtonPropsM & {
    variant?: 'primary' | 'outline-primary'
    width?: number
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant, ...ref }) => {
    return (
        <ButtonS {...ref} className={classNames('Button', variant, className)}>
            {children}
        </ButtonS>
    )
}

export default Button

const ButtonS = styled(ButtonM)<{width?: number}>`
    &.Button {
        width: ${p => p.width || 100}px;
        &.primary {
            color: blue;
            border: 1px solid blue;
            border-radius: 6px;
        }
        &.outline-primary {
            color: red;
            border-radius: 6px;
            border: 1px solid red;
        }
    }
`
