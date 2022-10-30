import { Input, Space } from 'antd'
import classNames from 'classnames'
import styled from 'styled-components'
import React from 'react'
import { InputProps as InputPropsAntd } from 'antd'

type SearchProps = InputPropsAntd & {
    variant?: 'primary' | 'outline-primary'
    placehoder?: string
    width?: number
}
const { Search: SearchAntd } = Input

export const Search: React.FC<SearchProps> = ({
    children,
    className,
    variant,
    placehoder,
    ...ref
}) => {
    const onSearch = (value: string) => console.log(value)

    return (
        <SearchS
            className={classNames('Search', variant, className)}
            placeholder={placehoder}
            onSearch={onSearch}
            enterButton
        >
            {children}
        </SearchS>
    )
}

export default Search

const SearchS = styled(SearchAntd)`
    &.Search {
        &.primary {
            width: 50%;
            color: red;

            & button {
                background-color: red;
                box-shadow: 0;
                text-shadow: 0;
                border-color: transparent;
            }
        }
    }
`
