import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-family: sans-serif;
    font-size: 18px;

    li{
        line-height: 36px;
    }
`

const TodoList = () => {
    return (
        <List>
            <li>Fazer cafe</li>
            <li>Entrar na comunidade da Rocketseta</li>
            <li>Estudar EactJS</li>
        </List>
    )
}

export default TodoList;